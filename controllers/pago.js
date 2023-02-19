const { response } = require("express")
const { db } = require("../Conexiones/slq")

const getAllCuota = (request, response) => {

    db.query('select pag_id, pag_descripcion, pag_costo, ali_descripcion from gest_adm_pago p INNER JOIN gest_adm_alicuota a on a.ali_id = p.ali_id', (error, results) => {
        if (error)
            throw error
        response.status(200).json(results.rows)
    })
}

const getAllDetallePago = (request, response) => {

    db.query('SELECT cdp.*, per.per_nombres, per.per_apellidos, al.ali_descripcion, al.ali_costo FROM cont_detalle_pago cdp INNER JOIN seg_sis_residente res ON cdp.res_id = res.res_id INNER JOIN seg_sis_persona per ON res.per_id = per.per_id INNER JOIN gest_adm_alicuota al ON cdp.ali_id = al.ali_id WHERE cdp.dpag_estado = false', (error, results) => {
        if (error)
            throw error
        response.status(200).json(results.rows)
    })
}

const createDetallePago = (req, res) => {
    const dpag_fecha = req.body.dpag_fecha;
    const res_id = req.body.res_id;
    const ali_id = req.body.ali_id;

    // Consulta para obtener el ali_costo de la tabla relacionada
    const query = {
        text: 'SELECT ali_costo FROM gest_adm_alicuota WHERE ali_id = $1',
        values: [ali_id],
    };

    db.query(query, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al obtener el ali_costo');
        } else {
            const ali_costo = result.rows[0].ali_costo;

            // Consulta para insertar los datos en la tabla cont_detalle_pago
            const insertQuery = {
                text: 'INSERT INTO cont_detalle_pago (dpag_fecha, res_id, ali_id, dpag_estado, total) VALUES ($1, $2, $3, $4, $5)',
                values: [dpag_fecha, res_id, ali_id, false, ali_costo],
            };

            db.query(insertQuery, (err, result) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Error al insertar datos en la tabla cont_detalle_pago');
                } else {
                    res.status(200).send('Datos insertados correctamente');
                }
            });
        }
    });
};


const getAllAlicuota = (request, response) => {

    db.query('select * from gest_adm_alicuota order by ali_id', (error, results) => {
        if (error)
            throw error
        response.status(200).json(results.rows)
    })
}

const getByCuota = (request, response) => {

    const cuo_id = request.params.cuo_id;

    console.log('id' + cuo_id)
    db.query('SELECT * FROM gest_adm_pago WHERE cuo_id = $1', [cuo_id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createCuota = async(req, res) => {
    const { ali_descripcion, ali_costo, pagos } = req.body;
    try {
        // Insertar los datos en la tabla gest_adm_alicuota
        const resultAli = await db.query(
            'INSERT INTO gest_adm_alicuota (ali_descripcion, ali_costo) VALUES ($1, $2) RETURNING ali_id', [ali_descripcion, ali_costo]
        );
        const ali_id = resultAli.rows[0].ali_id;
        // Insertar en gest_adm_pago
        for (let pago of pagos) {
            await db.query('INSERT INTO gest_adm_pago (pag_descripcion, pag_costo, ali_id) VALUES ($1, $2, $3)', [pago.pag_descripcion, pago.pag_costo, ali_id]);
        }

        res.status(200).send('Datos insertados correctamente');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al insertar los datos');
    }
};

const updatePago = async(req, res) => {
    const pag_id = req.params.pag_id;
    const { pag_descripcion, pag_costo } = req.body;
    try {
        // Paso 1: Obtener el registro correspondiente al pag_id
        const resPag = await db.query('SELECT ali_id, pag_costo FROM gest_adm_pago WHERE pag_id = $1', [pag_id]);
        const ali_id = resPag.rows[0].ali_id;
        const oldPagCosto = resPag.rows[0].pag_costo;
        const newPagCosto = parseFloat(pag_costo);

        // Paso 2: Comprobar si el valor de pag_costo ha cambiado
        if (oldPagCosto !== newPagCosto) {
            // Paso 3: Obtener los registros de gest_adm_pago con el mismo ali_id
            const resPag2 = await db.query('SELECT pag_costo FROM gest_adm_pago WHERE ali_id = $1', [ali_id]);

            // Paso 4: Sumar todos los valores de pag_costo obtenidos
            const totalPagCosto = resPag2.rows.reduce((total, row) => total + parseFloat(row.pag_costo), newPagCosto);
            const newAliCosto = totalPagCosto.toFixed(2);

            // Paso 5: Actualizar las tres tablas
            await db.query('UPDATE gest_adm_pago SET pag_costo = $1, pag_descripcion = $2 WHERE pag_id = $3', [newPagCosto, pag_descripcion, pag_id]);
            await db.query('UPDATE gest_adm_alicuota SET ali_costo = $1 WHERE ali_id = $2', [newAliCosto, ali_id]);
            await db.query('UPDATE cont_detalle_pago SET total = $1 WHERE ali_id = $2', [newAliCosto, ali_id]);
            res.status(200).send('Datos insertados correctamente');

        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar los datos');
    }
}


const getPagoByaliID = async(req, res) => {
    const ali_id = req.params.ali_id;
    try {
        const query = `SELECT * FROM gest_adm_alicuota JOIN gest_adm_pago ON gest_adm_alicuota.ali_id = gest_adm_pago.ali_id WHERE gest_adm_alicuota.ali_id = $1`;
        const { rows } = await db.query(query, [ali_id]);
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
};


const deleteCuota = (request, response) => {

    const cuo_id = request.params.cuo_id;

    console.log('id' + cuo_id)

    db.query('delete from gest_adm_pago where cuo_id=$1', [cuo_id], (error, results) => {
        if (error)
            throw error
        response.status(200).send(`Delete id ${cuo_id}`)
    })
}

module.exports = {
    getAllCuota,
    getAllAlicuota,
    getByCuota,
    createCuota,
    deleteCuota,
    getAllDetallePago,
    createDetallePago,
    getPagoByaliID,
    updatePago
}