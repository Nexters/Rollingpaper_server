module.exports = (sequelize, Sequelize) => {
    return sequelize.define('category', {
        // id
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // 카테고리명
        name: {
            type: Sequelize.STRING,
            allowNull: true
        },        
    }, {
        // // 컬럼을 네이밍할 때, _를 사용해서 작명한다.
        // // (ex: createdAt -> created_at)
        underscored: true,

        // 한글 지원
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    })
};
