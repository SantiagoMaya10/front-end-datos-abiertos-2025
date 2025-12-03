"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { HomePage } from "@/components/home-page"
import { DatasetPage } from "@/components/dataset-page"
import { DashboardPage } from "@/components/dashboard-page"
import { EscenariosPage } from "@/components/escenarios-page"
import { CreceColPage } from "@/components/crece-col-page"
import { SolucionPage } from "@/components/solucion-page"
import { AlcancePage } from "@/components/alcance-page"
import { ImpactoPage } from "@/components/impacto-page"

export default function Page() {
  const [currentPage, setCurrentPage] = useState("crece-col")

  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1 overflow-auto">
        {currentPage === "crece-col" && <CreceColPage />}
        {currentPage === "quienes-somos" && <HomePage />}
        {currentPage === "solucion" && <SolucionPage />}
        {currentPage === "alcance" && <AlcancePage />}
        {currentPage === "dataset" && <DatasetPage />}
        {currentPage === "dashboard" && <DashboardPage />}
        {currentPage === "escenarios" && <EscenariosPage />}
        {currentPage === "impacto" && <ImpactoPage />}
      </main>
    </div>
  )
}
