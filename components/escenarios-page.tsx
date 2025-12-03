"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Sparkles, TrendingDown, TrendingUp } from "lucide-react"

const escenarios = [
  { id: "pasivos", label: "Variación pasivos", unit: "millones COP" },
  { id: "tasa_interes", label: "Variación de la tasa de interés", unit: "%" },
  { id: "tasa_cambio", label: "Variación de la tasa de cambio", unit: "COP por USD" },
  { id: "inflacion", label: "Variación de la inflación", unit: "%" },
  { id: "desempleo", label: "Variación del desempleo", unit: "%" },
  { id: "pib", label: "Variación del PIB departamental", unit: "%" },
]

const sectores = [
  { id: "minero", label: "Minero" },
  { id: "servicios", label: "Servicios" },
  { id: "manufactura", label: "Manufactura" },
  { id: "comercio", label: "Comercio" },
  { id: "agropecuario", label: "Agropecuario" },
  { id: "construccion", label: "Construcción" },
]

const departamentos = [
  "Amazonas",
  "Antioquia",
  "Arauca",
  "Atlántico",
  "Bolívar",
  "Boyacá",
  "Caldas",
  "Caquetá",
  "Casanare",
  "Cauca",
  "Cesar",
  "Chocó",
  "Córdoba",
  "Cundinamarca",
  "Guainía",
  "Guaviare",
  "Huila",
  "La Guajira",
  "Magdalena",
  "Meta",
  "Nariño",
  "Norte de Santander",
  "Putumayo",
  "Quindío",
  "Risaralda",
  "San Andrés y Providencia",
  "Santander",
  "Sucre",
  "Tolima",
  "Valle del Cauca",
  "Vaupés",
  "Vichada",
  "Bogotá D.C.",
]

export function EscenariosPage() {
  const [selectedEscenario, setSelectedEscenario] = useState("pasivos")
  const [selectedSector, setSelectedSector] = useState("servicios")
  const [selectedDepartamento, setSelectedDepartamento] = useState("Antioquia")
  const [valor, setValor] = useState("1000")
  const [prediccion, setPrediccion] = useState<{ variacion: number; tipo: "positivo" | "negativo" } | null>(null)
  const [recomendacion, setRecomendacion] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handlePrediccion = () => {
    setIsLoading(true)
    // Simulación de predicción
    setTimeout(() => {
      const variacion = Math.random() > 0.5 ? Math.random() * 10 : -Math.random() * 10
      setPrediccion({
        variacion: Number.parseFloat(variacion.toFixed(1)),
        tipo: variacion >= 0 ? "positivo" : "negativo",
      })
      setIsLoading(false)
    }, 1000)
  }

  const handleRecomendacion = () => {
    setIsLoading(true)
    setTimeout(() => {
      setRecomendacion(
        `
Antes de asumir un endeudamiento adicional de $${Number.parseInt(valor).toLocaleString()} millones, asegúrate de que cada peso nuevo de deuda esté respaldado por un uso productivo que genere retornos superiores al costo financiero.

Si la utilidad caerá ${Math.abs(prediccion?.variacion || 5)}%, necesitas confirmar que la inversión financiada con deuda compensará -y superará- esa caída.

**Acciones claves:**
1. Alinear la nueva deuda con un proyecto de retorno claro
2. Calcular el punto de equilibrio del proyecto
3. Evaluar alternativas de financiamiento con menor costo
4. Implementar controles de flujo de caja mensuales
5. Negociar condiciones flexibles de pago
      `.trim(),
      )
      setIsLoading(false)
    }, 1500)
  }

  const escenarioLabel = escenarios.find((e) => e.id === selectedEscenario)?.label.toLowerCase() || ""
  const sectorLabel = sectores.find((s) => s.id === selectedSector)?.label.toLowerCase() || ""
  const escenarioUnit = escenarios.find((e) => e.id === selectedEscenario)?.unit || ""

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#3c5a99] mb-2">RETO SUPERSOCIEDADES</h1>
        <h2 className="text-xl text-[#3c5a99]/80 mb-1">DATOS ABIERTOS 2025</h2>
        <p className="text-sm text-muted-foreground">
          Luis Santiago Maya Restrepo • María Valentina Buitrago Aristizábal
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Formulario */}
        <div className="space-y-6">
          {/* Selección de Escenario */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#3c5a99]">Seleccione escenario</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={selectedEscenario}
                onValueChange={setSelectedEscenario}
                className="grid grid-cols-2 gap-3"
              >
                {escenarios.map((escenario) => (
                  <div key={escenario.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={escenario.id} id={escenario.id} />
                    <Label htmlFor={escenario.id} className="cursor-pointer text-sm">
                      {escenario.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Selección de Sector */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#3c5a99]">Seleccione sector</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2">
                {sectores.map((sector) => (
                  <div key={sector.id} className="flex items-center space-x-1.5">
                    <Checkbox
                      id={sector.id}
                      checked={selectedSector === sector.id}
                      onCheckedChange={() => setSelectedSector(sector.id)}
                    />
                    <Label htmlFor={sector.id} className="cursor-pointer text-sm">
                      {sector.label}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#3c5a99]">Seleccione departamento</CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedDepartamento} onValueChange={setSelectedDepartamento}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccione un departamento" />
                </SelectTrigger>
                <SelectContent>
                  {departamentos.map((depto) => (
                    <SelectItem key={depto} value={depto}>
                      {depto}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Valor y Pregunta */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#3c5a99] text-base">
                ¿Qué le pasaría a las ganancias en el sector {sectorLabel} en {selectedDepartamento} si hay una{" "}
                {escenarioLabel} en un valor de:
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  value={valor}
                  onChange={(e) => setValor(e.target.value)}
                  className="w-32"
                  placeholder="1000"
                />
                <span className="text-sm text-muted-foreground">{escenarioUnit}?</span>
              </div>
              <Button
                onClick={handlePrediccion}
                disabled={isLoading}
                className="w-full bg-[#3c5a99] hover:bg-[#3c5a99]/90"
              >
                {isLoading ? "Calculando..." : "Enviar al modelo para predicción"}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Resultados */}
        <div className="space-y-6">
          {/* Predicción */}
          {prediccion && (
            <Card className="border-2 border-[#3c5a99]">
              <CardHeader>
                <CardTitle className="text-[#3c5a99] flex items-center gap-2">
                  Predicción
                  {prediccion.tipo === "positivo" ? (
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-red-500" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  Las ganancias variarían en un{" "}
                  <span
                    className={`font-bold text-xl ${
                      prediccion.tipo === "positivo" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {prediccion.variacion > 0 ? "+" : ""}
                    {prediccion.variacion}%
                  </span>{" "}
                  para el sector {sectorLabel} en {selectedDepartamento}
                </p>
              </CardContent>
            </Card>
          )}

          {/* Botón GenAI */}
          {prediccion && !recomendacion && (
            <Button
              onClick={handleRecomendacion}
              disabled={isLoading}
              variant="outline"
              className="w-full border-[#3c5a99] text-[#3c5a99] hover:bg-[#3c5a99] hover:text-white bg-transparent"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Solicitar recomendación de GenAI para tomar decisión estratégica dado tu escenario
            </Button>
          )}

          {/* Recomendación */}
          {recomendacion && (
            <Card className="border-2 border-green-500 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Recomendación para tu escenario
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm text-green-900 whitespace-pre-line">{recomendacion}</div>
                <Button
                  variant="outline"
                  className="mt-4 border-green-600 text-green-700 hover:bg-green-100 bg-transparent"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Descargar recomendación
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
