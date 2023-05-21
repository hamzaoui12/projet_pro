import React from "react";

  const Inscription = () => {
    return (
      <container>
        <wrapper>
          <title>Creer un compte</title>
          <form>
            <input placeholder="Nom" />
            <input placeholder="Prenom" />
            <input placeholder="Nom d'utilisateur" />
            <input placeholder="Email" />
            <input placeholder="Mot de passe" />
            <input placeholder="Confirmation du mot de passe" />
            <agreement>
            En créant un compte, je consens au traitement de mes données personnelles
            données conformément à la politique de confidentialité
            </agreement>
            <button>Creer</button>
          </form>
        </wrapper>
      </container>
    );
  };
  export default Inscription;
