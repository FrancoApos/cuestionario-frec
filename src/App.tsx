"use client"

import React from "react"
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

  const foodCategories = [
    {
      name: "Lácteos y Huevos",
      items: [
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
      ],
    },
    {
      name: "Carnes y Pescados",
      items: [
        "Carnes grasas (carne molida común, muslos de pollo, cerdo, asado)",
        "Carnes magras (pechuga de pollo, nalga, bola de lomo, lomo de cerdo)",
        "Pescados blancos (merluza, pejerrey)",
        "Pescados azules (sardina, salmón, atún, caballa, trucha)",
      ],
    },
    {
      name: "Vegetales y Frutas",
      items: [
        "Vegetales A (tomate, brócoli, lechuga, rúcula, espinaca, acelga, zapallito verde, berenjena)",
        "Vegetales B (zapallo, zanahoria, cebolla, ajo)",
        "Vegetales C (papa, batata, choclo)",
        "Frutas A (cítricos, manzana, pera, durazno, mango, kiwi, ciruela, ananá, frutilla)",
        "Frutas B (bananas, higo, uvas)",
      ],
    },
    {
      name: "Frutos Secos y Semillas",
      items: [
        "Maní",
        "Frutos secos (almendra, nuez, avellana, pistacho)",
        "Semillas de chía o lino (únicamente trituradas)",
        "Otras semillas (girasol, sésamo, amapola)",
        "Palta",
        "Aceitunas",
      ],
    },
    {
      name: "Aceites y Grasas",
      items: ["Aceite de girasol", "Aceite de oliva extra virgen (en crudo)", "Manteca-margarina", "Crema de leche"],
    },
    {
      name: "Cereales y Legumbres",
      items: [
        "Cereales refinados (harinas blancas, arroz, fideos blancos)",
        "Cereales integrales (arroz yamaní e integral, avena, fideos integrales)",
        "Legumbres (lentejas, arvejas, garbanzos, porotos, soja)",
      ],
    },
    {
      name: "Productos Procesados",
      items: [
        "Productos de copetín (papas fritas, chizitos, palitos salados)",
        "Productos de panadería (facturas, criollos, chipa)",
        "Gaseosa/agua saborizada/jugos industriales",
        "Pan blanco",
        "Pan integral",
      ],
    },
    {
      name: "Azúcares y Dulces",
      items: [
        "Azúcar",
        "Miel",
        "Caramelos/gomitas/chupetines",
        "Dulce de leche",
        "Chocolate",
        "Galletas industriales (saladas y dulces)",
      ],
    },
    {
      name: "Bebidas",
      items: [
        "Agua",
        "Mate",
        "Café",
        "Té negro/verde",
        "Té de hierbas naturales (ej: manzanilla, cedrón, boldo)",
        "Bebidas alcohólicas",
      ],
    },
    {
      name: "Otros",
      items: ["Otro alimento que consideres importante en tu dieta"],
    },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-4 px-2 sm:py-8 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl border border-slate-200 p-4 sm:p-8">
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3 leading-tight">
              Cuestionario de frecuencia alimentaria
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="mb-8 sm:mb-10 p-4 sm:p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-slate-200">
            <h2 className="text-lg font-semibold text-slate-700 mb-4">Información Personal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4">
              <div>
                <label htmlFor="apellido" className="block text-sm font-medium text-slate-700 mb-2">
                  Apellido:
                </label>
                <input
                  type="text"
                  id="apellido"
                  value={formData.apellido}
                  onChange={(e) => handleUserInfoChange("apellido", e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-base transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="dni" className="block text-sm font-medium text-slate-700 mb-2">
                  DNI:
                </label>
                <input
                  type="text"
                  id="dni"
                  value={formData.dni}
                  onChange={(e) => handleUserInfoChange("dni", e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-base transition-colors"
                  required
                />
              </div>
            </div>
            <p className="text-sm text-slate-600 italic bg-white/50 p-3 rounded-lg">
              (esta información se utilizará solamente para identificarlos con los formularios)
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-gradient-to-r from-slate-100 to-slate-200">
                  <th className="border-r border-slate-300 px-3 sm:px-6 py-4 text-left font-bold text-slate-800 min-w-[200px] sm:min-w-[250px]">
                    Alimentos
                  </th>
                  <th className="border-r border-slate-300 px-3 sm:px-4 py-4 text-center font-bold text-slate-800 min-w-[140px] sm:min-w-[160px]">
                    <div className="flex flex-col items-center">
                      <span>Cantidad</span>
                      <span className="text-xs font-normal text-slate-600 mt-1">(medida casera/gramos)</span>
                    </div>
                  </th>
                  <th className="border-r border-slate-300 px-3 sm:px-4 py-4 text-center font-bold text-slate-800 min-w-[450px] sm:min-w-[600px]">
                    Frecuencia de consumo
                  </th>
                  <th className="px-3 sm:px-4 py-4 text-center font-bold text-slate-800 min-w-[140px] sm:min-w-[160px]">
                    Observaciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {foodCategories.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <tr>
                      <td
                        colSpan={4}
                        className="bg-gradient-to-r from-emerald-50 to-teal-50 border-t-2 border-emerald-200 px-3 sm:px-6 py-3"
                      >
                        <h3 className="font-bold text-emerald-800 text-sm sm:text-base flex items-center">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                          {category.name}
                        </h3>
                      </td>
                    </tr>
                    {category.items.map((food, itemIndex) => (
                      <tr
                        key={`${categoryIndex}-${itemIndex}`}
                        className={
                          itemIndex % 2 === 0 ? "bg-white hover:bg-slate-50" : "bg-slate-50/50 hover:bg-slate-100"
                        }
                      >
                        <td className="border-r border-slate-200 px-3 sm:px-6 py-4 font-medium text-slate-800 text-sm sm:text-base">
                          {food}
                        </td>
                        <td className="border-r border-slate-200 px-3 sm:px-4 py-4">
                          <input
                            type="text"
                            value={formData.foods[food]?.quantity || ""}
                            onChange={(e) => handleFoodChange(food, "quantity", e.target.value)}
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                            placeholder="Ej: 1 taza, 100g"
                          />
                        </td>
                        <td className="border-r border-slate-200 px-2 sm:px-4 py-4">
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 gap-1 sm:gap-2">
                            {frequencyOptions.map((option) => (
                              <label
                                key={option.value}
                                className="flex items-center space-x-1 text-xs cursor-pointer hover:bg-emerald-50 p-1 rounded transition-colors"
                              >
                                <input
                                  type="radio"
                                  name={`frequency-${food}`}
                                  value={option.value}
                                  checked={formData.foods[food]?.frequency === option.value}
                                  onChange={(e) => handleFoodChange(food, "frequency", e.target.value)}
                                  className="text-emerald-600 focus:ring-emerald-500 w-3 h-3 sm:w-4 sm:h-4"
                                />
                                <span className="whitespace-nowrap text-xs text-slate-700">{option.label}</span>
                              </label>
                            ))}
                          </div>
                        </td>
                        <td className="px-3 sm:px-4 py-4">
                          <input
                            type="text"
                            value={formData.foods[food]?.observations || ""}
                            onChange={(e) => handleFoodChange(food, "observations", e.target.value)}
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                            placeholder="Observaciones..."
                          />
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-8 sm:px-12 rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 focus:ring-offset-2 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
