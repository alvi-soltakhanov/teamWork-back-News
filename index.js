const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(require('./routes/categories.route'))
app.use(require('./routes/comments.route'))
app.use(require('./routes/news.route'))

mongoose.connect('mongodb+srv://baker:bake@cluster0.u1vht.mongodb.net/commandWorkNews?retryWrites=true&w=majority')
        .then(() => {
            console.log('Успешно соединились с сервером MongoDB');
            app.listen(4000, () => {
                console.log('Server has been started');
            })
        })
        .catch(() => {
            console.log('Ошибка при соединении с сервером MongoDB');
        })