const { Router } = require("express");
const router = Router()

const {
    createPersona,
    // getPersona,
    getAllPersona,
    deletePersona,
    // updatePersona
} = require("../controllers/persona");

router.post('/Persona', createPersona)
// router.get('/Persona/:rol_id', getPersona)
router.get('/Persona', getAllPersona)
router.delete('/Persona/:per_id', deletePersona)
// router.put('/Persona/:rol_id', updatePersona)



module.exports = router