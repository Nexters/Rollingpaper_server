module.exports = (sequelize, Sequelize) => {
    return sequelize.define('store', {
        // id
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // 가게 이름
        name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        // 주소
        address: {
            type: Sequelize.STRING,
            allowNull: true
        },
        // 전화번호 (ex: 01011112222)
        phone: {
            type:Sequelize.STRING,
            allowNull: true,
        },
        // 결제 승인 코드
        pin_code: {
            type: Sequelize.STRING,
            allowNull: true
        },
        // 결제 승인 코드를 암호화 시킨 salt값
        salt: {
            type: Sequelize.STRING,
            allowNull: true
        },
        // 가게 위치 사진 (약도 이미지)
        map_image: {
            type: Sequelize.STRING,
            allowNull: true
        },
        // 위도
        latitude: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        // 경도
        longitude: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        // 사업자 등록증 이미지
        business_license_img:{
            type: Sequelize.STRING,
            allowNull: true
        },
        // 정산 계좌 이미지
        account_img:{
            type: Sequelize.STRING,
            allowNull: true
        },
        // 사업자 등록증 번호 
        business_license_number:{
            type: Sequelize.STRING,
            allowNull: true
        },
        // 승인 상태 
        
        approved_status:{
            type: Sequelize.STRING,
            allowNull: true
        },
        // 영업시간
        business_hours:{
            type: Sequelize.STRING(1500),
            allowNull: true
        },

    }, {
        // // 컬럼을 네이밍할 때, _를 사용해서 작명한다.
        // // (ex: createdAt -> created_at)
        underscored: true,

        // // updatedAt열, createdAt열 자동 추가
        timestamps: true,

        // /* 
        // 로우를 삭제하는 시퀄라이즈 명령을 내렸을 때, 
        // 로우를 제거하는 대신 deletedAt에 제거된 날짜를 입력한다.
        // (주의 : timestamps가 true여야만 설정할 수 있다.)
        // */
        paranoid: true,

        // 한글 지원
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    })
};
