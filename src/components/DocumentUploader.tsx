'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Upload, File } from 'lucide-react'

interface DocumentUploaderProps {
  onUpload: (file: File) => void
}

export default function DocumentUploader({ onUpload }: DocumentUploaderProps) {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0])
    }
  }

  const handleUpload = () => {
    if (file) {
      onUpload(file)
      setFile(null)
    }
  }

  return (
    <div className="border-2 border-dashed border-green-300 rounded-lg p-6 text-center">
      <input
        type="file"
        onChange={handleFileChange}
        className="hidden"
        id="file-upload"
        accept=".pdf"
      />
      <label htmlFor="file-upload" className="cursor-pointer">
        <div className="flex flex-col items-center">
          <Upload className="w-12 h-12 text-green-500 mb-2" />
          <span className="text-sm text-gray-600">Drag and drop your PDF file here, or click to select</span>
        </div>
      </label>
      {file && (
        <div className="mt-4">
          <div className="flex items-center justify-center text-sm text-gray-600 mb-2">
            <File className="w-4 h-4 mr-2" />
            <span>{file.name}</span>
          </div>
          <Button onClick={handleUpload} className="bg-green-600 hover:bg-green-700">
            Upload
          </Button>
        </div>
      )}
    </div>
  )
}

