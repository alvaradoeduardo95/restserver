const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {
    
    const query = req.query

    res.json({
        msg: 'get API- controller',
        query
    })
}

const usuariosPut = (req, res = response) => {
    const id = req.params.id

    res.json({
        msg: 'put API- controller',
        id
    })
}

const usuariosPost = (req, res = response) => {
   
     const { nombre, edad  } = req.body;

    res.status(201).json({
        msg: 'post API - controller',
        nombre,
        edad
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API'
    })
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}