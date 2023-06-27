import React, { useState } from "react"
import "tailwindcss/tailwind.css"
import { useTranslation } from "react-i18next"
import { Formik, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"

const validationSchema = Yup.object().shape({
  mail: Yup.string().email("Email invalide").required("Champ requis"),
  subject: Yup.string().required("Champ requis"),
  message: Yup.string().required("Champ requis"),
})

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const { t } = useTranslation()
  const handleSubmit = async (values, actions) => {
    try {
      await validationSchema.validate(values, { abortEarly: false })
      await axios.post("http://localhost:3001/contacts", values)

      setSuccessMessage("Votre message a été envoyé avec succès !")
      actions.resetForm()
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setErrorMessage("Veuillez remplir tous les champs du formulaire.")
      } else {
        setErrorMessage(
          "Une erreur s'est produite lors de l'envoi du formulaire."
        )
      }
    }
  }

  return (
    <div>
      <div
        className="flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md max-w-lg w-full">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">
            {t("contactUs")}
          </h1>
          <Formik
            initialValues={{ mail: "", subject: "", message: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ handleSubmit, isSubmitting, isValid }) => (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <Field
                  type={t("Email")}
                  name="mail"
                  className="border border-gray-300 p-2 rounded-lg"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="mail"
                  component="p"
                  className="text-red-500 mt-1"
                />

                <Field
                  type="text"
                  name="subject"
                  className="border border-gray-300 p-2 rounded-lg"
                  placeholder={t("subject")}
                />
                <ErrorMessage
                  name="subject"
                  component="p"
                  className="text-red-500 mt-1"
                />

                <Field
                  as="textarea"
                  name="message"
                  className="border border-gray-300 p-2 rounded-lg h-60 resize-none"
                  placeholder={t("message")}
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  className="text-red-500 mt-1"
                />

                <button
                  type="submit"
                  className={`bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-all duration-200 ${
                    (!isValid || isSubmitting) &&
                    "opacity-50 cursor-not-allowed"
                  }`}
                  disabled={!isValid || isSubmitting}
                >
                  {t("send")}
                </button>
              </form>
            )}
          </Formik>

          {successMessage && (
            <p className="text-green-500 mt-4">{successMessage}</p>
          )}
          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </div>
      </div>
    </div>
  )
}

export default Contact
