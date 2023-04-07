exports.up = async (knex) => {
  await knex.schema
    .createTable("categories", (table) => {
      table.increments("id")
      table.text("name").notNullable()
      table.integer("welcome_order")
    })
    .createTable("products", (table) => {
      table.increments("id")
      table.text("name").notNullable()
      table.text("description")
      table.integer("highlander")
      table.integer("welcome_order")
      table.integer("stock")
      table.integer("priority")
      table.integer("price").notNullable()
      table.integer("category_id").unsigned().notNullable()
      table
        .foreign("category_id")
        .references("id")
        .inTable("categories")
        .onDelete("")
    })
    .createTable("images", (table) => {
      table.increments("id")
      table.specificType("picture", "blob").notNullable()
      table.integer("product_id").unsigned().notNullable()
      table
        .foreign("product_id")
        .references("id")
        .inTable("products")
        .onDelete("")
      table.integer("category_id").unsigned().notNullable()
      table
        .foreign("category_id")
        .references("id")
        .inTable("categories")
        .onDelete("")
    })
    .createTable("materials", (table) => {
      table.increments("id")
      table.text("name").notNullable()
    })
    .createTable("users", (table) => {
      table.increments("id")
      table.text("firstName").notNullable()
      table.text("lastName").notNullable()
      table.text("passwordHash")
      table.text("passwordSalt")
      table.string("mail").unique().notNullable()
      table.text("phoneNumber")
    })
    .createTable("bankCards", (table) => {
      table.increments("id")
      table.integer("expirationMonth").notNullable()
      table.integer("expirationYear").notNullable()
      table.text("cardValidationCodeHash")
      table.text("cardValidationCodeSalt")
      table.text("cardNumberHash").notNullable()
      table.text("cardNumberSalt").notNullable()
      table.integer("user_id").unsigned().notNullable()
      table
        .foreign("user_id")
        .references("id")
        .inTable("users")
        .onDelete("")
    })
    .createTable("address", (table) => {
      table.increments("id")
      table.text("country").notNullable()
      table.text("city").notNullable()
      table.text("region")
      table.integer("postalCode")
    })
    .createTable("productmaterials", (table) => {
      table.increments("id")
      table.integer("product_id").unsigned().notNullable()
      table
        .foreign("product_id")
        .references("id")
        .inTable("products")
        .onDelete("")
      table.integer("material_id").unsigned().notNullable()
      table
        .foreign("material_id")
        .references("id")
        .inTable("materials")
        .onDelete("")
    })
  .createTable("userProducts", (table) => {
      table.increments("id")
      table.integer("user_id").unsigned().notNullable()
      table
        .foreign("user_id")
        .references("id")
        .inTable("users")
        .onDelete("")
      table.integer("product_id").unsigned().notNullable()
      table
        .foreign("product_id")
        .references("id")
        .inTable("products")
        .onDelete("")
  })
  .createTable("userAddress", (table) => {
      table.increments("id")
      table.integer("user_id").unsigned().notNullable()
      table
        .foreign("user_id")
        .references("id")
        .inTable("users")
        .onDelete("")
      table.integer("address_id").unsigned().notNullable()
      table
        .foreign("address_id")
        .references("id")
        .inTable("address")
        .onDelete("")
    })
}

exports.down = async (knex) => {
  await knex.schema
    .dropTable("userAddress")
    .dropTable("userProducts")
    .dropTable("productMaterials")
    .dropTable("bankCards")
    .dropTable("images")
    .dropTable("products")
    .dropTable("address")
    .dropTable("categories")
    .dropTable("materials")
    .dropTable("users")
}