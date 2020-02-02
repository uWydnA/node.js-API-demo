define({ "api": [
  {
    "type": "get",
    "url": "/api/goods",
    "title": "接口说明",
    "description": "<p>接口描述</p>",
    "name": "接口名称",
    "group": "所属分组",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>请求成功后的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "// 返回数据示例\n{ code:\"200\", msg:\"商品列表数据\", length:数据长度, data:data }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/goods"
      }
    ],
    "version": "1.0.0",
    "filename": "api/goods.js",
    "groupTitle": "所属分组"
  }
] });
