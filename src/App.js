import React from "react";
import "./App.css";
import Product from "./components/Product";
import ProductList from "./components/ProductList";

const productData = [
  {
    id: 1,
    nombre: "Gafas de Sol",
    stock: 5,
    fechaLanzamiento: new Date(2020, 5, 3),
  },
  {
    id: 2,
    nombre: "Camiseta Playera",
    stock: 5,
    fechaLanzamiento: new Date(2020, 5, 4),
  },
  {
    id: 3,
    nombre: "Computador",
    stock: 0,
  },
  {
    nombre: "Balón de Futbol",
  },
];

function App() {
  return (
    <div className="App">
      <ProductList products={productData} />
    </div>
  );
}

export default App;
