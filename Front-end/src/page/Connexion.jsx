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
      <container>
        <wrapper>
          <title> Connexion </title>
          <form>
            <input
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleClick} disabled={isFetching}>
              CONNEXION
            </button>
            {error && <Error>Echec de la Connexion...</Error>}
            <link>Mot de passe oublier !</link>
            <link>Creer un nouveau compte</link>
          </form>
        </wrapper>
      </container>
    );
  };
  
  export default Connexion;
  
