exports.up = async (knex) => {
  await knex.schema
    .createTable("categories", (table) => {
      table.increments("id")
      table.text("name").notNullable()
      table.integer("welcome_order")
      table.text("image").notNullable()
      table.text("description")
    })

    .createTable("contact", (table) => {
      table.increments("id").primary()
      table.string("mail").notNullable()
      table.string("subject").notNullable()
      table.text("message").notNullable()
    })

    .createTable("products", (table) => {
      table.increments("id")
      table.text("name").notNullable()
      table.text("description")
      table.integer("highlander")
      table.integer("welcome_order")
      table.integer("stock")
      table.text("image").notNullable()
      table.integer("priority")
      table.float("price").notNullable()
      table.integer("category_id").unsigned().notNullable()
      table
        .foreign("category_id")
        .references("id")
        .inTable("categories")
        .onDelete("CASCADE")
    })
    .createTable("images", (table) => {
      table.increments("id")
      table.text("picture").notNullable()
      table.integer("product_id").unsigned().notNullable()
      table
        .foreign("product_id")
        .references("id")
        .inTable("products")
        .onDelete("SET NULL")
      table.integer("category_id").unsigned()
      table
        .foreign("category_id")
        .references("id")
        .inTable("categories")
        .onDelete("SET NULL")
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
      table.boolean("is_admin").defaultTo(false)
      table.boolean("verification").defaultTo(false)
    })
    .createTable("orders", (table) => {
      table.increments("id")
      table.float("total")
      table.float("tva")
      table.boolean("finished").defaultTo(false)
      table.boolean("canceled").defaultTo(false)
      table.boolean("arrived").defaultTo(false)
      table.boolean("progress").defaultTo(false)
      table.date("date")
      table.integer("user_id").unsigned().notNullable()
      table
        .foreign("user_id")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
    })
    .createTable("orderProducts", (table) => {
      table.increments("id")
      table.integer("order_id").unsigned().notNullable()
      table
        .foreign("order_id")
        .references("id")
        .inTable("orders")
        .onDelete("CASCADE")
      table.integer("product_id").unsigned().notNullable()
      table
        .foreign("product_id")
        .references("id")
        .inTable("products")
        .onDelete("CASCADE")
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
        .onDelete("CASCADE")
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
        .onDelete("CASCADE")
      table.integer("material_id").unsigned().notNullable()
      table
        .foreign("material_id")
        .references("id")
        .inTable("materials")
        .onDelete("CASCADE")
    })
    .createTable("userAddress", (table) => {
      table.increments("id")
      table.integer("user_id").unsigned().notNullable()
      table
        .foreign("user_id")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
      table.integer("address_id").unsigned().notNullable()
      table
        .foreign("address_id")
        .references("id")
        .inTable("address")
        .onDelete("CASCADE")
    })
}

exports.down = async (knex) => {
  await knex.schema
    .dropTable("userAddress")
    .dropTable("productMaterials")
    .dropTable("orderProducts")
    .dropTable("bankCards")
    .dropTable("orders")
    .dropTable("images")
    .dropTable("users")
    .dropTable("address")
    .dropTable("products")
    .dropTable("categories")
    .dropTable("materials")
}
