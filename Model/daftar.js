const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const daftarSchema = new Schema({

    namapenumpang: {
        type : String
    },

    tujuan: {
        type : String
    },

    tanggalkeberangkatan:{
        type : String
    },

    typemobil: {
        type : String
    }
})

module.exports = mongoose.model('daftar', daftarSchema)