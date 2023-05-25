const BaseModel = require("./BaseModel.cjs");
const UserModel = require("./UserModel.cjs");
const ProductModel = require("./ProductModel.cjs");

class OrdersModel extends BaseModel {
  static tableName = "orders";

  static relationMappings() {
    return {
      user: {
        modelClass: UserModel,
        relation: BaseModel.BelongsToOneRelation,
        join: {
          from: "orders.user_id",
          to: "users.id"
        }
      },
      products: {
        modelClass: ProductModel,
        relation: BaseModel.ManyToManyRelation,
        join: {
          from: "orders.id",
          through: {
            from: "order_products.order_id",
            to: "order_products.product_id"
          },
          to: "products.id"
        }
      }
    };
  }
}

module.exports = OrdersModel;
