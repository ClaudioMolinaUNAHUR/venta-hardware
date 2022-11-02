import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { v4 as uuidv4 } from 'uuid';

const carrito = ({agregarProducto, changuito}) => {
    const eliminarProducto = (id) =>{
        const items = changuito.filter( producto =>
            producto.id !== id);
        
        agregarProducto(items);

    }
  return (
    <>
      <Table className='text-white' bordered>
        <thead>
            <tr>
            <th>Cantidad</th>
            <th>Item</th>
            <th>Precio</th>
            <th>Eliminar</th>
            </tr>
        </thead>
        <tbody> 
            {changuito.map( item => (                           
                <tr key={uuidv4()}>
                    <td>{item.cantidad}</td>
                    <td>{item.nombre.substring(0, 20)+"..."}</td>
                    <td>{item.precio}</td>
                    <td>
                        <Button
                        variant='light'
                        onClick={() => eliminarProducto(item.id)}
                        >Eliminar</Button>
                    </td>

                </tr>
            ))} 
        </tbody>                                       
        <tfoot>
            <tr>
                <td>Total</td>
                <td colSpan={3}>
                    {changuito.reduce((previousValue, currentValue) => previousValue + (currentValue.precio * currentValue.cantidad),0)
                    }
                </td>
            </tr>
        </tfoot>                                    
    </Table>                         
    </>
  )
}

export default carrito
