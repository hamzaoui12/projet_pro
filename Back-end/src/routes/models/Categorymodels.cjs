const { Model } = require("objection")
const ImageModel = require("./image.model")

class ProductModel extends Model {
  static get tableName() {
    return "Category"
  }

  static get relationMappings() {
    return {
      Images: {
        relation: Model.BelongsToOneRelation,
        modelClass: ImageModel,
        join: {
          from: "category.id_picture",
          to: "picture.id",
        },
      },
    }
  }
}

module.exports = ProductModel
