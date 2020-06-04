import React, { useState, useCallback, useEffect, useMemo } from "react";
import ProductTitle from "./ProductTitle";
import { timeConvert } from "../../Util/utils";
import FechaLanzamiento from "./FechaLanzamiento";

const Product = ({ nombre, id, stock, fechaLanzamiento}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [favorito, setFavorito] = useState(false);
  const [cuentaRegresiva, setCuentaRegresiva] = useState(Date.now());

  const calcularFechaLanzamiento = useCallback(() => {
    setCuentaRegresiva(timeConvert(fechaLanzamiento - new Date()));
  }, [fechaLanzamiento]);

  useEffect(() => {
    const timerID = setInterval(() => calcularFechaLanzamiento(), 1000);
    return () => {
      clearInterval(timerID);
    }
  }, [calcularFechaLanzamiento]);

  const onAddClick = useCallback(() => {
    setIsSelected(!isSelected);
  }, [isSelected]);

  const onFavoritoClick = useCallback(() => {
    setFavorito(!favorito);
  }, [favorito]);

  const seleccionadoTxt = useMemo(() => isSelected ? "Sí" : "No", [isSelected]);
  const favoritoTxt = useMemo(() => favorito ? "Sí" : "No", [favorito]);
  if (!id) {
    return <div>Este producto no esta disponible</div>;
  }
  return (
    <div>
      <ProductTitle nombre={nombre} />
      <div>Producto Nro {id}</div>
      {fechaLanzamiento && (
        <FechaLanzamiento cuentaRegresiva={cuentaRegresiva} />
      )}
      {isSelected && <div>Seleccionado: {seleccionadoTxt}</div>}
      <div>Favorito: {favoritoTxt}</div>
      {stock >= 1 && (
        <>
          <div>Stock disponible: {stock}</div>
          <button onClick={onAddClick}>
            {isSelected ? "Quitar" : "Agregar"}
          </button>
        </>
      )}
      <button onClick={onFavoritoClick}>
        {favorito ? "Quitar de favoritos" : "Agregar a favoritos"}
      </button>
    </div>
  );
};

export default Product;
