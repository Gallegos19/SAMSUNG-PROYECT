import style from './title.module.css'

export default function title(props) {
  return (
    <div className={style.title}>
        <h1>{props.title}</h1>
    </div>
  )
}
