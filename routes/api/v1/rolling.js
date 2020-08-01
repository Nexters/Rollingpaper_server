var express = require('express');
var router = express.Router();
const response = require('../../../module/response');
const resMessage = require('../../../module/response/message');
const { sequelize, Alerting, Sequelize: {Op} } = require('../../../models');

// 특정 롤링페이퍼 조회 (+롤링 페이퍼 내에 있는 컨텐츠들도 조회)
router.get('/:rolling_id', async (req, res) => {
    try {
        // 트랜잭션 처리
        var transaction = await sequelize.transaction();

        // const user_id = req.decoded.id;
        
        // // 이전 알람 가져오기 
        // let alerting_before = await Alerting.findAll({
        //     where: {
        //         [Op.or]: [{userId: null}, {userId: user_id}],
        //         createdAt: {[Op.gte]: moment().subtract(2, 'weeks')}
        //     },
        //     order: [ ['createdAt', 'DESC'] ],
        //     attributes: [ 'title', 'content', 'status', 'createdAt', 'is_read'],
        //     raw: true,
        //     transaction
        // });

        res.status(200).json(response.success(resMessage.READ_SUCCESS, alerting_before));
        await transaction.commit();
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
        
        // const user_id = req.decoded.id;

        // const alerting = await Alerting.update({
        //     is_read: true
        // }, {
        //     where: { userId: user_id }
        // })  

        await transaction.commit();
        res.status(200).json(response.success(resMessage.UPDATE_SUCCESS));
    } catch(err) {
        console.log(err);
        transaction.rollback();
        res.status(200).json(response(resMessage.INTERNAL_SERVER_ERROR));
    }
})

// 롤링페이퍼 내의 컨텐츠 생성
router.post('/:rolling_id/content', async (req, res) => {
    try {
        // 트랜잭션 처리
        var transaction = await sequelize.transaction();
        
        // const user_id = req.decoded.id;

        // const alerting = await Alerting.update({
        //     is_read: true
        // }, {
        //     where: { userId: user_id }
        // })  

        await transaction.commit();
        res.status(200).json(response.success(resMessage.UPDATE_SUCCESS));
    } catch(err) {
        console.log(err);
        transaction.rollback();
        res.status(200).json(response(resMessage.INTERNAL_SERVER_ERROR));
    }
})

module.exports = router;