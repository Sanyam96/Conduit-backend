const express = require('express')
const cors = require('cors')

const {
    db
} = require('./api/db/models/index.js')
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({
    extended: true
}))

app.use('/api', require('./api/index.js'))

db.sync()
    .then(() => {
        console.log('Database Synced')
        app.listen(9999, () => {
            console.log('Server started http://localhost:9999')
        })
    })
    .catch(console.error)