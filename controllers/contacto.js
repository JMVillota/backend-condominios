const { response } = require("express")
const { db } = require("../Conexiones/slq")

const createContacto = (request, response) => {
    const { nombres, apellidos, telefono, correo } = request.body

    db.query(`INSERT INTO contactos (nombres,apellidos,telefono,correo) 
    VALUES ($1,$2,$3,$4)`, [nombres, apellidos, telefono, correo], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Contacto added with: ${nombres,apellidos,telefono,correo}`)
    })
}

const getAllContacto = (request, response) => {

    db.query('select * from contactos', (error, results) => {
        if (error)
            throw error
        response.status(200).json(results.rows)
    })
}

const getContactoById = (request, response) => {
    const id = request.params.id;
    console.log('id is ' + id)
    db.query('SELECT * FROM contactos WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const updateContacto = (request, response) => {
    const id = request.params.id;
    const { nombres, apellidos, telefono, correo } = request.body
    console.log('id is ' + id)

    db.query(`UPDATE contactos SET nombres=$1, apellidos=$2, telefono=$3, correo=$4 WHERE id=$5`, [nombres, apellidos, telefono, correo, id], (error, results) => {
        if (error) {
            throw error
            console.log(error)
        }
        response.status(200).send(`Contacto modified with ${id}`)
    })
}

const deleteContacto = (request, response) => {

    const id = request.params.id;
    console.log('id is ' + id)
    db.query('DELETE from contactos WHERE id=$1', [id], (error, results) => {
        if (error)
            throw error
        response.status(200).send(`Deleted id is ${id}`)
    })
}


module.exports = {
    createContacto,
    getAllContacto,
    getContactoById,
    updateContacto,
    deleteContacto

}