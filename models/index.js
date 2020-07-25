const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/sequelize/dbConfig.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// 테이블
db.Rollingpaper = require('./rollingpaper')(sequelize, Sequelize);
db.RollingpaperContent = require('./rollingpaperContent')(sequelize, Sequelize);


// 테이블간 관계 (Association)
// 가게 : 상품 = 1 : N
db.Rollingpaper.hasMany(db.RollingpaperContent);
db.RollingpaperContent.belongsTo(db.Rollingpaper);

module.exports = db;