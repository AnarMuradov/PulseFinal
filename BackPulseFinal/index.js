import express from 'express'
import mongoose, { Schema } from 'mongoose'
import cors from 'cors'
const app = express()
const port = 3000
app.use(express.json())
app.use(cors())

const foodSchema = new Schema({
name:String,
description:String,
price:Number
});

const foodModel = mongoose.model('Food', foodSchema);


app.get('/',async (req, res) => {
    const foods = await foodModel.find()
  res.send(foods)
})

app.get('/:id',async (req, res) => {
    const {id} =req.params
    const foods = await foodModel.findById(id)
    res.send(foods)
  })
  
  app.post('/',async(req, res) => {
    const {name,description,price} =req.body
    const newFoods = new foodModel({name,description,price})
    await newFoods.save()
    res.send(newFoods)
  })
  
  app.put('/:id',async (req, res) => {
    const {id} =req.params
    const {name,description,price} =req.body
    const foods = await foodModel.findByIdAndUpdate(id,{name,description,price})
    res.send(foods)
  })
  
  app.delete('/:id',async (req, res) => {
    const {id} =req.params
    const foods = await foodModel.findByIdAndDelete(id)
    res.send('Got a DELETE request at /user')
  })

  mongoose.connect('mongodb+srv://anar:anar@cluster0.aeurkzy.mongodb.net/')
  .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})