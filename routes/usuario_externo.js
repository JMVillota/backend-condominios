const { Router } = require("express");
const router = Router()

const {
    createUsuarioExterno,
    getUsuarioExterno,
    getAllUsuarioExterno,
    deleteUsuarioExterno,
    updateUsuarioExterno
} = require("../controllers/usuario_externo");

router.post('/usuarioExterno', createUsuarioExterno)
router.get('/usuarioExterno/:per_id', getUsuarioExterno)
router.get('/usuarioExterno', getAllUsuarioExterno)
router.delete('/usuarioExterno/:use_id', deleteUsuarioExterno)
router.put('/usuarioExterno/:per_id', updateUsuarioExterno)


module.exports = router