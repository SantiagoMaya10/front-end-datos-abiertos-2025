"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function HomePage() {
  const [revealedMembers, setRevealedMembers] = useState<number>(0)

  const teamMembers = [
    {
      name: "Luis Santiago Maya Restrepo",
      role: "Ingeniero de Sistemas e Informática",
      university: "Universidad Nacional de Colombia",
      email: "lmayar@unal.edu.co",
      photo: "/images/foto-20santiago.png",
      qr: "/images/qr-linkedin-santiago.png",
      linkedin: "https://www.linkedin.com/in/luis-santiago-maya-restrepo-753889183/",
    },
    {
      name: "María Valentina Buitrago Aristizábal",
      role: "Ingeniera Civil",
      university: "Universidad Nacional de Colombia",
      email: "mbuitragoa@unal.edu.co",
      photo: "/images/foto-20valentina.png",
      qr: "/images/qr-linkedin-valentina.png",
      linkedin: "https://www.linkedin.com/in/maria-valentina-b-ba8202333/",
    },
  ]

  const handleRevealNext = () => {
    if (revealedMembers < teamMembers.length) {
      setRevealedMembers(revealedMembers + 1)
    }
  }

  const handleReset = () => {
    setRevealedMembers(0)
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#3c5a99] mb-2">RETO SUPERSOCIEDADES</h1>
        <h2 className="text-2xl text-[#3c5a99]/80">DATOS ABIERTOS 2025</h2>
      </div>

      <section className="mb-12">
        <h3 className="text-xl font-semibold text-[#3c5a99] mb-6">Equipo Participante</h3>

        {/* Reveal button - Fixed accent: Superhéroe */}
        <div className="flex justify-center gap-4 mb-8">
          {revealedMembers < teamMembers.length ? (
            <Button
              onClick={handleRevealNext}
              className="bg-[#3c5a99] hover:bg-[#3c5a99]/90 text-white px-8 py-6 text-lg"
            >
              Revelar Superhéroe {revealedMembers + 1}
            </Button>
          ) : (
            <Button
              onClick={handleReset}
              variant="outline"
              className="border-[#3c5a99] text-[#3c5a99] px-8 py-6 text-lg bg-transparent"
            >
              Reiniciar
            </Button>
          )}
        </div>

        {/* Team members grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index < revealedMembers ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
              }`}
            >
              <Card className="border-2 border-[#3c5a99] overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-b from-[#3c5a99]/10 to-white p-6">
                    {/* Photo */}
                    <div className="flex justify-center mb-4">
                      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#3c5a99] shadow-lg">
                        <img
                          src={member.photo || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="text-center mb-4">
                      <h4 className="font-bold text-xl text-[#3c5a99] mb-1">{member.name}</h4>
                      <p className="text-muted-foreground">{member.role}</p>
                      <p className="text-muted-foreground text-sm">{member.university}</p>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center gap-1 text-sm text-[#3c5a99] hover:underline mt-2"
                      >
                        <Mail className="w-4 h-4" />
                        {member.email}
                      </a>
                    </div>

                    {/* LinkedIn QR - Made clickable with link */}
                    <div className="flex flex-col items-center">
                      <p className="text-sm text-muted-foreground mb-2">LinkedIn</p>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-24 h-24 bg-white p-1 rounded shadow hover:shadow-lg transition-shadow cursor-pointer"
                      >
                        <img
                          src={member.qr || "/placeholder.svg"}
                          alt={`LinkedIn QR de ${member.name}`}
                          className="w-full h-full"
                        />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Hidden state indicator - Fixed accents: botón, superhéroes */}
        {revealedMembers === 0 && (
          <div className="text-center text-muted-foreground mt-4">
            Haz clic en el botón para revelar a los superhéroes del equipo
          </div>
        )}
      </section>
    </div>
  )
}
