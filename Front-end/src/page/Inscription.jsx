import React from "react";

  const Inscription = () => {
    return (
      <Container>
        <Wrapper>
          <Title>Creer un compte</Title>
          <Form>
            <Input placeholder="Nom" />
            <Input placeholder="Prenom" />
            <Input placeholder="Nom d'utilisateur" />
            <Input placeholder="Email" />
            <Input placeholder="Mot de passe" />
            <Input placeholder="Confirmation du mot de passe" />
            <Agreement>
            En créant un compte, je consens au traitement de mes données personnelles
            données conformément à la politique de confidentialité
            </Agreement>
            <Button>Creer</Button>
          </Form>
        </Wrapper>
      </Container>
    );
  };
  export default Inscription;
