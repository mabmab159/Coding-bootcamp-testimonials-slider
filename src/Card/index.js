import React from "react";
import "./styles.css";
import next from "../assets/icon-next.svg";
import prev from "../assets/icon-prev.svg";
import bg from "../assets/pattern-bg.svg";
import curve from "../assets/pattern-curve.svg";
import quotes from "../assets/pattern-quotes.svg";

function Card({ name, title, text, image, setInfo, info }) {
  return (
    <React.Fragment>
      <div className="card">
        <div className="fondo">
          <img src={bg} className="bg" alt="bg" />
          <img src={quotes} className="quotes" alt="quotes" />
          <img src={curve} className="curve" alt="curve" />
        </div>
        <img className="img-foto" src={image} alt="Foto" />
        <div className="contenedor-botones">
          <div
            onClick={() => setInfo((1 - info) % 2)}
            className="boton boton-1"
          >
            <img src={prev} alt="imagen" />
          </div>
          <div
            onClick={() => setInfo((info + 1) % 2)}
            className="boton boton-2"
          >
            <img src={next} alt="imagen" />
          </div>
        </div>
        <div className="informacion">
          <p>{text}</p>
          <p className="autor">
            <span className="autor-1">{name}</span>
            <span className="autor-2">{title}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export { Card };
