   /**
        * @api {get} /api/goods 接口说明
        * @apiDescription 接口描述
        * @apiName 接口名称
        * @apiGroup 所属分组
        * @apiSuccess {json} data 请求成功后的数据
        * @apiSuccessExample {json} Success-Response:
        * // 返回数据示例
        * { code:"200", msg:"商品列表数据", length:数据长度, data:data }
        * @apiSampleRequest http://localhost:3000/api/goods
        * @apiVersion 1.0.0
        */

var express = require("express");
var router = express.Router();

const coll = require("../mongo/goods");
const sql = require("../mongo/sql");
router.get('/', function (req, res, next) {
    sql.find({
        colName: coll
    }).then(data=>{
        res.send( { code:"200", msg:"商品列表数据", length:data.length, data:data });
    },err=>{
        res.send({ code:"444", msg:"NOT DATA" })
    })
})
module.exports = router;