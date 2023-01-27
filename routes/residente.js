const { Router } = require("express");
const router = Router()

const {
    createResidente,
    getResidente,
    getAllResidente,
    deleteResidente,
    updateResidente
} = require("../controllers/residente");

router.post('/Residente', createResidente)
router.get('/Residente/:per_id', getResidente)
router.get('/Residente', getAllResidente)
router.delete('/Residente/:res_id', deleteResidente)
router.put('/Residente/:per_id', updateResidente)


module.exports = router