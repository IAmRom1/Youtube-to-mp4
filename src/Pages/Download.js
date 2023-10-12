import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { youtube_parser } from "./../components/Tools";

const Download = () => {
  const inputUrlRef = useRef();
  const [UrlResult, setUrlResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const youtubeID = youtube_parser(inputUrlRef.current.value);
    console.log(youtubeID);

    const options = {
      method: "GET",
      url: "https://ytstream-download-youtube-videos.p.rapidapi.com/dl",
      params: { id: "youtubeID" },
      headers: {
        "X-RapidAPI-Key": "YOUR-KEY",
        "X-RapidAPI-Host": "ytstream-download-youtube-videos.p.rapidapi.com",
      },
    };
    axios(options)
      .then((res) => setUrlResult(res.data.link))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <section className="download">
        <div className="container">
          <h1>Convertisseur youtube .mp4</h1>
          <p>
            Convertis ta vidéo YouTube en un fichier vidéo. Indique l'URL de la
            vidéo dans le champ ci-dessous.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              ref={inputUrlRef}
              type="text"
              id="url"
              placeholder="https://www.youtube.com/...."
            />
            <input type="submit" value="Search" id="Search" />
          </form>
          {UrlResult ? (
            <a
              href={UrlResult}
              target="_blank"
              className="download-btn"
              rel="norefrrer"
            >
              Télécharger la vidéo
            </a>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
};

export default Download;
