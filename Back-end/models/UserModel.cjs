const BaseModel = require("./BaseModel.cjs")

class UserModel extends BaseModel {
  static tableName = "users"

  static get relationMappings() {
    const OrderModel = require("./OrderModel.cjs")
    const AddressModel = require("./AddressModel.cjs")
    const BankCardModel = require("./BankCardModel.cjs")

    return {
      address: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: AddressModel,
        join: {
          from: "users.id",
          through: {
            from: "userAddress.user_id",
            to: "userAddress.address_id",
          },
          to: "address.id",
        },
      },
      bankCards: {
        modelClass: BankCardModel,
        relation: BaseModel.HasManyRelation,
        join: {
          from: "users.id",
          to: "bankCards.user_id",
        },
      },
      orders: {
      modelClass: OrderModel,
      relation: BaseModel.HasManyRelation,
      join: {
        from: "users.id",
        to: "orders.user_id"
      }
    },
    }
  }
}

module.exports = UserModel
