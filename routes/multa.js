const { Router } = require("express");
const router = Router()

const {
    getAllMulta,
    getByMulta,
    createMulta,
    updateMulta,
    deleteMulta
} = require("../controllers/multa");

router.get('/multa', getAllMulta)
router.get('/multa/:mul_id', getByMulta)
router.post('/multa', createMulta)
router.put("/multa/:mul_id", updateMulta)
router.delete('/multa/:mul_id', deleteMulta)

module.exports = router