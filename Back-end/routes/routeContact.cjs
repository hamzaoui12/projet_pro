const ContactModel = require("../models/ContactModel.cjs")

const routeContacts = async ({ app }) => {
  const checkContact = async (contact) => {
    if (contact) {
      return true
    }

    return false
  }

  app.get("/contacts", async (req, res) => {
    try {
      const contacts = await ContactModel.query()
      res.send({ result: contacts })
    } catch (error) {
      res.status(500).send({ error: "Failed to fetch contacts" })
    }
  })

  app.get("/contacts/:id", async (req, res) => {
    const { id } = req.params

    try {
      const contact = await ContactModel.query().findById(id)

      if (!checkContact(contact)) {
        res.status(404).send({ error: "Contact not found" })
      } else {
        res.send({ result: contact })
      }
    } catch (error) {
      res.status(500).send({ error: "Failed to fetch contact" })
    }
  })

  app.post("/contacts", async (req, res) => {
    const { mail, subject, message } = req.body

    try {
      const newContact = await ContactModel.query().insert({
        mail,
        subject,
        message,
      })
      res.status(201).send({ result: newContact })
    } catch (error) {
      res.status(500).send({ error: "Failed to add contact" })
    }
  })

  app.patch("/contacts/:id", async (req, res) => {
    const { id } = req.params
    const { mail, subject, message } = req.body

    try {
      const updatedContact = await ContactModel.query()
        .updateAndFetchById(id, {
          mail,
          subject,
          message,
        })

      if (!checkContact(updatedContact)) {
        res.status(404).send({ error: "Contact not found" })
      } else {
        res.send({ result: updatedContact })
      }
    } catch (error) {
      res.status(500).send({ error: "Failed to update contact" })
    }
  })

  app.delete("/contacts/:id", async (req, res) => {
    const { id } = req.params

    try {
      const contact = await ContactModel.query().findById(id)

      if (!checkContact(contact)) {
        res.status(404).send({ error: "Contact not found" })
      } else {
        await ContactModel.query().deleteById(id)
        res.send({ result: contact })
      }
    } catch (error) {
      res.status(500).send({ error: "Failed to delete contact" })
    }
  })
}

module.exports = routeContacts
