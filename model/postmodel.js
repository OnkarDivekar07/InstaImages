const Sequelize = require('sequelize')
const sequelize = require('../util/database');

const comment=require('./commentmodel')

const posts = sequelize.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    img: {
        type: Sequelize.STRING(200),
        allowNull: false
    }

})

module.exports = posts;