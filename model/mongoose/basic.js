const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Name = mongoose.model('Name', { name: String });

const Name = new Cat({ name: 'Manojkumar C' });
kitty.save().then(() => console.log('meow'));