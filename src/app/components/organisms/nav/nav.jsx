import React from 'react'
import style from './nav.module.css'
import icons from '../../atoms/icons/icons'
import Li from '../../atoms/li/li'
import Buscador from '../../molecules/buscador/buscador'
import Icons from '../../atoms/icons/icons'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../../../public/img/logo.png'

export default function nav() {
  return (
    <div className={style.container}>
        <div className={style.logo}>
            <Link href={'/'}>
        <Image src={logo} style={{minWidth:'10%'} }/>
        </Link>
        </div>
        
        <Li nombre='Home' link='/'/>
        <Li nombre='Landing Page' link='../../components/LandingPage'/>
        <Li nombre='Contactanos' link='../../components/contact'/>
        <Li nombre='Iniciar Sesión' link='../../components/formPage'/>
        <Buscador/> 
        <Icons />
        
    </div>
  )
}
