import { useState, useEffect } from "react";
import { account } from "./appwrite";
import AuthForm from "./components/AuthForm";
import UploadForm from "./components/UploadForm";
import FileList from "./components/FileList";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    account.get().then(setUser).catch(() => {});
  }, []);

  if (!user) return <AuthForm onAuth={setUser} />;

  return (
    <div style={{ padding: 20 }}>
      <h1>Bienvenue, {user.email}</h1>
      <button onClick={() => account.deleteSession('current').then(() => setUser(null))}>Déconnexion</button>
      <UploadForm onUpload={() => window.location.reload()} />
      <FileList />
    </div>
  );
}

export default App;