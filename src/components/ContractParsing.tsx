'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import DocumentUploader from './DocumentUploader'
import PDFViewer from './PDFViewer'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function ContractParsing() {
  const [currentStep, setCurrentStep] = useState(0)
  const [uploadedDocument, setUploadedDocument] = useState<File | null>(null)
  const [selectedClause, setSelectedClause] = useState<string | null>(null)
  const [isClauseDropdownOpen, setIsClauseDropdownOpen] = useState(false)

  const steps = [
    'Upload Document',
    'Identify Semantic Chunks',
    'Find Similar Documents'
  ]

  const ppaClauses = [
    'Definitions',
    'Term and Termination',
    'Facility Description',
    'Commercial Operation Date',
    'Purchase and Sale of Energy',
    'Pricing and Payment',
    'Metering',
    'Transmission and Delivery',
    'Force Majeure',
    'Default and Remedies',
    'Representations and Warranties',
    'Indemnification',
    'Insurance',
    'Assignment',
    'Confidentiality',
    'Dispute Resolution',
  ]

  const handleDocumentUpload = (file: File) => {
    setUploadedDocument(file)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4 text-green-800">Contract Parsing</h2>
      <div className="mb-6">
        <ol className="flex items-center w-full">
          {steps.map((step, index) => (
            <li key={index} className={`flex w-full items-center ${index < steps.length - 1 ? 'after:content-[""] after:w-full after:h-1 after:border-b after:border-green-200 after:border-4 after:inline-block' : ''}`}>
              <span className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${currentStep >= index ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                {index + 1}
              </span>
              <span className="ml-2 text-sm">{step}</span>
            </li>
          ))}
        </ol>
      </div>
      {currentStep === 0 && (
        <div className="space-y-4">
          <DocumentUploader onUpload={handleDocumentUpload} />
          <div className="border border-green-200 rounded-md p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsClauseDropdownOpen(!isClauseDropdownOpen)}
            >
              <h3 className="text-lg font-semibold text-green-700">PPA Clauses</h3>
              {isClauseDropdownOpen ? <ChevronUp /> : <ChevronDown />}
            </div>
            {isClauseDropdownOpen && (
              <div className="mt-2 space-y-2">
                {ppaClauses.map((clause, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded-md cursor-pointer ${selectedClause === clause ? 'bg-green-100' : 'hover:bg-green-50'}`}
                    onClick={() => setSelectedClause(clause)}
                  >
                    {clause}
                  </div>
                ))}
              </div>
            )}
          </div>
          {uploadedDocument && <PDFViewer file={uploadedDocument} />}
        </div>
      )}
      {currentStep === 1 && (
        <div>
          <h3 className="text-xl font-semibold mb-2 text-green-700">Identify Semantic Chunks</h3>
          <p>Content for identifying semantic chunks will be added here.</p>
        </div>
      )}
      {currentStep === 2 && (
        <div>
          <h3 className="text-xl font-semibold mb-2 text-green-700">Find Similar Documents</h3>
          <p>Content for finding similar documents will be added here.</p>
        </div>
      )}
      <div className="mt-6 space-x-2">
        <Button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="bg-green-600 hover:bg-green-700"
        >
          Previous
        </Button>
        <Button
          onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
          disabled={currentStep === steps.length - 1}
          className="bg-green-600 hover:bg-green-700"
        >
          Next
        </Button>
      </div>
    </div>
  )
}

