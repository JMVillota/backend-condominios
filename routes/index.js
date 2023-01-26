const { Router } = require("express");
const router = Router()

const {
    createTipoUsuario,
    getTipoUserById,
    getAllTipoUsers,
    deleteTipoUsuario,
    updateTipoUsuario
} = require("../controllers/RolUsuario");

router.post('/tipoUsuario', createTipoUsuario)
router.get('/tipoUsuario/:rol_id', getTipoUserById)
router.get('/tipoUsuario', getAllTipoUsers)
router.delete('/tipoUsuario/:rol_id', deleteTipoUsuario)
router.put('/tipoUsuario/:rol_id', updateTipoUsuario)


module.exports = router