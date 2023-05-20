const BaseModel = require("./BaseModel.cjs")
const UserModel = require("./UserModel.cjs")


class BankCardModel extends BaseModel {
  static tableName = "bankCards"

  static relationMappings() {
    return {
      user : {
      relation: BaseModel.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: "bankCards.user_id",
          to: "users.id"
      }
      },
    }
  }
}

module.exports = BankCardModel