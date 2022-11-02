import React, { Fragment, useState} from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../layout/MetaData'


const Cart = () => {
    const [quantity, setQuantity] = useState(1)

    const increaseQty = () => {
        const contador = document.querySelector('.count')
        const qty = contador.valueAsNumber+1;
        setQuantity(qty)
     }
  
     const decreaseQty = () => {
      const contador = document.querySelector('.count')
  
      const qty = contador.valueAsNumber-1;
      setQuantity(qty)
   }

    //Json de ejemplo, falta colocar la versión nuestra de los autos
   let cartItems=[
        {
            "nombre": "Bmw M240 Xdrive",
            "precio": 259900000,
            "imagen": [
                {
                    "public_id": "",
                    "url": "https://http2.mlstatic.com/D_NQ_NP_787208-MCO51757152353_092022-O.webp"
                }
            ],
            "inventario": 3,
            "opiniones": []
        },
        {
            "nombre": "Chevrolet D-Max",
            "precio": 110900000,
            "imagen": [
                {
                    "public_id": "",
                    "url": "https://www.elcarrocolombiano.com/wp-content/uploads/2018/04/20180428-CHEVROLET-D-MAX-2019-COLOMBIA-01.jpg"
                }
            ],
            "inventario": 2,
            "opiniones": []
        },
        {
            "nombre": "Chevrolet Joy Hachback Y Sedán",
            "precio": 60000000,
            "imagen": [
                {
                    "public_id": "",
                    "url": "https://http2.mlstatic.com/D_NQ_NP_796646-MCO51657125253_092022-O.webp"
                }
            ],
            "inventario": 5,
            "opiniones": []
        },
        {
            "nombre": "Chevrolet Onix Ltz Turbo 2021",
            "precio": 63000000,
            "imagen": [
                {
                    "public_id": "",
                    "url": "https://http2.mlstatic.com/D_NQ_NP_678337-MCO51583689586_092022-O.webp"
                }
            ],
            "inventario": 1,
            "opiniones": []
        }
    ]

cartItems = Array.from(cartItems);

    return (
        <Fragment>
            <MetaData title={'Your Cart'} />
            

            {cartItems.length === 0 ? <h2 className="mt-5">Su carrito esta vacio</h2> : (
                <Fragment>
                    
                    <h2 className="mt-5">Su Carrito: <b>{cartItems.length} items</b></h2>

                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-lg-8">

                        {cartItems && cartItems.map (item => (
                                <Fragment>
                                    <hr />

                                    <div className="cart-item" key={item.nombre}>
                                        <div className="row">
                                            <div className="col-4 col-lg-3">
                                                <img src={item.imagen} alt={item.nombre} height="90" width="115" />
                                            </div>

                                            <div className="col-5 col-lg-3">
                                                <Link to={`/producto/${item._id}`}>{item.nombre}</Link>
                                            </div>


                                            <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                                <p id="card_item_price">${item.precio}</p>
                                            </div>

                                            <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                                <div className="stockCounter d-inline">
                                                    <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>

                                                    <input type="number" className="form-control count d-inline" value={quantity} readOnly />

                                                    <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                                                </div>
                                            </div>

                                            <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                                                <i id="delete_cart_item" className="fa fa-trash btn btn-danger" ></i>
                                            </div>

                                        </div>
                                    </div>
                                    <hr />
                                </Fragment>
                            
                        ))}
                        </div>

                        <div className="col-12 col-lg-3 my-4">
                            <div id="order_summary">
                                <h4>Total de la Compra</h4>
                                <hr />
                                <p>Subtotal:  <span className="order-summary-values">$350.000</span></p>
                                <p>Est. total: <span className="order-summary-values">$380.000</span></p>

                                <hr />
                                <button id="checkout_btn" className="btn btn-primary btn-block">Comprar!</button>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default Cart