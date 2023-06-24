exports.up = async (knex) => {
  await knex.schema
    .alterTable("categories", (table) => {
      table.boolean("main_page").defaultTo(false)
  })
}

exports.down = async (knex) => {
  await knex.schema.alterTable("categories", (table) => {
    table.dropColumn("main_page")
  })
}