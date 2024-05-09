const express = require('express')
const app = express()

const port = process.env.PORT || 3001

app.get('/', async (req, res) => {
    console.log('working')
})

app.listen(3001, () => {
    console.log(`server is live on port ${port}`)
})