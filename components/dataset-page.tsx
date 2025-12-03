import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const empresasData = [
  {
    empresa: "Ecopetrol S.A.",
    nit: "899999001-5",
    region: "Andina",
    departamento: "Cundinamarca",
    activos: 150.2,
    pasivos: 52.2,
    patrimonio: 98.0,
    ingresos: 85.3,
    ganancias: 12.5,
    año: 2023,
    tasaInteres: 13.25,
    inversionDirecta: 4.2,
    desempleo: 10.2,
    inflacion: 9.28,
    ipc: 118.5,
    tasaCambioUSD: 4150,
    pibDepartamental: 245.8,
  },
  {
    empresa: "Avianca S.A.",
    nit: "800123987-2",
    region: "Andina",
    departamento: "Cundinamarca",
    activos: 15.6,
    pasivos: 7.8,
    patrimonio: 7.8,
    ingresos: 12.4,
    ganancias: 1.2,
    año: 2023,
    tasaInteres: 13.25,
    inversionDirecta: 4.2,
    desempleo: 10.2,
    inflacion: 9.28,
    ipc: 118.5,
    tasaCambioUSD: 4150,
    pibDepartamental: 245.8,
  },
  {
    empresa: "Reficar S.A.",
    nit: "890123456-7",
    region: "Caribe",
    departamento: "Bolívar",
    activos: 42.5,
    pasivos: 17.5,
    patrimonio: 25.0,
    ingresos: 28.6,
    ganancias: 4.8,
    año: 2023,
    tasaInteres: 13.25,
    inversionDirecta: 1.8,
    desempleo: 11.5,
    inflacion: 9.28,
    ipc: 118.5,
    tasaCambioUSD: 4150,
    pibDepartamental: 52.3,
  },
  {
    empresa: "Minas Andinas S.A.",
    nit: "800456789-3",
    region: "Andina",
    departamento: "Antioquia",
    activos: 12.8,
    pasivos: 7.6,
    patrimonio: 5.2,
    ingresos: 8.5,
    ganancias: 0.85,
    año: 2023,
    tasaInteres: 13.25,
    inversionDirecta: 3.5,
    desempleo: 9.8,
    inflacion: 9.28,
    ipc: 118.5,
    tasaCambioUSD: 4150,
    pibDepartamental: 185.2,
  },
  {
    empresa: "Servicios Caribe LTDA",
    nit: "900567890-2",
    region: "Caribe",
    departamento: "Atlántico",
    activos: 5.4,
    pasivos: 3.3,
    patrimonio: 2.1,
    ingresos: 3.2,
    ganancias: 0.45,
    año: 2023,
    tasaInteres: 13.25,
    inversionDirecta: 1.2,
    desempleo: 12.1,
    inflacion: 9.28,
    ipc: 118.5,
    tasaCambioUSD: 4150,
    pibDepartamental: 48.6,
  },
  {
    empresa: "Turismo Horizonte S.A.S.",
    nit: "830112233-4",
    region: "Caribe",
    departamento: "Bolívar",
    activos: 2.1,
    pasivos: 1.2,
    patrimonio: 0.9,
    ingresos: 1.5,
    ganancias: 0.12,
    año: 2023,
    tasaInteres: 13.25,
    inversionDirecta: 1.8,
    desempleo: 11.5,
    inflacion: 9.28,
    ipc: 118.5,
    tasaCambioUSD: 4150,
    pibDepartamental: 52.3,
  },
  {
    empresa: "Manufacturas Titanio S.A.",
    nit: "901556677-3",
    region: "Andina",
    departamento: "Cundinamarca",
    activos: 18.5,
    pasivos: 10.7,
    patrimonio: 7.8,
    ingresos: 15.2,
    ganancias: 2.3,
    año: 2023,
    tasaInteres: 13.25,
    inversionDirecta: 4.2,
    desempleo: 10.2,
    inflacion: 9.28,
    ipc: 118.5,
    tasaCambioUSD: 4150,
    pibDepartamental: 245.8,
  },
  {
    empresa: "Energía del Pacífico E.S.P.",
    nit: "811223344-5",
    region: "Pacífica",
    departamento: "Valle del Cauca",
    activos: 25.8,
    pasivos: 13.3,
    patrimonio: 12.5,
    ingresos: 18.6,
    ganancias: 5.1,
    año: 2023,
    tasaInteres: 13.25,
    inversionDirecta: 2.1,
    desempleo: 11.8,
    inflacion: 9.28,
    ipc: 118.5,
    tasaCambioUSD: 4150,
    pibDepartamental: 95.4,
  },
  {
    empresa: "AgroColombia S.A.",
    nit: "900334455-6",
    region: "Andina",
    departamento: "Santander",
    activos: 6.2,
    pasivos: 3.8,
    patrimonio: 2.4,
    ingresos: 4.1,
    ganancias: 0.32,
    año: 2023,
    tasaInteres: 13.25,
    inversionDirecta: 1.5,
    desempleo: 10.5,
    inflacion: 9.28,
    ipc: 118.5,
    tasaCambioUSD: 4150,
    pibDepartamental: 62.8,
  },
  {
    empresa: "Tecnología Avanzada S.A.S.",
    nit: "844556677-8",
    region: "Andina",
    departamento: "Antioquia",
    activos: 28.5,
    pasivos: 12.5,
    patrimonio: 16.0,
    ingresos: 22.3,
    ganancias: 4.1,
    año: 2023,
    tasaInteres: 13.25,
    inversionDirecta: 3.5,
    desempleo: 9.8,
    inflacion: 9.28,
    ipc: 118.5,
    tasaCambioUSD: 4150,
    pibDepartamental: 185.2,
  },
]

export function DatasetPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#3c5a99] mb-2">RETO SUPERSOCIEDADES</h1>
        <h2 className="text-xl text-[#3c5a99]/80 mb-1">DATOS ABIERTOS 2025</h2>
        <p className="text-sm text-muted-foreground">
          Luis Santiago Maya Restrepo - María Valentina Buitrago Aristizábal
        </p>
      </div>

      {/* Updated dataset info cards */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-[#3c5a99]">10</p>
            <p className="text-sm text-muted-foreground">Empresas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-[#3c5a99]">16</p>
            <p className="text-sm text-muted-foreground">Variables</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-[#3c5a99]">9</p>
            <p className="text-sm text-muted-foreground">Originales</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-[#3c5a99]">7</p>
            <p className="text-sm text-muted-foreground">Añadidas</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-[#3c5a99]">Variables Originales</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {[
              "Empresa",
              "NIT",
              "Región",
              "Departamento",
              "Activos",
              "Pasivos",
              "Patrimonio",
              "Ingresos",
              "Ganancias",
              "Año",
            ].map((v) => (
              <Badge key={v} variant="outline" className="bg-[#3c5a99]/10 text-[#3c5a99]">
                {v}
              </Badge>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-[#3c5a99]">Variables Añadidas</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {[
              "Tasa de Interés",
              "Inversión Directa",
              "Desempleo",
              "Inflación",
              "IPC",
              "Tasa Cambio USD",
              "PIB Departamental",
            ].map((v) => (
              <Badge key={v} variant="outline" className="bg-green-100 text-green-700">
                {v}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-[#3c5a99]">Conjunto de Datos - Empresas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#3c5a99]/5">
                  <TableHead className="text-[#3c5a99] font-semibold">Empresa</TableHead>
                  <TableHead className="text-[#3c5a99] font-semibold">NIT</TableHead>
                  <TableHead className="text-[#3c5a99] font-semibold">Región</TableHead>
                  <TableHead className="text-[#3c5a99] font-semibold">Departamento</TableHead>
                  <TableHead className="text-[#3c5a99] font-semibold text-right">Activos</TableHead>
                  <TableHead className="text-[#3c5a99] font-semibold text-right">Pasivos</TableHead>
                  <TableHead className="text-[#3c5a99] font-semibold text-right">Patrimonio</TableHead>
                  <TableHead className="text-[#3c5a99] font-semibold text-right">Ingresos</TableHead>
                  <TableHead className="text-[#3c5a99] font-semibold text-right">Ganancias</TableHead>
                  <TableHead className="text-[#3c5a99] font-semibold text-right">Año</TableHead>
                  <TableHead className="text-green-700 font-semibold text-right">Tasa Interés %</TableHead>
                  <TableHead className="text-green-700 font-semibold text-right">Inv. Directa</TableHead>
                  <TableHead className="text-green-700 font-semibold text-right">Desempleo %</TableHead>
                  <TableHead className="text-green-700 font-semibold text-right">Inflación %</TableHead>
                  <TableHead className="text-green-700 font-semibold text-right">IPC</TableHead>
                  <TableHead className="text-green-700 font-semibold text-right">TC USD</TableHead>
                  <TableHead className="text-green-700 font-semibold text-right">PIB Dpto.</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {empresasData.map((empresa, index) => (
                  <TableRow key={index} className="hover:bg-[#3c5a99]/5">
                    <TableCell className="font-medium">{empresa.empresa}</TableCell>
                    <TableCell className="font-mono text-xs">{empresa.nit}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {empresa.region}
                      </Badge>
                    </TableCell>
                    <TableCell>{empresa.departamento}</TableCell>
                    <TableCell className="text-right font-mono">{empresa.activos.toFixed(1)}</TableCell>
                    <TableCell className="text-right font-mono">{empresa.pasivos.toFixed(1)}</TableCell>
                    <TableCell className="text-right font-mono">{empresa.patrimonio.toFixed(1)}</TableCell>
                    <TableCell className="text-right font-mono">{empresa.ingresos.toFixed(1)}</TableCell>
                    <TableCell className="text-right font-mono">{empresa.ganancias.toFixed(2)}</TableCell>
                    <TableCell className="text-right font-mono">{empresa.año}</TableCell>
                    <TableCell className="text-right font-mono text-green-700">
                      {empresa.tasaInteres.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right font-mono text-green-700">
                      {empresa.inversionDirecta.toFixed(1)}
                    </TableCell>
                    <TableCell className="text-right font-mono text-green-700">
                      {empresa.desempleo.toFixed(1)}
                    </TableCell>
                    <TableCell className="text-right font-mono text-green-700">
                      {empresa.inflacion.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right font-mono text-green-700">{empresa.ipc.toFixed(1)}</TableCell>
                    <TableCell className="text-right font-mono text-green-700">
                      {empresa.tasaCambioUSD.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right font-mono text-green-700">
                      {empresa.pibDepartamental.toFixed(1)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
