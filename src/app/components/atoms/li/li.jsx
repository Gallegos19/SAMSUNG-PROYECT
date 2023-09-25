import React from 'react'
import Link from 'next/link'
export default function li(props) {
  return (
    <div style={{marginRight:'10px'}}>
        <Link href={`${props.link}`}>
        <li>{props.nombre}</li>
        </Link>
    </div>
  )
}
