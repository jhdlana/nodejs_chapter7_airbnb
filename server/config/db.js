const mongoose = require('mongoose')

const connectWithDB = () => {
    mongoose.set('strictQuery', false)
    mongoose
    .connect(process.env.DB_URL)
    .then(console.log(`DB connection estabished`))
    .catch((err) => {
        console.log(`DB connection error :  ${err}`)
        process.exit(1)
    })
}

module.exports = connectWithDB