'use client'
import style from './contenedorcards.module.css'
import Card from "../../molecules/card/card";
import Button from "../../atoms/button/button";
import img1 from '../../../../../public/img/samsung1.jpg'
import text from "../../atoms/text/text";

import Image from "next/image";
import Imagen from '@/app/components/atoms/image/image'
export default function contenedorCard() {
const img = 'Samsung3.jpg';
const img2 = 'Samsung5.jpg';
const img3 = 'Samsung2.jpg';
  const estilo = {
    display: "flex",
    flexWrap: "wrap",
    gap: "5rem",
    alingItems: "center",
    justifyContent: "center",
    margin: "auto 0",
    backgroundImage:`url(${img})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '50vh',
    marginBottom:'15vh'
  };
  // Estilos para el hover
  const estiloHover = {
        transform:'scale(1.1)',
  };
  const cards =[
    {   
        texto:'Nuevo Diseño',
        imagen:img,
    },
    {
        texto:"Mas ecologico",
        imagen:img2,
    },
    {
        texto:"Resiste al agua",
        imagen: img3,
    },
  ];
  
  return (
    <div style={{maxHeight: '20vh', marginBottom:'5vh'}}>
      <div style={estilo} >
        {cards.map((card,index)=>(
            <Card key={index} texto={card.texto} imagen={card.imagen} />
        ))}
     
      </div>
    </div>
  );
}
