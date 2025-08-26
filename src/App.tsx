"use client"

import type React from "react"
import { useState } from "react"

interface FormData {
  apellido: string
  dni: string
  foods: {
    [key: string]: {
      quantity: string
      frequency: string
      observations: string
    }
  }
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    apellido: "",
    dni: "",
    foods: {},
  })

  const foodItems = [
    "Leche entera",
    "Leche semidescremada",
    "Leche descremada",
    "Yogurt natural",
    "Yogurt con sabor",
    "Quesos de rallar",
    "Queso semiduro",
    "Queso blando",
    "Huevos enteros",
    "Yema",
    "Clara",
    "Carnes grasas (carne molida común, muslos de pollo, cerdo, asado)",
    "Carnes magras (pechuga de pollo, nalga, bola de lomo, lomo de cerdo)",
    "Pescados blancos (merluza, pejerrey)",
    "Pescados azules (sardina, salmón, atún, caballa, trucha)",
    "Vegetales A (tomate, brócoli, lechuga, rúcula, espinaca, acelga, zapallito verde, berenjena)",
    "Vegetales B (zapallo, zanahoria, cebolla, ajo)",
    "Vegetales C (papa, batata, choclo)",
    "Frutas A (cítricos, manzana, pera, durazno, mango, kiwi, ciruela, ananá, frutilla)",
    "Frutas B (bananas, higo, uvas)",
    "Maní",
    "Frutos secos (almendra, nuez, avellana, pistacho)",
    "Semillas de chía o lino (únicamente trituradas)",
    "Otras semillas (girasol, sésamo, amapola)",
    "Palta",
    "Aceitunas",
    "Aceite de girasol",
    "Aceite de oliva extra virgen (en crudo)",
    "Manteca-margarina",
    "Crema de leche",
    "Cereales refinados (harinas blancas, arroz, fideos blancos)",
    "Cereales integrales (arroz yamaní e integral, avena, fideos integrales)",
    "Legumbres (lentejas, arvejas, garbanzos, porotos, soja)",
    "Productos de copetín (papas fritas, chizitos, palitos salados)",
    "Productos de panadería (facturas, criollos, chipa)",
    "Gaseosa/agua saborizada/jugos industriales",
    "Pan blanco",
    "Pan integral",
    "Azúcar",
    "Miel",
    "Caramelos/gomitas/chupetines",
    "Dulce de leche",
    "Chocolate",
    "Galletas industriales (saladas y dulces)",
    "Agua",
    "Mate",
    "Café",
    "Té negro/verde",
    "Té de hierbas naturales (ej: manzanilla, cedrón, boldo)",
    "Bebidas alcohólicas",
    "Otro alimento que consideres importante en tu dieta",
  ]

  const frequencyOptions = [
    { value: "never", label: "Nunca" },
    { value: "1-month", label: "1 vez al mes" },
    { value: "2-month", label: "2 veces al mes" },
    { value: "3-month", label: "3 veces al mes" },
    { value: "1-week", label: "1 vez a la semana" },
    { value: "2-3-week", label: "2-3 veces a la semana" },
    { value: "4-6-week", label: "4-6 veces a la semana" },
    { value: "1-day", label: "1 vez al día" },
    { value: "2-3-day", label: "2-3 veces al día" },
    { value: "4-5-day", label: "4-5 veces al día" },
    { value: "6-plus-day", label: "+6 veces al día" },
  ]

  const handleUserInfoChange = (field: "apellido" | "dni", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleFoodChange = (foodItem: string, field: "quantity" | "frequency" | "observations", value: string) => {
    setFormData((prev) => ({
      ...prev,
      foods: {
        ...prev.foods,
        [foodItem]: {
          ...prev.foods[foodItem],
          [field]: value,
        },
      },
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form Data:", JSON.stringify(formData, null, 2))
    alert("Datos enviados. Revisa la consola para ver el JSON completo.")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4 px-2 sm:py-8 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-3 sm:p-6">
          {/* Header */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center leading-tight">
            Cuestionario de frecuencia alimentaria
          </h1>

          {/* User Information */}
          <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div>
                <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-2">
                  Apellido:
                </label>
                <input
                  type="text"
                  id="apellido"
                  value={formData.apellido}
                  onChange={(e) => handleUserInfoChange("apellido", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                  required
                />
              </div>
              <div>
                <label htmlFor="dni" className="block text-sm font-medium text-gray-700 mb-2">
                  DNI:
                </label>
                <input
                  type="text"
                  id="dni"
                  value={formData.dni}
                  onChange={(e) => handleUserInfoChange("dni", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                  required
                />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 italic">
              (esta información se utilizará solamente para identificarlos con los formularios)
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 min-w-[800px]">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 sm:px-4 py-3 text-left font-semibold text-gray-700 min-w-[180px] sm:min-w-[200px]">
                    Alimentos
                  </th>
                  <th className="border border-gray-300 px-2 sm:px-4 py-3 text-center font-semibold text-gray-700 min-w-[120px] sm:min-w-[150px]">
                    Cantidad - porciones
                    <br />
                    <span className="text-xs font-normal">(medida casera/gramos)</span>
                  </th>
                  <th className="border border-gray-300 px-2 sm:px-4 py-3 text-center font-semibold text-gray-700 min-w-[400px] sm:min-w-[600px]">
                    Frecuencia de consumo
                  </th>
                  <th className="border border-gray-300 px-2 sm:px-4 py-3 text-center font-semibold text-gray-700 min-w-[120px] sm:min-w-[150px]">
                    Observaciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {foodItems.map((food, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="border border-gray-300 px-2 sm:px-4 py-3 font-medium text-gray-800 text-sm sm:text-base">
                      {food}
                    </td>
                    <td className="border border-gray-300 px-2 sm:px-4 py-3">
                      <input
                        type="text"
                        value={formData.foods[food]?.quantity || ""}
                        onChange={(e) => handleFoodChange(food, "quantity", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Ej: 1 taza, 100g"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 sm:px-4 py-3">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 gap-1 sm:gap-2">
                        {frequencyOptions.map((option) => (
                          <label key={option.value} className="flex items-center space-x-1 text-xs cursor-pointer">
                            <input
                              type="radio"
                              name={`frequency-${food}`}
                              value={option.value}
                              checked={formData.foods[food]?.frequency === option.value}
                              onChange={(e) => handleFoodChange(food, "frequency", e.target.value)}
                              className="text-blue-600 focus:ring-blue-500 w-3 h-3 sm:w-4 sm:h-4"
                            />
                            <span className="whitespace-nowrap text-xs">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </td>
                    <td className="border border-gray-300 px-2 sm:px-4 py-3">
                      <input
                        type="text"
                        value={formData.foods[food]?.observations || ""}
                        onChange={(e) => handleFoodChange(food, "observations", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Observaciones..."
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-base"
            >
              Enviar Cuestionario
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App

