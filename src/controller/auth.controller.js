const signup = async (req, res, next) => {
    try {

        const data = req.body;
        console.log(data)
        res.send(`Data: ${data}`)

    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    signup,
}