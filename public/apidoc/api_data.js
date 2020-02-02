define({ "api": [
  {
    "type": "get",
    "url": "/api/goods",
    "title": "",
    "description": "<p>某电商网站商品列表数据的接口</p>",
    "name": "商品列表数据",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "a",
            "defaultValue": "hello",
            "description": ""
          }
        ]
      }
    },
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
    "group": "d:\\Express\\day03\\myapp\\api\\goods.js",
    "groupTitle": "d:\\Express\\day03\\myapp\\api\\goods.js"
  }
] });
