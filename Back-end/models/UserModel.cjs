const BaseModel = require("./BaseModel.cjs")

class UserModel extends BaseModel {
  static tableName = "users"

  static get relationMappings() {
    const ProductModel = require("./ProductModel.cjs")
    const AddressModel = require("./AddressModel.cjs")
    const BankCardModel = require("./BankCardModel.cjs")
    
    return {
      products: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: ProductModel,
        join: {
          from: "users.id",
          through: {
            from: "userProducts.user_id",
            to: "userProducts.product_id"
          },
          to: "products.id"
        }
      },
      address : {
        relation: BaseModel.ManyToManyRelation,
        modelClass: AddressModel,
        join: {
          from: "users.id",
          through: {
            from: "userAddress.user_id",
            to: "userAddress.address_id"
          },
          to: "address.id"
        }
      },
      bankCards: {
      modelClass: BankCardModel,
      relation: BaseModel.HasManyRelation,
      join: {
        from: "users.id",
        to: "bankCards.user_id"
      }
    },
    }
  }
}

module.exports = UserModel