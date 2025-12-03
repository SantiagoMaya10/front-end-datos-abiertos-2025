"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const sectorData = [
  { name: "Comercio", value: 34, color: "#3c5a99" },
  { name: "Servicios", value: 31.9, color: "#5b7fc4" },
  { name: "Manufactura", value: 20, color: "#7ea3e0" },
  { name: "Construcción", value: 7.8, color: "#a1c4f5" },
  { name: "Minero/Agropecuario", value: 4.3, color: "#c4deff" },
]

const departamentoData = [
  { name: "Bogotá D.C.", empresas: 15200 },
  { name: "Antioquia", empresas: 8500 },
  { name: "Valle", empresas: 5200 },
  { name: "Cundinamarca", empresas: 3100 },
  { name: "Atlántico", empresas: 2800 },
  { name: "Santander", empresas: 2400 },
  { name: "Bolívar", empresas: 1900 },
  { name: "Risaralda", empresas: 1600 },
  { name: "Norte de Santander", empresas: 1400 },
  { name: "Caldas", empresas: 1200 },
]

const topEmpresasData = [
  { name: "Ecopetrol S.A. - 2024", ingresos: 140 },
  { name: "Ecopetrol S.A. - 2023", ingresos: 125 },
  { name: "Ecopetrol S.A. - 2022", ingresos: 110 },
  { name: "Reficar S.A. - 2023", ingresos: 65 },
  { name: "Avianca S.A. - 2023", ingresos: 55 },
  { name: "Reficar S.A. - 2022", ingresos: 50 },
  { name: "Org. Terpel S.A. - 2024", ingresos: 45 },
  { name: "Org. Terpel S.A. - 2023", ingresos: 42 },
  { name: "EPM E.S.P. - 2024", ingresos: 38 },
  { name: "D1 S.A.S. - 2024", ingresos: 35 },
]

const correlationData = [
  { var1: "Ingresos", var2: "Ganancia", correlation: 0.847 },
  { var1: "Ingresos", var2: "Activos", correlation: 0.904 },
  { var1: "Ingresos", var2: "Pasivos", correlation: 0.928 },
  { var1: "Ingresos", var2: "Patrimonio", correlation: 0.798 },
  { var1: "Ganancia", var2: "Activos", correlation: 0.881 },
  { var1: "Ganancia", var2: "Pasivos", correlation: 0.848 },
  { var1: "Ganancia", var2: "Patrimonio", correlation: 0.848 },
  { var1: "Activos", var2: "Pasivos", correlation: 0.969 },
  { var1: "Activos", var2: "Patrimonio", correlation: 0.954 },
  { var1: "Pasivos", var2: "Patrimonio", correlation: 0.85 },
]

export function DashboardPage() {
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

      <h3 className="text-2xl font-semibold text-[#3c5a99] mb-6">Análisis Exploratorio Dataset</h3>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* Pie Chart - Sectores */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#3c5a99]">Porcentaje de Empresas por Macrosector</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sectorData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {sectorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Bar Chart - Departamentos */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#3c5a99]">Top 10 Departamentos con Más Empresas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={departamentoData} layout="vertical" margin={{ left: 100 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} width={100} />
                  <Tooltip formatter={(value) => value.toLocaleString()} />
                  <Bar dataKey="empresas" fill="#3c5a99" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top Empresas por Ingresos */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#3c5a99]">Top 10 Empresas por Ingresos Operacionales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topEmpresasData} layout="vertical" margin={{ left: 150 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" unit=" B" />
                  <YAxis dataKey="name" type="category" tick={{ fontSize: 10 }} width={150} />
                  <Tooltip formatter={(value) => `${value} Billones COP`} />
                  <Bar dataKey="ingresos" fill="#5b7fc4" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Matriz de Correlación */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#3c5a99]">Matriz de Correlación - Variables Financieras</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr>
                    <th className="p-2 text-left"></th>
                    <th className="p-2 text-center bg-[#3c5a99]/10">Ingresos</th>
                    <th className="p-2 text-center bg-[#3c5a99]/10">Ganancia</th>
                    <th className="p-2 text-center bg-[#3c5a99]/10">Activos</th>
                    <th className="p-2 text-center bg-[#3c5a99]/10">Pasivos</th>
                    <th className="p-2 text-center bg-[#3c5a99]/10">Patrimonio</th>
                  </tr>
                </thead>
                <tbody>
                  {["Ingresos", "Ganancia", "Activos", "Pasivos", "Patrimonio"].map((row, i) => (
                    <tr key={row}>
                      <td className="p-2 font-medium bg-[#3c5a99]/10">{row}</td>
                      {["Ingresos", "Ganancia", "Activos", "Pasivos", "Patrimonio"].map((col, j) => {
                        const value =
                          i === j
                            ? 1
                            : correlationData.find(
                                (d) => (d.var1 === row && d.var2 === col) || (d.var1 === col && d.var2 === row),
                              )?.correlation || 0
                        const intensity = Math.round(value * 255)
                        return (
                          <td
                            key={col}
                            className="p-2 text-center font-mono"
                            style={{
                              backgroundColor: `rgba(60, 90, 153, ${value * 0.6})`,
                              color: value > 0.7 ? "white" : "inherit",
                            }}
                          >
                            {value.toFixed(3)}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
