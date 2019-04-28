var Postal = require('../models/postal');

//1. Get all - Obtiene todos los objetos
exports.inq = function (req, res) {
    Postal.find(function (err, postal) {
        console.log(postal);
        if (err) return console.log(err);
        res.send(postal);
        console.log("Codigos Postales encontrados...");
    })
};

//2. Get CP ordenados y sin repetir
exports.inqCP = function (req, res) {
    Postal.distinct("d_CP", (err, postal) => {
        if (err) return console.log(err);
        console.log(postal.sort());
        res.send(postal.sort());
        console.log("CP encontrados...");
    })
};

//3. Get colonias ordenadas y sin repetir
exports.inqColonia = function (req, res) {
    Postal.distinct("d_asenta", (err, postal) => {
        if (err) return console.log(err);
        console.log(postal.sort());
        res.send(postal.sort());
        console.log("Colonias encontradas...");
    })
};

//4. Get ciudades sin ordenados y sin repetir
exports.inqCiudad = function (req, res) {
    Postal.distinct("d_ciudad", (err, postal) => {
        if (err) return console.log(err);
        console.log(postal.sort());
        res.send(postal.sort());
        console.log("Ciudades encontradas...");
    })
};

//5. Get municipios ordenados y sin repetir
exports.inqMnpio = function (req, res) {
    Postal.distinct("D_mnpio", (err, postal) => {
        if (err) return console.log(err);
        console.log(postal.sort());
        res.send(postal.sort());
        console.log("Municipios encontrados...");
    })
};

//6. Get Object by ID
exports.inqId = (req, res) => {
    Postal.findById(req.params.id, (err, postal) => {
    if (err) return console.log(err);
    res.send(postal);
    console.log("Postal encontrado: "+req.params.id);
    })
};

//7. Get Objects by CP
exports.inqByCP = (req, res) => {
    Postal.find({d_CP:req.params.codigo}, (err, postal) => {
    if (err) return console.log(err);
    res.send(postal);
    console.log("CP encontrados: "+req.params.codigo);
    })
};

//8.Get Ciudades por nombre exacto de Municipio
exports.inqCiudadByMnpio = (req, res) => {
    Postal.find({D_mnpio:req.params.munName}, {D_mnpio:1,d_ciudad:1, _id:0}, (err, postal) => {
    console.log(postal.sort());
    if (err) return console.log(err);
    res.send(postal.sort());
    console.log("Ciudades encontradas por municipio: "+req.params.munName);
    })
};

//9. Get Colonias por nombre de municipio parecido
exports.inqColBySimilarMnpio = (req, res) => {
    var regex = new RegExp(req.params.munName, "i")
    Postal.find({D_mnpio:regex}, {D_mnpio:1, d_asenta:1,_id:0}, (err, postal) => {
    console.log(postal.sort());
    if (err) return console.log(err);
    res.send(postal.sort());
    console.log("Colonias entrodasa por: " + req.params.munName);
    })
};

//10. Get Colonia por nombre exacto Municipio
exports.inqColBySameMnpio = (req, res) => {
    Postal.find({D_mnpio:req.params.munName}, {D_mnpio:1,d_asenta:1, _id:0}, (err, postal) => {
    console.log(postal.sort());
    if (err) return console.log(err);
    res.send(postal.sort());
    console.log("Colonias encontradas por municipio: "+req.params.munName);
    })
};

//11. Get Colonia por CP
exports.inqColByCP = (req, res) => {
    Postal.find({d_CP:req.params.codigo}, {d_CP:1,d_asenta:1, _id:0}, (err, postal) => {
    console.log(postal.sort());
    if (err) return console.log(err);
    res.send(postal.sort());
    console.log("Colonias encontradas por CP: "+req.params.codigo);
    })
};