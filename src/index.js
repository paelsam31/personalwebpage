const express = require('express');
const app = express();
const path = require('path');


    //Configuracion
    app.set('puerto',80);
    app.set('views',path.join(__dirname,'views'));
    app.engine('html', require('ejs').renderFile);
    app.set('view engine','ejs');

    //Rutas
    app.get('/', (req,res) => {
        res.render('index.html', {titulo: 'Elkin Panameño'});
    });
    app.get('/articulos', (req,res) => {
        res.render('articulos.html',{titulo : 'Artículos'});
    });
    app.get('/contacto',(req,res) => {
        res.render('contacto.html',{titulo: 'Contáctame'})
    });
    app.get('/redes_sociales',(req,res) => {
        res.render('redes_sociales.html',{titulo: 'Mis Redes Sociales'});
    });
    app.get('/proximamente',(req,res) => {
        res.render('proximamente.html',{titulo: 'Proximamente'});
    });
    app.get('/confirmacion',(req,res) => {
        res.render('confirmacion.html',{titulo: 'Elkin Panameño'});
    });


    

    //archivosEstaticos
    app.use(express.static(path.join(__dirname, 'public')));

    //No olvidarme npm run dev para guardar facilmente
    app.listen(process.env.PORT || app.get('puerto'), ()=>{
        console.log('Servidor Web Trabajando en el puerto', app.get('puerto'));
    });