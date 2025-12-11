"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TooltipProvider } from "@/components/ui/tooltip"

export function AlcancePage() {
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null)

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#3c5a99] to-[#5a7dc9] text-white px-8 py-12">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div>
              <Badge className="bg-white/20 text-white mb-4 hover:bg-white/30">Prototipo / MVP analítico</Badge>
              <h1 className="text-4xl font-bold mb-3">Alcance que tuvimos</h1>
              <p className="text-xl text-white/90">
                Prueba de concepto de modelo XGBoost para predicción de ganancias empresariales
              </p>
            </div>
            <div className="hidden lg:block">
              <svg width="200" height="100" viewBox="0 0 200 100" className="opacity-60">
                <path
                  d="M0,50 Q25,20 50,50 T100,50 T150,50 T200,50"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  className="animate-pulse"
                />
                <path
                  d="M0,60 Q25,30 50,60 T100,60 T150,60 T200,60"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <circle cx="50" cy="50" r="4" fill="white" />
                <circle cx="100" cy="50" r="4" fill="white" />
                <circle cx="150" cy="50" r="4" fill="white" />
              </svg>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-8 py-10 space-y-10">
          {/* Tarjeta Resumen del Modelo */}
          <Card className="border-2 border-[#3c5a99]/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-[#3c5a99]/5 to-[#5a7dc9]/5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#3c5a99] rounded-xl flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" />
                    <circle cx="4" cy="8" r="2" />
                    <circle cx="20" cy="8" r="2" />
                    <circle cx="4" cy="16" r="2" />
                    <circle cx="20" cy="16" r="2" />
                    <line x1="6" y1="8" x2="9" y2="10" />
                    <line x1="18" y1="8" x2="15" y2="10" />
                    <line x1="6" y1="16" x2="9" y2="14" />
                    <line x1="18" y1="16" x2="15" y2="14" />
                  </svg>
                </div>
                <CardTitle className="text-2xl text-[#3c5a99]">Modelo XGBoost Regressor</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3c5a99" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Algoritmo:</span>
                      <span className="ml-2 text-gray-600">XGBoost Regressor</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Objetivo:</span>
                      <span className="ml-2 text-gray-600">Predecir GANANCIA (PÉRDIDA) de empresas colombianas</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18" />
                        <path d="M9 21V9" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Dataset:</span>
                      <span className="ml-2 text-gray-600">~40,000 empresas, 81 características</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2">
                        <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
                        <rect x="8" y="2" width="8" height="4" rx="1" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">División de datos:</span>
                      <ul className="ml-2 text-gray-600 text-sm mt-1 space-y-1">
                        <li>80% entrenamiento (~32,000 muestras)</li>
                        <li>20% prueba (~8,000 muestras)</li>
                        <li>Semilla aleatoria: 42</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2">
                        <path d="M12 20V10" />
                        <path d="M18 20V4" />
                        <path d="M6 20v-4" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Hiperparámetros:</span>
                      <ul className="ml-2 text-gray-600 text-sm mt-1 font-mono space-y-1">
                        <li>n_estimators = 100</li>
                        <li>learning_rate = 0.1</li>
                        <li>max_depth = 6</li>
                        <li>objective = reg:squarederror</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  Datos normalizados (escala 0-1)
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Métricas de Desempeño */}
          <div>
            <h2 className="text-2xl font-bold text-[#3c5a99] mb-6">Parámetros de validación del modelo</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* MAE */}
              <Card
                className="border-2 border-green-200 hover:shadow-lg transition-shadow cursor-pointer"
                onMouseEnter={() => setHoveredMetric("mae")}
                onMouseLeave={() => setHoveredMetric(null)}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">MAE</p>
                      <p className="text-3xl font-bold text-green-600">0.015</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Error absoluto promedio de 0.015 unidades (escala normalizada 0-1).
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    En promedio, el modelo se equivoca poco: está bastante cerca del valor real para la mayoría de
                    empresas.
                  </p>
                  <Badge className="mt-4 bg-green-100 text-green-700 hover:bg-green-200">Error promedio bajo</Badge>
                </CardContent>
              </Card>

              {/* RMSE */}
              <Card
                className="border-2 border-amber-200 hover:shadow-lg transition-shadow cursor-pointer"
                onMouseEnter={() => setHoveredMetric("rmse")}
                onMouseLeave={() => setHoveredMetric(null)}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2">
                        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                        <path d="M12 6v4l2 2" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">RMSE</p>
                      <p className="text-3xl font-bold text-amber-600">0.27</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">El RMSE (0.27) es 18 veces mayor que el MAE (0.015).</p>
                  <p className="text-sm text-gray-500 italic">
                    Esto indica que existen <strong>outliers</strong>: algunas empresas tienen errores muy grandes en
                    las predicciones.
                  </p>
                  <Badge className="mt-4 bg-amber-100 text-amber-700 hover:bg-amber-200">
                    Presencia de errores grandes
                  </Badge>
                </CardContent>
              </Card>

              {/* R² */}
              <Card
                className="border-2 border-blue-200 hover:shadow-lg transition-shadow cursor-pointer"
                onMouseEnter={() => setHoveredMetric("r2")}
                onMouseLeave={() => setHoveredMetric(null)}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
                        <path d="M3 3v18h18" />
                        <path d="M18 17V9" />
                        <path d="M13 17V5" />
                        <path d="M8 17v-3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">R²</p>
                      <p className="text-3xl font-bold text-blue-600">14.65%</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    El modelo explica el ~15% de la variabilidad en las ganancias.
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    Captura algunas relaciones, pero el 85% restante depende de factores no observados.
                  </p>
                  <Badge className="mt-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                    Capacidad explicativa baja-moderada
                  </Badge>
                </CardContent>
              </Card>
            </div>

            {/* Gráfico comparativo MAE vs RMSE */}
            <Card className="mt-6 border border-gray-200">
              <CardContent className="pt-6">
                <div className="flex items-center gap-8">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-700 mb-4">Comparación MAE vs RMSE</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">MAE</span>
                          <span className="font-mono text-green-600">0.015</span>
                        </div>
                        <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: "5.5%" }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">RMSE</span>
                          <span className="font-mono text-amber-600">0.27</span>
                        </div>
                        <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full" style={{ width: "100%" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      La diferencia entre MAE y RMSE evidencia la existencia de{" "}
                      <strong>errores puntuales muy altos</strong>.
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Es una señal de que el modelo debe usarse con cautela para casos individuales.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Zona de uso recomendado vs no recomendado */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-green-300 bg-gradient-to-br from-green-50 to-green-100/50">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">¿Para qué SÍ es útil este modelo?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    { title: "Análisis exploratorio", desc: "Entender qué variables influyen más en las ganancias" },
                    {
                      title: "Segmentación inicial",
                      desc: "Identificar patrones generales por sector, tamaño o región",
                    },
                    { title: "Alertas tempranas", desc: "Detectar empresas cuyos valores se desvían de lo esperado" },
                    { title: "Benchmark técnico", desc: "Comparar contra modelos futuros más sofisticados" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-green-800">{item.title}</p>
                        <p className="text-sm text-green-700/80">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-red-100/30">
              <CardHeader>
                <CardTitle className="text-lg text-red-800">¿Para qué NO es suficiente todavía?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    { title: "Predicciones ultra precisas", desc: "Ganancias exactas de cada empresa individual" },
                    {
                      title: "Decisiones financieras críticas",
                      desc: "Inversión, crédito o supervisión sancionatoria sin análisis experto",
                    },
                    {
                      title: "Reemplazar análisis tradicional",
                      desc: "El juicio experto de los equipos de Supersociedades sigue siendo esencial",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-red-800">{item.title}</p>
                        <p className="text-sm text-red-700/80">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
