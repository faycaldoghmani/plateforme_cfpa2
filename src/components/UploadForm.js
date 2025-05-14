import React, { useState } from 'react';
import { storage, ID } from '../appwrite';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const uploadFile = async () => {
    if (!file) return setMessage('Veuillez sélectionner un fichier');

    try {
      const response = await storage.createFile(
      '68246803995940872ef2',  // ✅ ID exact du bucket
      ID.unique(),             // ou un ID personnalisé
      file                     // le fichier sélectionné
    );



      setMessage('Fichier envoyé avec succès !');
      console.log('Réponse Appwrite:', response);
    } catch (error) {
      console.error('Erreur upload :', error);
      setMessage('Échec de l’envoi du fichier');
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadFile}>Envoyer</button>
      <p>{message}</p>
    </div>
  );
};

export default UploadForm;
