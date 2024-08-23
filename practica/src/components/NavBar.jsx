import React, { useState } from "react";
import { Menubar } from 'primereact/menubar';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export function NavBar() {    

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
        <div className="derecha">
            <i className="pi pi-shopping-cart p-overlay-badge" style={{'fontSize': '1.4rem', cursor:'pointer'}}>
                <Badge value="0"></Badge>
            </i>
            <Avatar image="image-avatar.png" shape="circle"  size="large" />
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} style={{'background-color':'white', 'border':'none'}}/>
        </div>
    )
}
