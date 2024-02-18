// AjoutLivreForm.js
import React, { useState } from 'react';
import genres from '../datas/genreList.js';
import '../styles/AddABook.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AddBook = () => {

    let data;
    let contentType;

    const genresWithoutAll = genres.filter((genre, index) => genre !== 'tout');

    console.log(genresWithoutAll);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('Fiction littéraire');
    const [category, setCategory] = useState('Roman');
    const [format, setFormat] = useState('Broché');
    const [imageForm, setImage] = useState('');
    const [titleError, setTitleError] = useState("")
    const [authorError, setAuthorError] = useState("")
    const [imageError, setImageError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données du formulaire à votre backend ou effectuer d'autres actions nécessaires
    console.log({ title, author, genre, category, format, imageForm });

    setTitleError("")
    setAuthorError("")
    setImageError("")
		
		// checking if email is empty
		if (title === '') {
            setTitleError("Veuillez entrer un titre")
            return
        }

		if (author === '') {
            setAuthorError("Veuillez entrez un auteur")
            return
        }

        if (!imageForm) {
            // Gérer l'erreur liée à l'image (par exemple, afficher un message d'erreur)
            setImageError("Veuillez sélectionner une image");
            return;
          }

		// Check if account exists (using the email)
		addNewBook()
    }
	
    
    function convertImageToBase64(file) {
        console.log("file", file.type);

        return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            const base64String = reader.result.split(',')[1];
            const content = file.type;
            resolve({ base64String, content });
        };

        reader.onerror = (error) => {
            reject(error);
        };

        reader.readAsDataURL(file);
        });
    }

    async function fetchImage() {
        try {
          const { base64String, content } = await convertImageToBase64(imageForm);
      
          // Utilisez base64String et contentType comme nécessaire
          data = base64String;
          contentType = content;
      
          // Utilisez les valeurs ici ou passez-les à une autre fonction
          console.log("addbook ftech", { title, author, genre, category, format, image: { data, contentType } });
        } catch (error) {
          console.error("Erreur lors de la conversion de l'image en base64:", error);
        }
      }
      

    // Log in a user using email and password
    const addNewBook = async () => {
        await fetchImage();
        const owner= sessionStorage.getItem('userId');
        console.log("addbook 1", {title, author, genre, category, owner, format, image: { data, contentType }});
		// TODO: AddBook URL
        fetch("http://127.0.0.1:5555/api/newbook", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({title, author, genre, category, owner, format, image: { data, contentType }})
        })
        .then(r => r.json())
        .then(r => {
            console.log(r.message);
            if ('success' === r.message) {
				window.alert("Votre livre a été ajouté")
            } else {
                window.alert("Erreur pendant l'ajout du livre")
            }
        })
    }
  

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className='addBook-page'>
        <Header />
        <div className='content'>
            <h1 className='title'>Ajouter un livre</h1>
            <form onSubmit={handleSubmit} className="form">
            <label className="label">
                Nom du livre:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="input"/>
            </label>
            <label className="errorLabel">{titleError}</label>

            <label className="label">
                Auteur:
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="input"/>
            </label>
            <label className="errorLabel">{authorError}</label>

            <label className="label">
                Genre:
                <select value={genre} onChange={(e) => setGenre(e.target.value)} className="select">
                    {genresWithoutAll.map((genreOption, index) => (
                        <option key={index} value={genreOption}>
                            {genreOption}
                        </option>
                    ))}
                </select>
            </label>

            <label className="label">
                Catégorie:
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="select">
                <option value="Roman">Roman</option>
                <option value="Mystère">Mystère</option>
                {/* Ajoutez d'autres options de catégorie au besoin */}
                </select>
            </label>

            <label className="label">
                Format:
                <select value={format} onChange={(e) => setFormat(e.target.value)} className="select">
                <option value="Broché">Broché</option>
                <option value="Relié">Relié</option>
                {/* Ajoutez d'autres options de format au besoin */}
                </select>
            </label>

            <label className="label labelinput">
                Image:
                <input type="file" onChange={handleImageChange} accept="image/*" className="button"/>
            </label>
            <label className="errorLabel">{imageError}</label>

            <button type="submit" className="button">Ajouter le livre</button>
            </form>
        </div>
        <Footer />
    </div>
  );
};

export default AddBook;
