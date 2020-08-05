var express = require('express');
var router = express.Router();
const response = require('../../../module/response');
const resMessage = require('../../../module/response/message');
const {
    sequelize,
    Sequelize: {
        Op
    },
    Rollingpaper,
    RollingpaperContent
} = require('../../../models');
const upload = require('../../../config/multer');

// 특정 롤링페이퍼 조회 (+롤링 페이퍼 내에 있는 컨텐츠들도 조회)
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const rollingPaper = await Rollingpaper.findOne({
            where: {
                id
            }
        });

        if (!rollingPaper || !id) {
            res.status(200).json(response(resMessage.WRONG_PARAMS));
            return;
        }

        const contents = await RollingpaperContent.findAll({
            where: {
                rollingpaperId: id
            }
        });

        res.status(200).json(response(resMessage.READ_SUCCESS, contents));
    } catch (err) {
        console.log(err);
        res.status(200).json(response(resMessage.INTERNAL_SERVER_ERROR));
    }
})

// 롤링페이퍼 생성
router.post('/', async (req, res) => {
    try {
        // 트랜잭션 처리
        var transaction = await sequelize.transaction();

        const {
            receiver,
            password
        } = req.body;

        // receiver나 password가 undefined일 경우 에러 띄워주기
        if (!receiver || !password) {
            return res.status(200).json(response(resMessage.WRONG_VALUE));
        }

        // 이름 + pw으로 중복 처리 
        const user = await Rollingpaper.findOne({
            where: {
                receiver,
                password
            }
        });

        if (user) {
            await transaction.rollback();
            return res.status(200).json(response(resMessage.ALREADY_USER));
        }

        await Rollingpaper.create({
            receiver,
            password
        });
        await transaction.commit();

        res.status(200).json(response(resMessage.SAVE_SUCCESS));
    } catch (err) {
        console.log(err);
        transaction.rollback();
        res.status(200).json(response(resMessage.INTERNAL_SERVER_ERROR));
    }
})

// 롤링페이퍼 내의 컨텐츠 생성
router.post('/:id/content', upload.single("image"), async (req, res) => {
    try {
        // 트랜잭션 처리
        var transaction = await sequelize.transaction();

        const id = req.params.id;
        const url = req.file.location;

        const rollingpaper = await Rollingpaper.findOne({
            where: {
                id: id
            }
        });

        if (rollingpaper === null) {
            transaction.rollback();
            return res.status(200).json(response(resMessage.WRONG_PARAMS));
        }

        await RollingpaperContent.build({
            url: url,
            rollingpaperId: id
        }).save();

        await transaction.commit();
        res.status(200).json(response(resMessage.SAVE_SUCCESS));
    } catch (err) {
        console.log(err);
        transaction.rollback();
        res.status(200).json(response(resMessage.INTERNAL_SERVER_ERROR));
    }
});

module.exports = router;
