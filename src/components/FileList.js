import { useEffect, useState } from "react";
import { storage } from "../appwrite";


export default function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const res = await storage.listFiles("68246803995940872ef2");
      setFiles(res.files);
    };
    fetchFiles();
  }, []);

  return (
    <div>
      <h2>Liste des cours</h2>
      <ul>
        {files.map(f => (
          <li key={f.$id}>
            {f.name} - 
           <a href={storage.getFileView("68246803995940872ef2", f.$id).href} target="_blank" rel="noreferrer">

              Télécharger
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
