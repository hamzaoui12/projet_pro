const { Model } = require("objection");
const ProductModel = require("./ProductModel");

class PictureModel extends Model {
  static tableName = "images";

  static get relationMappings() {
    return {
      //une categorie a plusieur produit n* -> 1
      products: {
        relation: Model.BelongsToMany,
        modelClass: CategoryModel,
        join: {
          from: "products.id",
          to: "images.product_id",
        },
      },
    };
  }
}

module.exports = PictureModel;