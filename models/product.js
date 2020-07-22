module.exports = (sequelize, Sequelize) => {
    return sequelize.define('product', {
        // id
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // 상품명 (쿠폰명)
        name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        // 상품 세부 설명 (쿠폰 설명)
        detail: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: ''
        },
        // 사장님의 한마디
        store_host_saying: {
            type: Sequelize.STRING,
            allowNull: true
        },
        // 유효 최소 기간
        validity_min: {
            type: Sequelize.DATE,
            allowNull: true
        },
        // 유효 최대 기간
        validity_max: {
            type: Sequelize.DATE,
            allowNull: true
        },
        // 원가
        price: {
            type: Sequelize.INTEGER,
            allowNull: true
        }, 
        // 할인 정보(ex: '30% 할인', '1만원 할인' 등등)
        sale_info: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: ''
        },
        // 할인된 가격
        saled_price: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        // 남은 상품 수 (재고량)
        stock_count: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        // 초기 재고량 설정값
        set_stock_count: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        // 게시 최소 기간
        posting_time_min: {
            type: Sequelize.DATE, 
            allowNull: true
        },
        // 게시 최대 기간
        posting_time_max: {
            type: Sequelize.DATE,
            allowNull: true
        },
        // 승인 여부 
        is_approved: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        },
        // 승인 상태 (waiting / completed / reject)
        approved_status:{
            type: Sequelize.STRING,
            allowNull: true
        },
        // 상품 종류 (normal / short )
        type:{
            type: Sequelize.STRING,
            allowNull: true
        },
    }, {
        // 컬럼을 네이밍할 때, _를 사용해서 작명한다.
        // (ex: createdAt -> created_at)
        underscored: true,

        // updatedAt열, createdAt열 자동 추가
        timestamps: true,

        /* 
        로우를 삭제하는 시퀄라이즈 명령을 내렸을 때, 
        로우를 제거하는 대신 deletedAt에 제거된 날짜를 입력한다.
        (주의 : timestamps가 true여야만 설정할 수 있다.)
        */
        paranoid: true,

        // 한글 지원
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    })
};