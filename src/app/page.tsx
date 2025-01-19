'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Sidebar from './components/Sidebar'
import EvaluationFramework from './components/EvaluationFramework'
import ContractParsing from './components/ContractParsing'
import { FileText, BarChart } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <Tabs defaultValue="evaluation" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 shadow-md rounded-t-lg">
            <TabsTrigger value="evaluation" className="text-lg rounded-tl-lg">
              <BarChart className="mr-2" />
              Evaluation Framework
            </TabsTrigger>
            <TabsTrigger value="parsing" className="text-lg rounded-tr-lg">
              <FileText className="mr-2" />
              Contract Parsing
            </TabsTrigger>
          </TabsList>
          <h1 className="text-4xl font-bold mb-6 text-green-800 flex items-center shadow-sm p-4 rounded-lg">
            <FileText className="mr-2" />
            Climate Tech Event Contract Analysis
          </h1>
          <TabsContent value="evaluation">
            <EvaluationFramework />
          </TabsContent>
          <TabsContent value="parsing">
            <ContractParsing />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

