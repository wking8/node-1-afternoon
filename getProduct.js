const products = require('./products.json')

const getProduct = (req, res) => {
    const searchId = products.find(element => element.id === parseInt(req.params.id))
    if(!searchId) {
        return res.status(500).send('I pity the foo with no item')
    }
    res.status(200).send(searchId)
}

module.exports = getProduct