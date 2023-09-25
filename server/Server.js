const express = require('express');
const mongoose = require('mongoose')
const app = express();
const uri = "mongodb+srv://usmantpr:test123@cluster0.ldzfaxt.mongodb.net/?retryWrites=true&w=majority";

app.listen(5000,async()=>{
        console.log('connected at 5000')
   
})
mongoose.connect(uri, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	
});
const connection = mongoose.connection;

connection
	.once('open', () => {
		console.log('mongoDB database connection established');
	})
	.on('error', (err) => {
		console.log('Error: ', err);
	});
