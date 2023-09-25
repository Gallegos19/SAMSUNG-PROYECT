import style from "./card.module.css";
import Text from "../../atoms/text/text";
import Image from "next/image";
export default function card(props) {
  return (
    <div className={style.card}>
           {" "}
      <div className="bg-slate-100 p-10 rounded-md w-100 h-1">
     
        <h3 className="text-3xl font-bold">{props.texto}</h3>
      </div>
      <Image src={`/img/${props.imagen}`} alt="" className="rounded w-200" width={3000/10} height={1500/10} />
    </div>
  );
}
