'use client'

import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Set up the worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

interface PDFViewerProps {
  file: File
}

export default function PDFViewer({ file }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  return (
    <div className="border border-green-300 rounded-lg p-4 mt-4">
      <h3 className="text-lg font-semibold mb-2 text-green-700">PDF Viewer</h3>
      <div className="flex justify-center">
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          className="max-w-full"
        >
          <Page pageNumber={pageNumber} width={600} />
        </Document>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Button
          onClick={() => setPageNumber(page => Math.max(page - 1, 1))}
          disabled={pageNumber <= 1}
          className="bg-green-600 hover:bg-green-700"
        >
          <ChevronLeft className="mr-2" /> Previous
        </Button>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <Button
          onClick={() => setPageNumber(page => Math.min(page + 1, numPages || 1))}
          disabled={pageNumber >= (numPages || 1)}
          className="bg-green-600 hover:bg-green-700"
        >
          Next <ChevronRight className="ml-2" />
        </Button>
      </div>
    </div>
  )
}

