"use client"

import { cn } from "@/lib/utils"

interface SidebarProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export function Sidebar({ currentPage, setCurrentPage }: SidebarProps) {
  const menuItems = [
    { id: "crece-col", label: "CRECE-Col" },
    { id: "quienes-somos", label: "¿Quiénes somos?" },
    { id: "solucion", label: "Solución" },
    { id: "escenarios", label: "Escenarios" },
    { id: "dataset", label: "Conjunto de Datos" },
    { id: "dashboard", label: "Dashboard" },
    { id: "alcance", label: "Alcance" },
    { id: "impacto", label: "Impacto" },
  ]

  return (
    <aside className="w-64 bg-[#3c5a99] text-white flex flex-col">
      <div className="p-4 border-b border-white/20">
        <div className="flex justify-center mb-4">
          <img src="/images/crece-col.png" alt="CRECE-Col Logo" className="w-32 h-auto" />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-white text-[#3c5a99] px-2 py-1 rounded text-xs font-bold">GOV.CO</div>
        </div>
        <div className="text-sm font-medium">
          Superintendencia
          <br />
          de Sociedades
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setCurrentPage(item.id)}
                className={cn(
                  "w-full flex items-center px-4 py-3 rounded-lg transition-colors text-left",
                  currentPage === item.id ? "bg-white/20 text-white" : "hover:bg-white/10 text-white/80",
                  item.id === "crece-col" && "bg-gradient-to-r from-blue-500/30 to-green-500/30 border border-white/20",
                )}
              >
                <span className={cn("text-sm", item.id === "crece-col" && "font-bold")}>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/20">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 font-bold text-xs">CO</span>
            <span className="text-xs">GOV.CO</span>
          </div>
          <span className="text-xs text-white/60">COLOMBIA</span>
        </div>
        <a
          href="https://github.com/SantiagoMaya10/reto_datosgov_supersociedades_2025"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 mt-3 text-xs text-white/80 hover:text-white"
        >
          <span>Repositorio Github</span>
        </a>
      </div>
    </aside>
  )
}
