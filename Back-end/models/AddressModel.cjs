const BaseModel = require("./BaseModel.cjs")

class AdressModel extends BaseModel {
  static tableName = "address"

    static get relationMappings() {
    const UserModel = require("./UserModel.cjs")

    return {
      users: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: UserModel,
        join: {
          from: "address.id",
          through: {
            from: "userAddress.address_id",
            to: "userAddress.user_id"
          },
          to: "users.id"
        }
      }
    }
  }
}

module.exports = AdressModel