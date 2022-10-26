import React, { Fragment } from 'react'

export const Home = () => {
  return (
    <Fragment>
        <h1 id="encabezado_productos">Ultimos Vehiculos</h1>

        <section id="productos" className='container mt-5'>
            <div className='row'>
                {//Producto 1*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/bmw m240.jpeg' alt='BMW m240'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href='http://localhost:3000'>BMW m240</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='No_de_opiniones'> 15 reviews</span>
                            </div>
                            <p className='card-text'>$200.000.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                Ver detalles
                            </a>
                        </div>
                    </div> 
                </div>   

                {//Producto 2*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/chevrolet d-max.jpeg' alt='Chevrolet D-max'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href='http://localhost:3000'>Chevrolet D-max</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='No_de_opiniones'> 12 reviews</span>
                            </div>
                            <p className='card-text'>$190.000.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                Ver detalles
                            </a>
                        </div>
                    </div> 
                </div>

                {//Producto 3*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/chevrolet joy.jpeg' alt='Chevrolet Joy'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href='http://localhost:3000'>Chevrolet Joy</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='No_de_opiniones'> 17 reviews</span>
                            </div>
                            <p className='card-text'>$110.000.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                Ver detalles
                            </a>
                        </div>
                    </div> 
                </div>

                {//Producto 4*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/chevrolet onix.jpeg' alt='Chevrolet Onix'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href='http://localhost:3000'>Chevrolet Onix</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='No_de_opiniones'> 11 reviews</span>
                            </div>
                            <p className='card-text'>$60.000.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                Ver detalles
                            </a>
                        </div>
                    </div> 
                </div>

            </div>
        </section>
            
    </Fragment>
  )
}
export default Home