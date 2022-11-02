import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const card = ({producto, agregarProducto, changuito, listaProductos}) => {
  
  const {id, img, nombre, precio} = producto

  const seleccionarProducto = (id) => {
    const item = listaProductos.find(  item => 
        item.id === id)        
      
    if(!item.cantidad && item.cantidad !== 1){
      item.cantidad = 1 
      agregarProducto([...changuito,item])
      return
    }
    const changuitoEditado = changuito.map( prod =>(
        item.id === prod.id ? {...prod, cantidad: prod.cantidad +=1 } : prod
    ))
    agregarProducto(changuitoEditado)
  }
    
  return (
    <>
    <Card className='p-3 m-3' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>{precio}</Card.Text>
            <Button
                variant="primary"
                onClick={() => seleccionarProducto(id)}
                >Agregar a Carrito</Button>
        </Card.Body>
        </Card>
    </>
  )
}

export default card
