const { response } = require("express")
const { db } = require("../Conexiones/slq")

const createTipoUsuario = (request, response) => {
    const { rol_id, rol_descripcion } = request.body

    db.query('INSERT INTO rol_residente (rol_id, rol_descripcion ) VALUES ($1, $2)', [rol_id, rol_descripcion], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`TipoUsuarioadded with ID: ${rol_id}`)
    })
}

const getTipoUserById = (request, response) => {

    const rol_id = request.params.rol_id;

    console.log('id is ' + rol_id)
    db.query('SELECT * FROM rol_residente WHERE rol_id = $1', [rol_id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUsers = (request, response) => {


}

const getAllTipoUsers = (request, response) => {

    db.query('select * from rol_residente ', (error, results) => {
        if (error)
            throw error
        response.status(200).json(results.rows)
    })
}


const deleteTipoUsuario = (request, response) => {

    const rol_id = request.params.rol_id;

    console.log('id is ' + rol_id)

    db.query('delete from rol_residente where rol_id=$1', [rol_id], (error, results) => {
        if (error)
            throw error
        response.status(200).send(`deleted id is ${rol_id}`)
    })
}


const updateTipoUsuario = (request, response) => {
    const rol_id = request.params.rol_id;
    const { rol_descripcion } = request.body
    console.log('id is ' + rol_id)

    db.query('update rol_residente set rol_id=$1, rol_descripcion=$2 where rol_id=$1', [rol_id, rol_descripcion], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`TipoUsuariomodified with ${rol_id}`)
    })
}


module.exports = {
    createTipoUsuario,
    getTipoUserById,
    getAllTipoUsers,
    deleteTipoUsuario,
    updateTipoUsuario

}