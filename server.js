const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine','handlebars');

app.use(express.static('public'));

app.get('/', (req,res) => {
  res.render('home',{
    cssFile: '/css/index.css'
  });
});

app.get('/test', (req,res) => {
  res.render('test',{
    isTestPage: true,
    cssFile: '/css/style_test.css'
  });
});

app.get('/register', (req,res) => {
  res.render('register',{
    isMapPage: true,
    cssFile: '/css/register.css'
  });
});

app.get('/contact', (req,res) => {
  res.render('contact',{
    cssFile: '/css/contact_style.css'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Web server is established');
});

