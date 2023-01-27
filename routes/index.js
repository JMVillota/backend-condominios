const { Router } = require("express");
const router = Router()


// Controladores Tipo Servicio
const {
    createTipoServicio,
    getTipoServicioById,
    getAllTipoServicios,
    deleteTipoServicio,
    updateTipoServicio
} = require("../controllers/tipo_servicio");

// Controladores Servicio
const {
    createServicio,
    getServicioById,
    getAllServicios,
    deleteServicio,
    updateServicio
} = require("../controllers/servicio");

// Controladores Detalle Servicio
const {
    createDetalleServicio,
    getDetalleServicioById,
    getAllDetalleServicios,
    deleteDetalleServicio,
    updateDetalleServicio
} = require("../controllers/detalle_servicio");

// Tipo Servicio CRUD
router.post('/tipo_servicio', createTipoServicio)
router.get('/tipo_servicio/:tser_id', getTipoServicioById)
router.get('/tipo_servicios', getAllTipoServicios)
router.delete('/tipo_servicio/:tser_id', deleteTipoServicio)
router.put('/tipo_servicio/:tser_id', updateTipoServicio)

// Servicio
router.post('/servicio', createServicio)
router.get('/servicio/:ser_id', getServicioById)
router.get('/servicios', getAllServicios)
router.delete('/servicio/:ser_id', deleteServicio)
router.put('/servicio/:ser_id', updateServicio)
module.exports = router

// Detalle Servicio
router.post('/detalle_servicio', createDetalleServicio)
router.get('/detalle_servicio/:dser_id', getDetalleServicioById)
router.get('/detalle_servicios', getAllDetalleServicios)
router.delete('/detalle_servicio/:dser_id', deleteDetalleServicio)
router.put('/detalle_servicio/:dser_id', updateDetalleServicio)