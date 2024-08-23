import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';


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
        <div className='seccion-botones'>
            <Button icon="pi pi-minus" style={{ background:'#80808063',border:'none', color:'orange' }}/>
            <label htmlFor="">0</label>
            <Button icon="pi pi-plus" style={{ background:'#80808063',border:'none', color:'orange'  }}/>
            <Button label="Add to Cart" icon="pi pi-shopping-cart" style={{ background:'#d46202', border:'none', marginLeft:'1rem' }} />
        </div>
    </Card>
  )
}
