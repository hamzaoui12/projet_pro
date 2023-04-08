const { Model } = require('objection');

class Material extends Model {
  static get tableName() {
    return 'materials';
  }

  static get relationMappings() {
    const Product = require('./ProductModels');
    return {
      products: {
        relation: Model.ManyToManyRelation,
        modelClass: Product,
        join: {
          from: 'materials.id',
          through: {
            from: 'product_materials.material_id',
            to: 'product_materials.product_id'
          },
          to: 'products.id'
        }
      }
    };
  }
}

module.exports = Material;