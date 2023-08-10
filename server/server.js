const path = require('path');
const envPath = path.resolve(__dirname, '.env');
require('dotenv').config({ path: envPath });
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT;
const uri = process.env.URI;
const { Schema, model } = mongoose; 

const ratingSchema = new Schema({
    note: String
})

const Rating = model('Rating', ratingSchema); 

app.use(express.json()); 

app.get('/', (req,res) => {
    res.send('Hello World')
})

app.get('/ratings', async (req, res) => {
    try {
        const allRatings = await Rating.find(); 
        res.json(allRatings); 
    }
    catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
})

app.get('/rating/:id', async (req,res) => {
    try {
        const {id} = req.params; 
        const rating = await Rating.findById(id);
        if (!rating) {
            res.status(404).json({
                message : 'Note not found'
            })
        }
        res.status(200).json(rating)
    }
    catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
})

app.post('/rating', async (req,res) => {
    try {
        const { note } = req.body; 
        const newRating = new Rating({ note }); 
        const saveRating = await newRating.save(); 
        res.status(201).json(saveRating); 
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

app.put('/rating/:id', async (req, res) => {
    try {
        const { id } = req.params; 
        const { note } = req.body; 
        const updatedRating = await Rating.findByIdAndUpdate(id, { note: note }, {new: true}); 
        if (!updatedRating) {
            return res.status(404).json({
                message: 'Note not found'
            })
        }
        res.json(updatedRating); 
    }  
    catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
})

app.delete('/rating/:id', async (req,res) => {
    try{
        const {id} = req.params; 
        const deleteRating = await Rating.findByIdAndDelete(id); 
        if(!deleteRating) {
            return res.status(404).json({message: 'Note not found'})
        }
        res.json({message: 'Note deleted succesfully'}); 
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        }); 
    }
}); 

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', () => {
    console.log('Connected to mongodb Atlas');
});

module.exports = Rating; 