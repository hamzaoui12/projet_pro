const { Model } = require("objection");
const UserModel = require("./user.model");
const CategoryModel = require("./category.model");

class ProductModel extends Model {
  static get tableName() {
    return "products";
  }

  static get relationMappings() {
    return {
      creator: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: "products.created_by",
          to: "users.id",
        },
      },
      lastModifyBy: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: "products.last_modified_by",
          to: "users.id",
        },
      },
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
