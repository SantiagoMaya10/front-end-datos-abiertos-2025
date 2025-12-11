"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ImpactoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3c5a99] to-[#2d4373] text-white py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Impacto y Escalabilidad</h1>
          <p className="text-xl text-blue-100">
            Un proyecto que transforma datos en decisiones estratégicas para el ecosistema empresarial colombiano
          </p>
        </div>
      </section>

      {/* Por qué es innovador */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#3c5a99] mb-2 text-center">¿Qué hace innovador este proyecto?</h2>
          <p className="text-gray-600 text-center mb-12">Cuatro pilares que transforman la analítica institucional</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tarjeta 1 */}
            <Card className="border-l-4 border-l-[#3c5a99] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#3c5a99]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3c5a99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <CardTitle className="text-[#3c5a99]">De lo descriptivo a lo predictivo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-600">
                <p>Las áreas misionales tradicionalmente operan con tableros descriptivos: muestran qué pasó.</p>
                <p>
                  Este proyecto introduce un mecanismo predictivo que responde al "¿qué podría pasar?" a nivel sectorial
                  y empresarial.
                </p>
                <p className="font-medium text-[#3c5a99]">
                  Permite simular escenarios sobre ganancias según cambios en tasa de interés, variación de pasivos,
                  tasa de cambio, etc.
                </p>
              </CardContent>
            </Card>

            {/* Tarjeta 2 */}
            <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                    />
                  </svg>
                </div>
                <CardTitle className="text-green-600">Integración de múltiples fuentes de datos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-600">
                <p>
                  Integra variables <strong>micro</strong> (activos, pasivos, patrimonio, ingresos, ganancias, año,
                  región, departamento, macrosector, CIIU) con variables <strong>macro</strong> (tasa de interés,
                  inflación, IPC, desempleo, inversión directa, TRM, PIB departamental).
                </p>
                <p className="font-medium text-green-600">
                  Esto permite entender cómo shocks macroeconómicos pueden repercutir en las ganancias de los sectores.
                </p>
              </CardContent>
            </Card>

            {/* Tarjeta 3 */}
            <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <CardTitle className="text-orange-600">Interactividad y escenarios</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-600">
                <p>El dashboard no solo muestra predicciones, también permite a los usuarios construir escenarios:</p>
                <div className="bg-gray-100 p-4 rounded-lg text-sm italic">
                  "¿Qué pasaría con las ganancias del sector servicios si la tasa de interés sube y los pasivos aumentan
                  en 1.000 millones?"
                </div>
                <p>
                  El sistema devuelve una predicción y puede complementar con una recomendación generada por GenAI sobre
                  decisiones estratégicas.
                </p>
              </CardContent>
            </Card>

            {/* Tarjeta 4 */}
            <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-purple-600">Puente entre ML y decisiones humanas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-600">
                <p>
                  El modelo no pretende reemplazar a los analistas; se convierte en una herramienta de apoyo que sugiere
                  tendencias y alertas.
                </p>
                <p className="font-medium text-purple-600">
                  Complementa la supervisión tradicional con una capa de analítica avanzada, manteniendo el juicio
                  humano al centro.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap de madurez */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#3c5a99] mb-2 text-center">Camino de madurez del proyecto</h2>
          <p className="text-gray-600 text-center mb-12">Evolución planificada en cuatro etapas</p>

          <div className="relative">
            {/* Línea conectora */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 via-orange-500 to-purple-500"></div>

            <div className="grid md:grid-cols-4 gap-6">
              {/* Etapa 1 */}
              <div className="relative">
                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-white font-bold">1</span>
                </div>
                <Card className="border-blue-200">
                  <CardHeader className="pb-2">
                    <Badge className="bg-blue-100 text-blue-700 mb-2">Trabajo realizado</Badge>
                    <CardTitle className="text-lg text-blue-600">Exploración</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-600 space-y-2">
                    <p>Limpieza y análisis de datos de las 10.000 empresas más grandes.</p>
                    <p>Modelo XGBoost con 80% train / 20% test.</p>
                    <p className="font-medium">MAE = 0.015, RMSE = 0.27, R² = 0.1465</p>
                  </CardContent>
                </Card>
              </div>

              {/* Etapa 2 */}
              <div className="relative">
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-white font-bold">2</span>
                </div>
                <Card className="border-green-200">
                  <CardHeader className="pb-2">
                    <Badge className="bg-green-100 text-green-700 mb-2">Estado actual</Badge>
                    <CardTitle className="text-lg text-green-600">Enriquecimiento</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-600 space-y-2">
                    <p>Incorporación de nuevas variables financieras y macroeconómicas.</p>
                    <p>Generación de features derivados (ratios, crecimientos, estacionalidad).</p>
                  </CardContent>
                </Card>
              </div>

              {/* Etapa 3 */}
              <div className="relative">
                <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-white font-bold">3</span>
                </div>
                <Card className="border-orange-200">
                  <CardHeader className="pb-2">
                    <Badge className="bg-orange-100 text-orange-700 mb-2">Mediano plazo</Badge>
                    <CardTitle className="text-lg text-orange-600">Especialización</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-600 space-y-2">
                    <p>Segmentación por sector y tamaño.</p>
                    <p>Validación cruzada, optimización y ensembles.</p>
                    <p>Análisis de explicabilidad (SHAP).</p>
                    <p>Integración de frontend con backend de modelos de IA</p>
                  </CardContent>
                </Card>
              </div>

              {/* Etapa 4 */}
              <div className="relative">
                <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-white font-bold">4</span>
                </div>
                <Card className="border-purple-200">
                  <CardHeader className="pb-2">
                    <Badge className="bg-purple-100 text-purple-700 mb-2">Largo plazo</Badge>
                    <CardTitle className="text-lg text-purple-600">Producto institucional</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-600 space-y-2">
                    <p>Integración en flujo operativo de Supersociedades.</p>
                    <p>Automatización y versiones diferenciadas.</p>
                    <p>Alertas automáticas y reportes periódicos.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
