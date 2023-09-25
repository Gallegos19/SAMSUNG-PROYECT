import style from './image.module.css'
import Image from 'next/image'
export default function image(props) {
  return (
    <div>
        <Image src={`/img/${props.src}`} alt="" className={style.imagen} width={1000/10} height={1500/10}/>
    </div>
  )
}
