const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://davialveskd4306:123@cluster0.rrztr0y.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
