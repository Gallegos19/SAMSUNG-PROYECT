import style from './banner.module.css'

import Text from '../../atoms/text/text'
import Image from '../../atoms/image/image'
export default function banner() {
   const img1='phone.jpg'
  return (
    <div className={style.container}>
        <Text texto="La tecnologia a tu alcance"/>
        <Image imagen={img1}/>
    </div>
  )
}
