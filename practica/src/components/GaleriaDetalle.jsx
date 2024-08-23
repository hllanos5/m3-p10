import React from 'react'
import { Card } from 'primereact/card';

export function GaleriaDetalle() {
  return (
    <Card style={{ height:'100%',boxShadow:'none'  }} className='card-detalle'>
        <div className='titulo-2'>
            <h4>SNEAKER COMPANY</h4>
        </div>
        <div className='titulo-1'>
            <h1>Fall Limited Edition Sneakers</h1>
        </div>
        <div className='detalle'>
            There low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
        </div>
        <div className='mostrar-precio'>
            <div className='precio'><h2>$125.00</h2></div>
            <div className='descuento-porcentaje'>50%</div>
        </div>
        <div className='descuento'>
            <h3>$250.00</h3>
        </div>
    </Card>
  )
}
