const BaseModel = require("./BaseModel.cjs")
const ProductModel = require("./ProductModel.cjs")
const CategoryModel = require("./CategoryModel.cjs")



class ImageModel extends BaseModel {
  static tableName = "images"

  static relationMappings() {
    return {
      product: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: ProductModel,
        join: {
          from: "images.product_id",
          to: "products.id"
        }
      },
        category: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: CategoryModel,
        join: {
          from: "images.category_id",
          to: "categories.id"
        }
      },
    }
  }
}

module.exports = ImageModel