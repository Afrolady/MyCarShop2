exports.getProducts=(req,res,next) => { //puede pedir o requerir algo, responder a algo puede ejecute una accion al terminar con next. 
    res.status(200).json({
        success: true,
        message: "En esta ruta usted va a poder ver todos los productos"
    })

}