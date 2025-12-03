"use client"

export function SolucionPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Nuestra Solución</h1>

        {/* Ecuación principal */}
        <div className="bg-gray-100 rounded-2xl p-8 mb-8 border border-gray-200">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900 mb-8">
              <span className="text-blue-600">Solución</span> = <span className="text-green-600">Data Science</span> +
              <span className="text-purple-600"> ML</span> + <span className="text-pink-600">GenAI</span> +
              <span className="text-orange-600"> GUI</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Data Science con Datos Abiertos */}
          <div className="bg-gray-50 rounded-xl p-6 border border-green-200">
            <h2 className="text-xl font-bold text-green-600 mb-4">Data Science con Datos Abiertos</h2>
            <div className="flex flex-wrap gap-6 justify-center items-center">
              <div className="flex flex-col items-center">
                <img src="/images/piton.png" alt="Python" className="w-14 h-14 object-contain" />
                <span className="text-xs text-gray-600 mt-1">Python</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/numpy-logo.jpg" alt="NumPy" className="w-14 h-14 object-contain" />
                <span className="text-xs text-gray-600 mt-1">NumPy</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/pandas.png" alt="Pandas" className="w-14 h-14 object-contain" />
                <span className="text-xs text-gray-600 mt-1">Pandas</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/matplot-title-logo.png" alt="Matplotlib" className="w-20 h-14 object-contain" />
                <span className="text-xs text-gray-600 mt-1">Matplotlib</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/images/google-colaboratory-svg-logo.png"
                  alt="Google Colab"
                  className="w-14 h-14 object-contain"
                />
                <span className="text-xs text-gray-600 mt-1">Colab</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/github.png" alt="GitHub" className="w-14 h-14 object-contain" />
                <span className="text-xs text-gray-600 mt-1">GitHub</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/excel.png" alt="Excel" className="w-14 h-14 object-contain" />
                <span className="text-xs text-gray-600 mt-1">Excel</span>
              </div>
            </div>
          </div>

          {/* Predicción con ML */}
          <div className="bg-gray-50 rounded-xl p-6 border border-purple-200">
            <h2 className="text-xl font-bold text-purple-600 mb-4">Predicción con ML</h2>
            <div className="flex flex-wrap gap-6 justify-center items-center">
              <div className="flex flex-col items-center">
                <img src="/images/ml.png" alt="ML" className="w-14 h-14 object-contain" />
                <span className="text-xs text-gray-600 mt-1">Machine Learning</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/mathematics-sigma-icon.jpg" alt="Mathematics" className="w-14 h-14 object-contain" />
                <span className="text-xs text-gray-600 mt-1">Mathematics</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/images/prediccio-cc-81nescenario.png"
                  alt="Predicción y Escenario"
                  className="w-14 h-14 object-contain"
                />
                <span className="text-xs text-gray-600 mt-1">Predicción</span>
              </div>
            </div>
          </div>

          {/* Recomendaciones con GenAI */}
          <div className="bg-gray-50 rounded-xl p-6 border border-pink-200">
            <h2 className="text-xl font-bold text-pink-600 mb-4">Recomendaciones con GenAI</h2>
            <div className="flex flex-wrap gap-6 justify-center items-center">
              <div className="flex flex-col items-center">
                <img src="/images/genai.png" alt="GenAI" className="w-14 h-14 object-contain" />
                <span className="text-xs text-gray-600 mt-1">GenAI</span>
              </div>
            </div>
          </div>

          {/* Interfaz Gráfica (GUI) */}
          <div className="bg-gray-50 rounded-xl p-6 border border-orange-200">
            <h2 className="text-xl font-bold text-orange-600 mb-4">Interfaz Gráfica (GUI)</h2>
            <div className="flex flex-wrap gap-6 justify-center items-center">
              <div className="flex flex-col items-center">
                <img src="/images/cursor.png" alt="Cursor" className="w-14 h-14 object-contain" />
                <span className="text-xs text-gray-600 mt-1">Cursor</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/images/google-antigravity-logo-icon.webp"
                  alt="Antigravity"
                  className="w-14 h-14 object-contain"
                />
                <span className="text-xs text-gray-600 mt-1">Antigravity</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/vercel.jpg" alt="Vercel" className="w-14 h-14 object-contain rounded-full" />
                <span className="text-xs text-gray-600 mt-1">Vercel</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/figma.png" alt="Figma" className="w-14 h-14 object-contain" />
                <span className="text-xs text-gray-600 mt-1">Figma</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/images/typescript-logo-2020.png"
                  alt="TypeScript"
                  className="w-14 h-14 object-contain rounded"
                />
                <span className="text-xs text-gray-600 mt-1">TypeScript</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/react.png" alt="React" className="w-14 h-14 object-contain" />
                <span className="text-xs text-gray-600 mt-1">React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
