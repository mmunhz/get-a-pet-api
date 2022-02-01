const fs = require('fs')
const path = require('path')

const deleteImage = (filename, dataEntity) => {
    const ImagePath = path.
        join(__dirname, "..", "public", "images", dataEntity, filename)
    fs.unlink(ImagePath, (error) => {
        if (error) {
            throw error
        }
        console.log(`${filename} was deleted`)
    })
}

module.exports = deleteImage