import './App.css';
import Header from './components/header';
import Main from './components/main';
import Tarjeta from './components/tarjeta';
import Footer from './components/footer'; 
import { useState, useEffect } from 'react';


function App() {
  
  const [listaProductos, guardarProductos] = useState([
    {id:0,
    img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20551_Mother_ASUS_PRIME_A520M-K_AM4_f5d89e00-mini.jpg",
    nombre:"Mother ASUS PRIME A520M-K-AM4",
    precio:17350},
    {id:1,
      img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28866_Placa_de_Video_ASUS_GeForce_GTX_1660_TI_6GB_GDDR6_TUF_EVO_OC_c3ef28a0-mini.jpg",
      nombre:"Placa de Video ASUS GeForce GTX 1660 TI 6GB GDDR6 TUF EVO OC",
      precio:92450},
    {id:2,
      img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30440_Mother_ASUS_PRIME_H610M-E_D4_S1700_3402c168-mini.jpg",
      nombre:"Mother ASUS PRIME H610M-E D4 S1700",
      precio:21850},
    {id:3,
      img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31776_Memoria_GeiL_DDR4_16GB_3000MHz_Super_Luce_RGB_Black_646b61f7-mini.jpg",
      nombre:"Memoria GeiL DDR4 16GB 3000MHz Super Luce RGB Black",
      precio:21100},
  ])

  //Creamos nuestro changuito
  const [changuito, agregarProducto] = useState(
    JSON.parse(localStorage.getItem('changuito')) || []
  )
  
  useEffect(() =>{
    if(localStorage.getItem('changuito')){
      agregarProducto(JSON.parse(localStorage.getItem('changuito')))
    }
  },[])
  
  useEffect(() =>{
    localStorage.setItem('changuito', JSON.stringify(changuito))
  },[changuito])

  return (
    <div>
      <Header
        listaProductos={listaProductos}
        agregarProducto={agregarProducto}
        changuito={changuito}/>
      <Main/>
      <Tarjeta 
        listaProductos={listaProductos}
        agregarProducto={agregarProducto}
        changuito={changuito}/>
      <Footer/>
    </div>
  );
}

export default App;
