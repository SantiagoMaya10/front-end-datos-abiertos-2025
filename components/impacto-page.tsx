"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ImpactoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}

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

      {/* Impacto potencial */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#3c5a99] mb-12 text-center">
            Impacto potencial en la Superintendencia
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Columna izquierda */}
            <div>
              <h3 className="text-xl font-bold text-[#3c5a99] mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-[#3c5a99] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                Impacto dentro de Supersociedades
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center mt-1 shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-gray-800">Planificación y priorización de supervisión</strong>
                    <p className="text-gray-600 text-sm">
                      Focalizar sectores y empresas con mayor probabilidad de deterioro de ganancias.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center mt-1 shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-gray-800">Diseño de políticas y lineamientos</strong>
                    <p className="text-gray-600 text-sm">
                      Ver en qué macrosectores pueden requerirse medidas preventivas o mayor acompañamiento.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center mt-1 shrink-0">
                    <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-gray-800">Monitoreo proactivo</strong>
                    <p className="text-gray-600 text-sm">
                      Detectar señales de alerta temprana en sectores sensibles a cambios en tasas de interés, inflación
                      o tipo de cambio.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center mt-1 shrink-0">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-gray-800">Cultura de decisiones basadas en datos</strong>
                    <p className="text-gray-600 text-sm">
                      El proyecto sirve como caso demostrativo de cómo usar datos abiertos y ML para apoyar decisiones
                      estratégicas.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Columna derecha */}
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                Impacto hacia el sector empresarial y el país
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center mt-1 shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-gray-800">Insights sobre rentabilidad sectorial</strong>
                    <p className="text-gray-600 text-sm">
                      Generación de insights sobre rentabilidad sectorial y vulnerabilidad ante shocks macroeconómicos.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center mt-1 shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-gray-800">Tableros públicos agregados</strong>
                    <p className="text-gray-600 text-sm">
                      Posibilidad de ofrecer tableros públicos agregados (sin datos sensibles) que orienten a
                      empresarios, inversionistas y academia.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-100 rounded flex items-center justify-center mt-1 shrink-0">
                    <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-gray-800">Estimular el uso de datos abiertos</strong>
                    <p className="text-gray-600 text-sm">
                      Estimular el uso de datos abiertos y modelos analíticos en el ecosistema emprendedor y financiero.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Escalabilidad técnica y funcional */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#3c5a99] mb-2 text-center">Escalabilidad técnica y funcional</h2>
          <p className="text-gray-600 text-center mb-12">Tres dimensiones para crecer la solución</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Dimensión 1 */}
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-blue-500">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </div>
                <CardTitle className="text-blue-600">Escalabilidad de Datos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-600">
                <p>Agregar nuevos años de información conforme se publiquen reportes de empresas.</p>
                <p>
                  Incorporar más variables financieras (ratios ROE, ROA, margen de utilidad, liquidez) y variables de
                  contexto.
                </p>
                <p className="font-medium text-blue-600">
                  Conectar con otras bases de datos públicas (DIAN, DANE, Banco de la República).
                </p>
              </CardContent>
            </Card>

            {/* Dimensión 2 */}
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-green-500">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-green-600">Escalabilidad de Modelos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-600">
                <p>Actualmente se usa XGBoost Regressor como modelo base (baseline).</p>
                <p>
                  En el futuro: modelos por macrosector, por tamaño de empresa, ensembles combinando XGBoost, LightGBM,
                  Random Forest.
                </p>
                <p className="font-medium text-green-600">
                  Validación cruzada K-Fold y optimización de hiperparámetros.
                </p>
              </CardContent>
            </Card>

            {/* Dimensión 3 */}
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-purple-500">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-purple-600">Escalabilidad de Usuarios</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-600">
                <p>Inicialmente para analistas de Supersociedades.</p>
                <p>
                  Escalable a directivos (vistas agregadas), otras entidades del Estado, y versión simplificada abierta
                  al ciudadano.
                </p>
                <p className="font-medium text-purple-600">Perfiles de usuario con distintas vistas e interacciones.</p>
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
