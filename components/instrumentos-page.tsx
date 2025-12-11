"use client"

import type React from "react"

import { useState } from "react"
import { Globe, Building2, TrendingUp, Landmark } from "lucide-react"

interface Instrumento {
  id: string
  nombre: string
  imagen: string
  entidad: string
  icon: React.ReactNode
}

const instrumentos: Instrumento[] = [
  {
    id: "fmi",
    nombre: "Fondo Monetario Internacional",
    imagen: "/images/fondo-20monetario-20internacional.png",
    entidad: "FMI - Artículo IV Colombia 2025",
    icon: <Landmark className="w-8 h-8" />,
  },
  {
    id: "banco-mundial",
    nombre: "Global Economic Prospects - Banco Mundial",
    imagen: "/images/globaleconomicprospect-banco-mundial.png",
    entidad: "World Bank Group - Junio 2025",
    icon: <Building2 className="w-8 h-8" />,
  },
  {
    id: "sp-global",
    nombre: "S&P Global Economic Forecast",
    imagen: "/images/s-26p-20global-20economic-20forecast.png",
    entidad: "S&P Global Market Intelligence",
    icon: <TrendingUp className="w-8 h-8" />,
  },
  {
    id: "eu-forecast",
    nombre: "European Economic Forecast",
    imagen: "/images/european-20economic-20forecast.png",
    entidad: "Comisión Europea - Otoño 2025",
    icon: <Globe className="w-8 h-8" />,
  },
]

export function InstrumentosPage() {
  const [revealedCards, setRevealedCards] = useState<Set<string>>(new Set())

  const toggleCard = (id: string) => {
    setRevealedCards((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#3c5a99] to-[#2c4a89] text-white py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-10 h-10" />
            <h1 className="text-3xl font-bold">Instrumentos Externos</h1>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {instrumentos.map((instrumento) => {
            const isRevealed = revealedCards.has(instrumento.id)

            return (
              <div
                key={instrumento.id}
                onClick={() => toggleCard(instrumento.id)}
                className="relative cursor-pointer group perspective-1000"
              >
                <div
                  className={`
                    relative w-full h-[400px] transition-all duration-700 transform-style-preserve-3d
                    ${isRevealed ? "rotate-y-180" : ""}
                  `}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isRevealed ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front of card - Name */}
                  <div
                    className={`
                      absolute inset-0 rounded-2xl shadow-xl overflow-hidden
                      bg-gradient-to-br from-[#3c5a99] to-[#2c4a89]
                      flex flex-col items-center justify-center p-8 text-center
                      transition-all duration-300
                      ${!isRevealed ? "group-hover:shadow-2xl group-hover:scale-[1.02]" : ""}
                    `}
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="bg-white/20 p-6 rounded-full mb-6">
                      <div className="text-white">{instrumento.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{instrumento.nombre}</h3>
                    <p className="text-white/80 text-sm mb-6">{instrumento.entidad}</p>
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <span>Clic para revelar</span>
                      <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Back of card - Image */}
                  <div
                    className={`
                      absolute inset-0 rounded-2xl shadow-xl overflow-hidden
                      bg-white
                      ${isRevealed ? "group-hover:shadow-2xl" : ""}
                    `}
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="w-full h-full p-4 flex flex-col">
                      <div className="flex-1 relative rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={instrumento.imagen || "/placeholder.svg"}
                          alt={instrumento.nombre}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <p className="text-sm font-medium text-gray-700">{instrumento.nombre}</p>
                        <p className="text-xs text-gray-500 mt-1">Clic para volver</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
