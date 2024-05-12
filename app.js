const express = require('express')
require('./src/db/conn')
const MensRanking = require('./src/models/mens')

const app = express()

app.use(express.json())

const port = process.env.PORT || 3001

app.post('/means', async (req, res) => {
    try{
        const addingMeansRecord = new MensRanking(req.body)
        console.log(req.body)
        const insertMens = await addingMeansRecord.save();
        res.status(201).send(insertMens)
    } catch(e){
        res.status(400).send(e)
    }
})

app.get('/means', async (req, res) => {
    try{
        // const _id = req.params.id;
        const getMens = await MensRanking.find({})
        res.status(201).send(getMens)
    } catch(e){
        res.status(400).send(e)
    }
})

app.patch('/means', async (req, res) => {
    try{
        // const _id = req.params.id;
        const getMens = await MensRanking.find({})
        res.status(201).send(getMens)
    } catch(e){
        res.status(400).send(e)
    }
})

app.listen(3001, () => {
    console.log(`server is live on port ${port}`)
})