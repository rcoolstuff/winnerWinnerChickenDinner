import { FileText, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  // For now, we'll use a static list of documents
  const documents = [
    "Document 1.pdf",
    "Document 2.pdf",
    "Document 3.pdf"
  ];

  return (
    <aside className="w-64 bg-white p-6 shadow-md overflow-auto">
      <h2 className="text-xl font-semibold mb-4 text-green-800">Uploaded Documents</h2>
      {documents.length === 0 ? (
        <p className="text-gray-500 text-sm">No documents uploaded yet.</p>
      ) : (
        <ul className="space-y-2">
          {documents.map((doc, index) => (
            <li key={index} className="flex items-center justify-between p-2 bg-green-50 rounded-md">
              <div className="flex items-center">
                <FileText className="mr-2 text-green-600" size={18} />
                <span className="text-sm text-gray-700">{doc}</span>
              </div>
              <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                <Trash2 size={16} />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

