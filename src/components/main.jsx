import React from 'react';

const Main = function () {
    return ( 
        <div>
            <div className="cabecera">
                <p className='sub-titulo'>Tu proxima compra Gamer</p>
                <h1 className='titulo'>Se un GAMER</h1>
            </div>
            <p className="titulo-arma">Arma tu PC</p>
            <div className="armar">
                <div className="marca">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Intel-logo-2022.png/800px-Intel-logo-2022.png" alt="" />
                </div>
                <div className="marca">
                    <img src="https://logos-world.net/wp-content/uploads/2020/03/AMD-Symbol.png" alt="" />
                </div>
            </div>
        </div>
     );
}

export default Main;