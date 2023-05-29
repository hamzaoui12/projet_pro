const BaseModel = require("./BaseModel.cjs")
const ProductModel = require("./ProductModel.cjs")
const ImageModel = require("./ImageModel.cjs")

class CategoryModel extends BaseModel {
  static tableName = "categories"
  static relationMappings() {
    return {
      products: {
        modelClass: ProductModel,
        relation: BaseModel.HasManyRelation,
        join: {
          from: "categories.id",
          to: "products.category_id",
        },
      },
      images: {
        modelClass: ImageModel,
        relation: BaseModel.HasManyRelation,
        join: {
          from: "categories.id",
          to: "images.category_id",
        },
      },
    }
  }
}

module.exports = CategoryModel
