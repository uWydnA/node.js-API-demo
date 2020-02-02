define({ "api": [
  {
    "type": "get",
    "url": "/api/goods",
    "title": "",
    "description": "<p>某电商网站商品列表数据接口及接口文档</p>",
    "name": "商品列表数据",
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
          "content": "// 返回数据示例\n{ code:\"100\", msg:\"商品列表数据\", length:数据长度, data:data }",
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
    "group": "d:\\Git\\MyGitHub\\node.js-API-demo\\api\\goods.js",
    "groupTitle": "d:\\Git\\MyGitHub\\node.js-API-demo\\api\\goods.js"
  }
] });
