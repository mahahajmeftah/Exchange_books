// AjoutLivreForm.js
import React, { useState } from 'react';

const AjoutLivreForm = () => {
  const [nom, setNom] = useState('');
  const [auteur, setAuteur] = useState('');
  const [genre, setGenre] = useState('');
  const [categorie, setCategorie] = useState('');
  const [format, setFormat] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données du formulaire à votre backend ou effectuer d'autres actions nécessaires
    console.log({ nom, auteur, genre, categorie, format, image });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom du livre:
        <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
      </label>

      <label>
        Auteur:
        <input type="text" value={auteur} onChange={(e) => setAuteur(e.target.value)} />
      </label>

      <label>
        Genre:
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Science Fiction</option>
          {/* Ajoutez d'autres options de genre au besoin */}
        </select>
      </label>

      <label>
        Catégorie:
        <select value={categorie} onChange={(e) => setCategorie(e.target.value)}>
          <option value="Roman">Roman</option>
          <option value="Mystère">Mystère</option>
          {/* Ajoutez d'autres options de catégorie au besoin */}
        </select>
      </label>

      <label>
        Format:
        <select value={format} onChange={(e) => setFormat(e.target.value)}>
          <option value="Broché">Broché</option>
          <option value="Relié">Relié</option>
          {/* Ajoutez d'autres options de format au besoin */}
        </select>
      </label>

      <label>
        Image:
        <input type="file" onChange={handleImageChange} accept="image/*" />
      </label>

      <button type="submit">Ajouter le livre</button>
    </form>
  );
};

export default AjoutLivreForm;
