import React, { useEffect } from 'react';
import Card from './card';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Tarjeta = ({listaProductos, agregarProducto, changuito}) =>{

    return (
        <div>
            <p className='text-center fw-bold bg-primary text-white py-3'>ULTIMAS NOVEDADES</p>
                <div className='d-flex m-5'>
                {
                    listaProductos.map((producto)=>(
                        <Card
                          key={uuidv4()}
                          producto={producto}
                          listaProductos={listaProductos}
                          agregarProducto={agregarProducto}
                          changuito={changuito} />
                    ))
                }
                </div>
        </div>
    );
}

export default Tarjeta;