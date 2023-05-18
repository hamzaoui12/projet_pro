const BaseModel = require("./BaseModel.cjs")
const ProductModel = require("./ProductModel.cjs")

class CategoryModel extends BaseModel {
  static tableName = "categories"

  static relationMappings() {
  return {
    products: {
      modelClass: ProductModel,
      relation: BaseModel.HasManyRelation,
      join: {
        from: "categories.id",
        to: "products.category_id"
      }
    }
    }
  }
}

module.exports = CategoryModel