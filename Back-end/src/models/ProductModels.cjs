const { Model } = require("objection");
const UserModel = require("./user.model");
const CategoryModel = require("./category.model");

class ProductModel extends Model {
  static tableName = "products";

  static get relationMappings() {
    return {
      //une categorie a plusieur produit n* -> 1
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: CategoryModel,
        join: {
          from: "products.category_id",
          to: "categories.id",
        },
      },
    };
  }
}

module.exports = ProductModel;
