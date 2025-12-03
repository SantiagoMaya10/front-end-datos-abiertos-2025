"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function RetoDatosPage() {
  const [visibleSections, setVisibleSections] = useState<boolean[]>([false, false, false, false])
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setVisibleSections((prev) => {
                const newVisible = [...prev]
                newVisible[index] = true
                return newVisible
              })
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#3c5a99] mb-2">Reto Datos Abiertos 2025</h1>
          <p className="text-gray-600">Superintendencia de Sociedades</p>
        </div>

        <div className="space-y-8">
          <div
            ref={(el) => {
              sectionRefs.current[0] = el
            }}
            className={`transition-all duration-700 ${
              visibleSections[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Card className="border-l-4 border-l-[#3c5a99] shadow-md">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-[#3c5a99] mb-4">
                  Crecimiento esperado de las empresas del pais por sector
                </h2>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-[#3c5a99]/10 px-4 py-2 rounded-lg">
                    <span className="text-sm text-gray-500">Dificultad:</span>
                    <span className="ml-2 font-semibold text-[#3c5a99]">Intermedio</span>
                  </div>
                  <div className="bg-[#3c5a99]/10 px-4 py-2 rounded-lg">
                    <span className="text-sm text-gray-500">Eje:</span>
                    <span className="ml-2 font-semibold text-[#3c5a99]">Economia y Empleo</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div
            ref={(el) => {
              sectionRefs.current[1] = el
            }}
            className={`transition-all duration-700 delay-100 ${
              visibleSections[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Card className="border-l-4 border-l-[#3c5a99] shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#3c5a99] mb-3">Descripcion del Reto</h3>
                <p className="text-gray-700 leading-relaxed">
                  Actualmente, se requiere fortalecer la capacidad institucional para estimar el crecimiento esperado de
                  las empresas del pais por sector economico a partir de informacion historica. Las areas misionales
                  operan con cortes anuales y tableros descriptivos que muestran el "que paso", pero carecen de un
                  mecanismo predictivo que anticipe el "que pasara" (p. ej., crecimiento sectorial y su dispersion entre
                  empresas).
                </p>
              </CardContent>
            </Card>
          </div>

          <div
            ref={(el) => {
              sectionRefs.current[2] = el
            }}
            className={`transition-all duration-700 delay-200 ${
              visibleSections[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Card className="border-l-4 border-l-[#3c5a99] shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#3c5a99] mb-3">Objetivo General</h3>
                <p className="text-gray-700 leading-relaxed">
                  Desarrollar un modelo predictivo capaz de estimar las ganancias proyectadas de las empresas,
                  integrando tecnicas de analitica predictiva y descriptiva de datos en un dashboard interactivo que
                  facilite la toma de decisiones estrategicas.
                </p>
              </CardContent>
            </Card>
          </div>

          <div
            ref={(el) => {
              sectionRefs.current[3] = el
            }}
            className={`transition-all duration-700 delay-300 ${
              visibleSections[3] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Card className="border-l-4 border-l-[#3c5a99] shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#3c5a99] mb-3">Objetivos Especificos</h3>
                <ul className="space-y-3">
                  <li className="text-gray-700 leading-relaxed flex gap-2">
                    <span className="text-[#3c5a99] font-bold min-w-[40px]">OE1.</span>
                    <span>
                      Limpiar, procesar y analizar el set de datos de las 10.000 empresas mas grandes del pais.
                    </span>
                  </li>
                  <li className="text-gray-700 leading-relaxed flex gap-2">
                    <span className="text-[#3c5a99] font-bold min-w-[40px]">OE2.</span>
                    <span>
                      Explorar tecnicas de machine learning para generar un modelo predictivo de ganancias o
                      crecimiento.
                    </span>
                  </li>
                  <li className="text-gray-700 leading-relaxed flex gap-2">
                    <span className="text-[#3c5a99] font-bold min-w-[40px]">OE3.</span>
                    <span>Validar el modelo con metricas de desempeno.</span>
                  </li>
                  <li className="text-gray-700 leading-relaxed flex gap-2">
                    <span className="text-[#3c5a99] font-bold min-w-[40px]">OE4.</span>
                    <span>
                      Desarrollar un dashboard interactivo que permita: Consultar resultados y predicciones por sector,
                      ubicacion o tamano empresarial. Responder preguntas estrategicas de decision (por ejemplo, "¿que
                      sectores tienen mayor potencial de rentabilidad?" o "¿como se proyectan las ganancias segun el
                      patrimonio?").
                    </span>
                  </li>
                  <li className="text-gray-700 leading-relaxed flex gap-2">
                    <span className="text-[#3c5a99] font-bold min-w-[40px]">OE5.</span>
                    <span>Generar una herramienta de apoyo para la toma de decisiones basadas en datos.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Espacio adicional para permitir scroll */}
          <div className="h-20"></div>
        </div>
      </div>
    </div>
  )
}
