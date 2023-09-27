const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute'); // Remove the ".js" extension
const cors = require('cors')
const app = express();
// const uri = "mongodb+srv://usmantpr:test123@cluster0.ldzfaxt.mongodb.net/?retryWrites=true&w=majority";
const a='mongodb://usmantpr:test123@ac-hfotgaj-shard-00-00.ldzfaxt.mongodb.net:27017,ac-hfotgaj-shard-00-01.ldzfaxt.mongodb.net:27017,ac-hfotgaj-shard-00-02.ldzfaxt.mongodb.net:27017/?ssl=true&replicaSet=atlas-3cld8z-shard-0&authSource=admin&retryWrites=true&w=majority'
app.use(express.json())
app.use(cors())
app.use('/auth',userRoute);
app.listen(5000,async()=>{
        console.log('connected at 5000')
})
mongoose.connect(a);
const connection = mongoose.connection;

connection
	.once('open', () => {
		console.log('mongoDB database connection established');
	})
	.on('error', (err) => {
		console.log('Error: ', err.message);
	});
	
