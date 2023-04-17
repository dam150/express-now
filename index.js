var express = require('express');
var app = express();
var moment = require('moment');

app.set('view engine', 'ejs');

const checkWorkingHours = (req, res, next) => {
const dayOfWeek = moment().day();
const hour = moment().hour();
  
    if (dayOfWeek === 0 || dayOfWeek === 6 || hour < 9 || hour >= 17) {
      res.status(403).send('The website is only available during working hours (Monday to Friday, from 9 to 17).');
    } else {
      next();
    }
  };
  

app.get('/', checkWorkingHours, (req, res)=>{
    res.render('pages/home');s
});

app.get('/service', checkWorkingHours, (req, res)=>{
    res.render('pages/service');
});

app.get('/contact', checkWorkingHours, (req, res)=>{
    res.render('pages/contact');
});

// app.use((req, res, next) => {
//     var now = new Date();
//     var dayOfWeek = now.getDay();
//     var hourOfDay = now.getHours();
//     if (dayOfWeek > 0 && dayOfWeek < 6 && hourOfDay >= 9 && hourOfDay <= 17) {
//       // The web application is available during working hours
//       next();
//     } else {
//       // The web application is not available outside working hours
//       res.send('Sorry, the web application is only available during working hours (Monday to Friday, from 9 to 17).');
//     }
//   });



app.listen(4000);
