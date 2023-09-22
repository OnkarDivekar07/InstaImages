//require  imports for sever
const express = require('express');
const app = express();
const path = require('path')
const sequelize = require('./util/database');

//routes file paths
const postroute = require('./route/postroute');
const commentroute=require('./route/commmentroute');
const rendering=require('./route/getroute');
const commentmodel=require('./model/commentmodel')
const postmodel=require('./model/postmodel')
app.use(express.static(path.join(__dirname, 'view')));
//crud routes
app.use(rendering)
app.use(postroute);
app.use(commentroute);

commentmodel.belongsTo(postmodel)
postmodel.hasMany(commentmodel);
sequelize.sync()
    .then((result) => {

        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    })

