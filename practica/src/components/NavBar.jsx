import React, { useState, useRef } from "react";
import { Menubar } from 'primereact/menubar';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';

export function NavBar() {    

    const op = useRef(null);

    const items = [
        {
            label: 'Collections'
        },
        {
            label: 'Men'
        },
        {
            label: 'Women'           
        },
        {
            label: 'About'
        },
        {
            label: 'Contact'
        }
    ];

    const start = <img alt="logo" src="./logo.svg" height="40" style={{ marginRight: '2rem' }}/>;
    const end = (
        <>
            <div className="icon-carrito">
                <i className="pi pi-shopping-cart p-overlay-badge" style={{'fontSize': '1.4rem', cursor:'pointer'}}  onClick={(e) => op.current.toggle(e)}>
                    <Badge value="0"></Badge>
                </i>
                <Avatar image="image-avatar.png" shape="circle"  size="large" />
                
            </div>
            <OverlayPanel ref={op}>
            <div className='carrito-detalle'>
                <div className="titulo">Cart</div>
                <div className="producto">
                    <div className="seccion-imagen">
                        <Image src="./images/galeria/image-product-1-thumbnail.jpg" alt="Image" width="100%" style={{ borderRadius:'10px'}}/>
                    </div>
                    <div className="seccion-detalle">
                        <div className="producto-titulo">Fall Limited Edition Sneakers</div>
                        <div className="calculo">$125.00 x 3 <span>$375.00</span></div>
                    </div>
                    <div className="seccion-eliminar">
                    <i className="pi pi-trash" style={{'fontSize': '1rem', cursor:'pointer'}}>
                    </i>  
                    </div>
                </div>
                <div className="checkout">
                    <Button label="Checkout" style={{ background:'#d46202', border:'none', marginLeft:'1rem', width:'90%', color:'black' }} />
                </div>
            </div>        
        </OverlayPanel>
    </>
    );

    return (
        <div className="panel-carrito">
            <Menubar model={items} start={start} end={end} style={{'background-color':'white', 'border':'none'}}/>
        </div>
    )
}
