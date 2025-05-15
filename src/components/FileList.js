import { useEffect, useState } from "react";
import { storage } from "../appwrite"; // ton SDK configuré

export default function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await storage.listFiles("68246803995940872ef2");
        setFiles(res.files);
      } catch (err) {
        console.error("Erreur de récupération des fichiers", err);
      }
    };
    fetchFiles();
  }, []);

  return (
    <div>
      <h2>Liste des cours</h2>
      <ul>
        {files.map(f => (
          <li key={f.$id}>
            {f.name} –{" "}
            <a
              href={storage.getFileView("68246803995940872ef2", f.$id).href}
              target="_blank" >
              Télécharger
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
