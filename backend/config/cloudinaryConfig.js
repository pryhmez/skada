const cloudinary = require('cloudinary');



cloudinary.config({

    cloud_name: 'sentinelprime',
    api_key: '845777768815812',
    api_secret: 'DN9nLI44-oNS66Vbrh-aYGuRiH4'

});

exports.uploads = (file) => {

    return new Promise(resolve => {

        cloudinary.uploader.upload(file, (result) => {
            resolve({ url: result.url, id: result.public_id })
        },
            { resource_type: "auto" })
    })
}