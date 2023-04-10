import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Adresse e-mail invalide').required('Adresse e-mail requise'),
});

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
    .required('Nouveau mot de passe requis'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Les mots de passe ne correspondent pas')
    .required('Confirmation de mot de passe requise'),
});

const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  
  const onSubmit = async (values) => {
    // Vérifier si l'e-mail existe dans la base de données
    const user = await fetchUserByEmail(values.email);
    if (user) {
      // Générer un jeton de réinitialisation de mot de passe unique
      const resetToken = generateResetToken(user.id);
      
      // Envoyer l'e-mail de réinitialisation de mot de passe
      sendResetPasswordEmail(user.email, resetToken);
      
      setEmailSent(true);
    }
  };
  
  if (emailSent) {
    return <p>Un e-mail de réinitialisation de mot de passe a été envoyé à votre adresse e-mail.</p>;
  }
  
  return (
    <Formik initialValues={{ email: '' }} validationSchema={ForgotPasswordSchema} onSubmit={onSubmit}>
  {({ isSubmitting }) => (
    <Form>
      <label htmlFor="email">Adresse e-mail</label>
      <Field type="email" name="email" />
      <ErrorMessage name="email" component="div" />
      <button type="submit" disabled={isSubmitting}>Envoyer</button>
    </Form>
  )}
</Formik>
);
};

        const ResetPassword = ({ resetToken }) => {
        const [passwordReset, setPasswordReset] = useState(false);

        const onSubmit = async (values) => {
        // Vérifier que le jeton de réinitialisation de mot de passe est valide
        const user = await verifyResetToken(resetToken);
        if (user) {
        // Mettre à jour le mot de passe de l'utilisateur dans la base de données
        await updateUserPassword(user.id, values.password);
        setPasswordReset(true);
        }
        };

        if (passwordReset) {
        return <p>Votre mot de passe a été réinitialisé avec succès. Vous pouvez maintenant vous connecter avec votre nouveau mot de passe.</p>;
        }

return (
    <Formik initialValues={{ password: '', passwordConfirm: '' }} validationSchema={ResetPasswordSchema} onSubmit={onSubmit}>
    {({ isSubmitting }) => (
            <Form>
                <label htmlFor="password">Nouveau mot de passe</label>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <label htmlFor="passwordConfirm">Confirmez le nouveau mot de passe</label>
                    <Field type="password" name="passwordConfirm" />
                <ErrorMessage name="passwordConfirm" component="div" />
            <button type="submit" disabled={isSubmitting}>Réinitialiser le mot de passe</button>
            </Form>
    )}
    </Formik>
);
};

        export default function PasswordResetPage({ resetToken }) {
        if (resetToken) {
        return <ResetPassword resetToken={resetToken} />;
        } else {
        return <ForgotPassword />;
        }
        }