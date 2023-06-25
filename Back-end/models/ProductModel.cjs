const BaseModel = require("./BaseModel.cjs")
const CategoryModel = require("./CategoryModel.cjs")
const MaterialModel = require("./MaterialModel.cjs")
const OrderModel = require("./OrderModel.cjs")

class ProductModel extends BaseModel {
  static tableName = "products"

  static relationMappings() {
    const ImageModel = require("./ImageModel.cjs")
    return {
      category: {
      relation: BaseModel.BelongsToOneRelation,
        modelClass: CategoryModel,
        join: {
          from: "products.category_id",
          to: "categories.id"
      }
      },
      images: {
        modelClass: ImageModel,
        relation: BaseModel.HasManyRelation,
      join: {
        from: "products.id",
        to: "images.product_id"
      }
      },
      materials: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: MaterialModel,
        join: {
          from: "products.id",
          through: {
            from: "productmaterials.product_id",
            to: "productmaterials.material_id"
          },
          to: "materials.id"
        }
      },
      orders: {
        modelClass: OrderModel,
        relation: BaseModel.ManyToManyRelation,
        join: {
          from: "products.id",
          through: {
            from: "orderProducts.product_id",
            to: "orderProducts.order_id"
          },
          to: "orders.id"
        }
      }
    }
  }
}

module.exports = ProductModel