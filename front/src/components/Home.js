import React, { Fragment, useEffect, useState } from 'react'
import MetaData from './layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
import { useParams, Link } from 'react-router-dom'
import { useAlert } from 'react-alert'
import Pagination from 'react-js-pagination'


export const Home = () => {
    const params= useParams();
    const keyword= params.keyword;
    const [currentPage, setCurrentPage] = useState(1)
    const { loading, products, error, resPerPage, productsCount } = useSelector(state => state.products)
    const alert = useAlert();
    
    const dispatch = useDispatch();
    useEffect(() => {
        if (error) {
            return alert.error(error)
        }

        dispatch(getProducts(currentPage, keyword));
    }, [dispatch, alert, error, currentPage, keyword])

    function setCurrentPageNo(pageNumber){
        setCurrentPage(pageNumber)
    }

    return (
        <Fragment>
            <MetaData title="imagine and live the experience"></MetaData>
            <h1 id="encabezado_productos">Ultimos Vehiculos</h1>

            <section id="productos" className='container mt-5'>
                <div className='row'>
                    {/*Producto 1*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/greycar.jpeg' alt='BMW m240'></img>
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

                    {/*Producto 2*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/chevroletd-max.jpeg' alt='Chevrolet D-max'></img>
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

                    {/*Producto 3*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/chevroletjoy.jpeg' alt='Chevrolet Joy'></img>
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

                    {/*Producto 4*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/chevroletonix.jpeg' alt='Chevrolet Onix'></img>
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
            
            <div className='d-flex justify-content-center mt-5'>
                        <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={resPerPage}
                        totalItemsCount={productsCount}
                        onChange={setCurrentPageNo}
                        nextPageText={'Siguiente'}
                        prevPageText={'Anterior'}
                        firstPageText={'Primera'}
                        lastPageText={'Ultima'}
                        itemClass='page-item'
                        linkClass='page-link'
                        />
                    </div>
        </Fragment>
    )
}
export default Home