"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function CreceColPage() {
  const [isActivated, setIsActivated] = useState(false)

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* GPS Frame */}
      <div className="relative w-full max-w-2xl">
        {/* GPS Device Frame */}
        <div className="bg-[#1a1a2e] rounded-3xl p-8 shadow-2xl border-4 border-[#2d2d44]">
          {/* GPS Screen */}
          <div className="bg-[#0d0d1a] rounded-2xl p-6 relative overflow-hidden">
            {/* Screen Header - Fixed accent: ECONÓMICO, SEÑAL */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <span className="text-white/60 text-sm font-mono">GPS ECONÓMICO</span>
              </div>
              <div className="text-white/40 text-xs font-mono">{isActivated ? "SEÑAL ACTIVA" : "SIN DATOS"}</div>
            </div>

            {/* Map Container */}
            <div className="relative flex justify-center items-center min-h-[400px]">
              {/* Black map (before activation) */}
              <AnimatePresence>
                {!isActivated && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex flex-col items-center justify-center"
                  >
                    <div className="relative">
                      {/* Scanning effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"
                        animate={{ y: [-200, 200] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                      <img
                        src="/images/mapa-colombia-negro.jpg"
                        alt="Mapa de Colombia sin datos"
                        className="w-72 h-auto rounded-lg"
                      />
                      {/* No signal overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white/30 text-5xl font-bold">?</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Colored map with data (after activation) */}
              <AnimatePresence>
                {isActivated && (
                  <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col items-center justify-center"
                  >
                    {/* Animated data visualization overlay */}
                    <div className="relative">
                      <img
                        src="/images/mapa-colombia-negro.jpg"
                        alt="Mapa de Colombia con datos"
                        className="w-72 h-auto rounded-lg"
                        style={{
                          filter: "hue-rotate(180deg) saturate(1.5) brightness(1.3)",
                        }}
                      />
                      {/* Data points animation */}
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-3 h-3 rounded-full"
                          style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${25 + Math.random() * 50}%`,
                            backgroundColor: ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444"][i % 4],
                          }}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: [0, 1.5, 1],
                            opacity: [0, 1, 0.8],
                          }}
                          transition={{
                            duration: 0.5,
                            delay: i * 0.1,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 2,
                          }}
                        />
                      ))}
                      {/* Growth bars */}
                      <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex items-end gap-1">
                        {[40, 65, 50, 80, 60].map((h, i) => (
                          <motion.div
                            key={i}
                            className="w-3 rounded-t"
                            style={{ backgroundColor: ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6"][i] }}
                            initial={{ height: 0 }}
                            animate={{ height: h }}
                            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Status bar */}
            <div className="mt-4 flex items-center justify-between text-xs font-mono">
              <span className={isActivated ? "text-green-400" : "text-red-400"}>
                {isActivated ? "CONECTADO" : "DESCONECTADO"}
              </span>
              <span className="text-white/40">COLOMBIA 2025</span>
            </div>
          </div>

          {/* GPS Controls */}
          <div className="mt-6 flex justify-center">
            <motion.button
              onClick={() => setIsActivated(!isActivated)}
              className="relative overflow-hidden rounded-xl px-8 py-4 font-bold text-white transition-all"
              style={{
                background: isActivated
                  ? "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)"
                  : "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{isActivated ? "CRECE-Col ACTIVO" : "ACTIVAR CRECE-Col"}</span>
              {!isActivated && (
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}
