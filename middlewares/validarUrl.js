const {URL} = require('url')

const urlValidar=(req, res, next)=>{

    try {
        const {origin} = req.body;
        const urlFrontend = new URL(origin)
        if (urlFrontend.origin !== 'null') {
            return next();
        } else {
            throw new Error('Url no valida')    
        }
    } catch (error) {
        return res.send('Url no valida')
    }

}

module.exports = urlValidar