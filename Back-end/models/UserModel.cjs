const BaseModel = require("./BaseModel.cjs")

class UserModel extends BaseModel {
  static tableName = "users"
}

module.exports = UserModel