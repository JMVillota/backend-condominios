const { response } = require("express")
const { db } = require("../Conexiones/slq")

const createPersona = (request, response) => {
    const { per_id, per_nombres, per_apellidos } = request.body

    db.query('INSERT INTO persona (per_id, per_nombres, per_apellidos) VALUES ($1, $2, $3)', [per_id, per_nombres, per_apellidos], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Usuario externo added with ID: ${rol_id}`)
    })
}

const getPersona = (request, response) => {

    const rol_id = request.params.rol_id;

    console.log('id is ' + rol_id)
    db.query('SELECT * FROM rol_residente WHERE rol_id = $1', [rol_id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


const getAllPersona = (request, response) => {

    db.query('select * from persona ', (error, results) => {
        if (error)
            throw error
        response.status(200).json(results.rows)
    })
}


const deletePersona = (request, response) => {

    const rol_id = request.params.rol_id;

    console.log('id is ' + rol_id)

    db.query('delete from rol_residente where rol_id=$1', [rol_id], (error, results) => {
        if (error)
            throw error
        response.status(200).send(`deleted id is ${rol_id}`)
    })
}


const updatePersona = (request, response) => {
    const rol_id = request.params.rol_id;
    const { rol_descripcion } = request.body
    console.log('id is ' + rol_id)

    db.query('update rol_residente set rol_descripcion=$1 where rol_id=$2', [rol_descripcion, rol_id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Rol Residente modified with ${rol_id}`)
    })
}


module.exports = {
    createPersona,
    getPersona,
    getAllPersona,
    deletePersona,
    updatePersona

}