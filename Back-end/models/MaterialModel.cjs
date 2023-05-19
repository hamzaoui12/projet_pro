const BaseModel = require("./BaseModel.cjs")

class MaterialModel extends BaseModel {
  static tableName = "materials"

  static get relationMappings() {
    const ProductModel = require("./ProductModel.cjs")

    return {
      products: {

        relation: BaseModel.ManyToManyRelation,
        modelClass: ProductModel,
        join: {
          from: "materials.id",
          through: {
            from: "productmaterials.material_id",
            to: "productmaterials.product_id"
          },
          to: "products.id"
        }
      }
    }
  }
}

module.exports = MaterialModel