'use client'
import style from './icon.module.css'
import { BiUserCircle } from 'react-icons/bi';
import { Router } from 'next/navigation';
export default function icons() {
  return (
    <div>
          <BiUserCircle size={48} onChange={() => {
            alert('hola')
          }}/>
    </div>
  )
}
