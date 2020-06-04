import React, { Component } from "react";
import ProductTitle from "./ProductTitle";
import { timeConvert } from "../../Util/utils";
import FechaLanzamiento from "./FechaLanzamiento";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      favorito: false,
      cuentaRegresiva: Date.now(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.calcularFechaLanzamiento(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  calcularFechaLanzamiento() {
    this.setState({
      cuentaRegresiva: timeConvert(this.props.fechaLanzamiento - new Date()),
    });
  }

  onAddClick = () => {
    this.setState((prevState) => {
      return {
        isSelected: !prevState.isSelected,
      };
    });
  };

  onFavoritoClick = () => {
    const { favorito } = this.state;
    this.setState({
      favorito: !favorito,
    });
  };

  render() {
    const { nombre, id, stock, fechaLanzamiento } = this.props;
    const { isSelected, favorito, cuentaRegresiva } = this.state;
    const seleccionadoTxt = isSelected ? "Sí" : "No";
    const favoritoTxt = favorito ? "Sí" : "No";
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
            <button onClick={this.onAddClick}>
              {isSelected ? "Quitar" : "Agregar"}
            </button>
          </>
        )}
        <button onClick={this.onFavoritoClick}>
          {favorito ? "Quitar de favoritos" : "Agregar a favoritos"}
        </button>
      </div>
    );
  }
}

export default Product;
