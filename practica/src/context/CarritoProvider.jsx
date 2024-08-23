import { useState } from 'react'
import { createContext } from 'react'

export const CarritoContext = createContext()

export default function CarritoProvider({ children }) {
    const [cantidad, setCantidad] = useState(0)
    const [addCarrito, setAddCarrito] = useState(false)

    const sumarCantidad = () => {
        setCantidad(cantidad+1)
    }
    const restarCantidad = () => {
        if(cantidad > 0){
            setCantidad(cantidad-1)
        }
    }

    return (
        <CarritoContext.Provider
            value={{
                cantidad,
                sumarCantidad,
                restarCantidad,
                addCarrito,
                setAddCarrito
            }}
        >
            {children}
        </CarritoContext.Provider>
    )
}




