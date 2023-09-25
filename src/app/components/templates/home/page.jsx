import React from "react";
import Banner from "../../molecules/banner/banner";
import ContenedorCard from "../../organisms/contenedorCard/contenedorCard";
import Button from "../../atoms/button/button";
import style from "./page.css";
import Video from "../../atoms/video/video";
export default function home() {
  return (
    <div className={style.contenedor}>
      <Banner />
      <div className={style.contenidoprincipal}>
      <div className={style.contenido}>
        <ContenedorCard />
      </div>
      </div>
    </div>
  );
}
