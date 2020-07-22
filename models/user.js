module.exports = (sequelize, Sequelize) => {
    return sequelize.define('user', {
        // id
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // 실명
        name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        // 이메일
        email: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        // 휴대폰 번호
        phone: {
            type: Sequelize.STRING,
            allowNull: true
        },
        // 생년월일 (ex : 19941011)
        birth: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        // 성별 (여자 : woman, 남자 : man)
        gender: {
            type: Sequelize.STRING,
            allowNull: true
        }, 
        // 비밀번호
        password: {
            type: Sequelize.STRING,
            allowNull: true
        },
        // 비밀번호를 암호화 시킨 salt값
        salt: {
            type: Sequelize.STRING,
            allowNull: true
        },
        // 리프레시 토큰
        refresh_token: {
            type: Sequelize.STRING(1500),
            allowNull: true
        },
        // 역할 (일반 사용자 : normal, 업주 : storekeeper)
        role: {
            type: Sequelize.STRING,
            defaultValue: 'normal',
            allowNull: true
        },
        // sns에서 발급해주는 id
        sns_id: {
            type: Sequelize.STRING,
            allowNull: true
        },
        // 로그인을 하는 곳 (local : DALY 로그인 / kakao : 카카오톡 로그인)
        provider: {
            type: Sequelize.STRING,
            defaultValue: 'local',
            allowNull: true
        },
        // 프로필 사진
        profile_img: {
            type: Sequelize.STRING,
            allowNull: true
        },
        // 승인 상태 
        approved_status: {
            type: Sequelize.STRING,
            allowNull: true
        },
        // 경험치 
        exp:{
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        // 칭호 획득 개수
        badge_count: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        // 대표칭호
        rep_badge: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        // 레벨
        level: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0
        }
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
