import React, { Fragment } from 'react'

export const Home = () => {
  return (
    <Fragment>
        <h1 id="encabezado_productos">Ultimos Vehiculos</h1>

        <section id="productos" className='container mt-5'>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-3 my-'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/toyota_prado.jpg' alt='Toyota Prado'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href='#'>Toyota Prado</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='No_de_opiniones'> 5 reviews</span>
                            </div>
                            <p className='card-text'>$80.000.000</p><a href='#' id="ver_producto" className='btn btn-block'>
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