import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';

export function Galeria() {
    const [images, setImages] = useState(null);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        setImages(aImagen);
    }, [])

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '70%', borderRadius:'10px', marginBottom:'2rem' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ width: '90%', borderRadius:'10px' }} />
    }

    return (
        <div className="galeria">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={4} style={{ maxWidth: '640px' }} 
                item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    )
}


const aImagen = [
    {
        itemImageSrc: './images/galeria/image-product-1.jpg',
        thumbnailImageSrc: './images/galeria/image-product-1-thumbnail.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
    },
    {
        itemImageSrc: './images/galeria/image-product-2.jpg',
        thumbnailImageSrc: './images/galeria/image-product-2-thumbnail.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2'
    },
    {
        itemImageSrc: './images/galeria/image-product-3.jpg',
        thumbnailImageSrc: './images/galeria/image-product-3-thumbnail.jpg',
        alt: 'Description for Image 3',
        title: 'Title 3'
    },
    {
        itemImageSrc: './images/galeria/image-product-4.jpg',
        thumbnailImageSrc: './images/galeria/image-product-4-thumbnail.jpg',
        alt: 'Description for Image 4',
        title: 'Title 4'
    }
];