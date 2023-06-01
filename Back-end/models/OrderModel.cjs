const BaseModel = require("./BaseModel.cjs")

class OrderModel extends BaseModel {
  static tableName = "orders"

  static relationMappings() {
    const UserModel = require("./UserModel.cjs")
    const ProductModel = require("./ProductModel.cjs")

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
          from : "users.id",
          through: {
            from: "orderProducts.order_id",
            to: "orderProducts.product_id"
          },
          to: "products.id"
        }
      }
    }
  }
}

module.exports = OrderModel