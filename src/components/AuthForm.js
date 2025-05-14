import { useState } from "react";
import { account } from "../appwrite";

export default function AuthForm({ onAuth }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await account.createEmailSession(email, pass);
      } else {
        await account.create('unique()', email, pass);
      }
      const user = await account.get();
      onAuth(user);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPass(e.target.value)} />
      <button>{isLogin ? "Connexion" : "Inscription"}</button>
      <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: "pointer" }}>
        {isLogin ? "Créer un compte" : "Déjà inscrit ?"}
      </p>
    </form>
  );
}