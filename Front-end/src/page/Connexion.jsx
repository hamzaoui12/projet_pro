import React from "react";

const Connexion = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);
  
    const handleClick = (e) => {
      e.preventDefault();
      Connexion(dispatch, { username, password });
    };
    return (
      <Container>
        <Wrapper>
          <Title>Connexion</Title>
          <Form>
            <Input
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleClick} disabled={isFetching}>
              CONNEXION
            </Button>
            {error && <Error>Echec de la Connexion...</Error>}
            <Link>Mot de passe oublier !</Link>
            <Link>Creer un nouveau compte</Link>
          </Form>
        </Wrapper>
      </Container>
    );
  };
  
  export default Connexion;
  
