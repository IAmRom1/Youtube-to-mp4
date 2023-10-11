import React from 'react';
import Navbar from '../components/Navbar';

const Download = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return (
        <>
            <Navbar/>
        <section className="download">
            <div className="container">
                <h1>Convertisseur youtube .mp4</h1>
                <p>Convertis ta vidéo YouTube en un fichier vidéo.
                   Indique l'URL de la vidéo dans le champ ci-dessous.
                </p>
                <form onSubmit={handleSubmit}>
                    <input type="text" id="url" placeholder='https://www.youtube.com/....' />
                    <input type="submit" value="Search" id='Search' />
                </form>
            </div>
        </section>
        </>
    );
};

export default Download;