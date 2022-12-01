import express from "express";
import path from "path"

const app = express();
const __dirname = path.dirname('');

app.set('view engine', 'ejs');
// Будет смотреть файлы сразу в этой папке, которую мы прописали
app.set('views', path.resolve(__dirname, 'ejs'));
// console.log(app.get('views'));

// имеет значение какой последовательностью их передавать: сначала req, потом res!
app.get('/', (req, res) => {
    res.render('index');
});

// req - отвечате за запрос браузера, res - отвечает за ответ
// app.get('/', function(req, res) {
//     // посылаем html код в виде строки, но это не очень круто
//     // res.send('<h1>Hello world</h1>')
//     // будем отправлять сам файл
//     res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
// })

// app.get('/feathers', function(req, res) {
//     res.sendFile(path.resolve(__dirname, 'static', 'feathers.html'));
// })

app.listen(3000, () => {
    console.log('Server has been started on port 3000');
});