const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/sequelize/dbConfig.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// 테이블
db.User = require('./user')(sequelize, Sequelize);
db.Marketing = require('./marketing')(sequelize, Sequelize);
db.Store = require('./store')(sequelize, Sequelize);
db.Product = require('./product')(sequelize, Sequelize);
db.Category = require('./category')(sequelize, Sequelize);


// 테이블간 관계 (Association)
// 유저 : 마케팅 수신 동의 여부 = 1 : 1
db.User.hasOne(db.Marketing); // User가 Marketing에 대한 정보를 가진다. 
db.Marketing.belongsTo(db.User); // Marketing에 대한 정보는 User에 속해있다.

// 가게 : 상품 = 1 : N
db.Store.hasMany(db.Product);
db.Product.belongsTo(db.Store);

// 상품 : 카테고리 = M : N
db.Product.belongsToMany(db.Category, { through: 'category_product' });
db.Category.belongsToMany(db.Product, { through: 'category_product' });

module.exports = db;