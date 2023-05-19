const { Model } = require("objection")
const ImageModel = require("./image.model")

class CategoryModel extends BaseModel {
  static get tableName() {
    return "Category"
  }

  static get relationMappings() {
    return {
      images: {
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

module.exports = CategoryModel
