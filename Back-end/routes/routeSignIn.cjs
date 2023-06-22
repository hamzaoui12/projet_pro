const hashPassword = require("../hashPassword.cjs");
const config = require("../config.js");
const jsonwebtoken = require("jsonwebtoken");
const sanitizeUser = require("../sanitizer.js");
const UserModel = require("../models/UserModel.cjs");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const routeSign = ({ app }) => {
  app.post("/sign-up", async (req, res) => {
    const { firstName, lastName, password, mail, phoneNumber } = req.body;

    const [passwordHash, passwordSalt] = hashPassword(password)
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)


    try {
      const user = await UserModel.query().insert({
        firstName,
        lastName,
        passwordHash,
        passwordSalt,
        mail,
        phoneNumber
      });

      const msg = {
        to: mail,
        from: "nora.sedjai@supdevinci-edu.fr",
        subject: "Validation de compte - Arneis",
        text: `Bonjour ${firstName},\n\nPour valider votre compte, veuillez cliquer ce lien : ${process.env.REACT_APP_URL_ROUTE}/verify-account/${user.id}`
      };      

      sgMail
        .send(msg)
        .then(() => {
          res.send("Email sent");
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          res.status(500).send("Failed to send email");
        });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).send("Failed to create user");
    }
  })
  app.post("/sign-in", async (req, res) => {
    const { mail, password } = req.body
    const user = await UserModel.query().findOne({mail})
    
    if (!user) {
      res.status(401).send({ error: "connection non authorisée" })

      return
    }

    const [passwordHash] = hashPassword(password, user.passwordSalt)

    if (user.passwordHash !== passwordHash) {
      res.status(401).send({ error: "connection non authorisée" })

      return
    }

    const jwt = jsonwebtoken.sign(
      {
        payload: {
          user: {
            id: user.id,
            fullName: `${user.firstName} ${user.lastName}`,
            mail: `${user.mail}`
          },
        },
      },
      config.security.session.jwt.secret,
      { expiresIn: config.security.session.jwt.expiresIn }
    )

    res.send({ result: jwt, "user" : sanitizeUser(user)})
  })
  app.get("/verify-account/:userId", async (req, res) => {
    const { userId } = req.params;
  
    try {
      const user = await UserModel.query().findById(userId);
  
      if (!user) {
        return res.status(404).send("User not found");
      }
  
      user.verification = true;
      await user.$query().patch();

    } catch (error) {
      console.error("Error verifying account:", error);
      return res.status(500).send("Failed to verify account");
    }
  });
  
}

module.exports = routeSign
