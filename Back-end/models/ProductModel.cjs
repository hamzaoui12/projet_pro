const BaseModel = require("./BaseModel.cjs")

class ProductModel extends BaseModel {
  static tableName = "products"
}

module.exports = ProductModel