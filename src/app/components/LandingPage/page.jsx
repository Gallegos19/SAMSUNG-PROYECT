import React from 'react'
import Title from '../atoms/title/title'
import Image from 'next/image'
import Button from '../atoms/button/button'
import Text from '../atoms/p/p'
import style from './page.module.css'
import Phone from '../atoms/phone/phone'
import Huella from '../atoms/huella/huella'
import Phone2 from  '../molecules/phone2/phone2'
export default function Landingpage() {
  return (
    <div className={style.container}>
      <div className={style.fondo}>
      <Phone/>
      <Text text= 'Nuevo Diseño e interfaz'/>
      </div>
  <div className={style.huella}>
  <Huella/>
  <Text text ='Datos biometricos seguros'/>
  </div>
  <div className={style.phone}>
    <Phone2 />
    <Text text ='Mas funcionalidades'/>
  </div>
  <div>
    <Button buttontext='Llevame'/>
  </div>
    </div>
  )
}
