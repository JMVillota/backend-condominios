const { Router } = require("express");
const router = Router()

const { getClientes } = require("../controllers/clientes");

router.get("/clientes", getClientes)


module.exports = router