const { response } = require("express")
const { db } = require("../Conexiones/slq")

const getClientes = async (req, res) => {
    const response = await db.any('select * from tbl_cliente')
    res.json(response)
}

module.exports = {
    getClientes
}