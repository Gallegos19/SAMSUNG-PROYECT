import style from './text.module.css'

export default function text(props) {
  return (
    <div className={style.text}>
        <h3>{props.texto}</h3>
    </div>
  )
}
