import React from "react"
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="hidden md:block bg-black text-white">
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h6 className="text-lg font-bold underline mb-2">
              {t("footer.terms")}
            </h6>
            <ul className="text-sm">
              <li> © Inter ARNEIS Systems B.V 2022-2023</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold underline mb-2">
              {t("footer.legal")}
            </h3>
            <ul className="text-sm">
              <li>{t("footer.companyName")}</li>
              <li>{t("footer.address")}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold underline mb-2">
              {t("footer.contact")}
            </h3>
            <p>
              {t("footer.phone")}: <a href="tel:+123456789">+123456789</a>
            </p>
            <p>
              {t("footer.email")}:{" "}
              <a href="mailto:contact@example.com">contact@example.com</a>
            </p>
            <p>
              <Link to="/help">{t("footer.contactLink")}</Link>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold underline mb-2">
              {t("footer.socialMedia")}
            </h3>
            <ul className="flex space-x-4">
              <li>
                <a href="https://www.instagram.com/">
                  <FaInstagram size={24} color="white" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <FaFacebook size={24} color="white" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <FaTwitter size={24} color="white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
