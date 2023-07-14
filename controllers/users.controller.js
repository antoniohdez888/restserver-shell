import { request, response } from 'express';

export const getUsers = (req = request, res = response) => {

    const {nombre, edad} = req.query;
    
    res.json({
        msg: 'get API - controlador',
        nombre,
        edad
    });
}

export const postUsers = (req = request, res = response) => {

    const {nombre, edad} = req.body;
    
    res.json({
        msg: 'post API - controlador',
        nombre, 
        edad
    });
}

export const putUsers = (req = request, res = response) => {
    
    const id = req.params.id;

    res.json({
        msg: 'put API - controlador',
        id
    });
}

export const patchUsers = (req = request, res = response) => {
    
    res.json({
        msg: 'patch API - controlador'
    });
}

export const deleteUsers = (req = request, res = response) => {
    
    res.json({
        msg: 'delete API - controlador'
    });
}