import React from 'react';
import posters from '../Poster/Poster';
import './Film.css';

class Film extends React.Component {
    render() {
        const {film} = this.props;
/*         const imagen = () => {
            if(film.title === "Castle in the Sky") {
                return posters.castleInTheSky;
            } else if (film.title === "Grave of the Fireflies") {
                return posters.graveOfTheFireflies;
            } else if (film.title === "My Neighbor Totoro") {
                return posters.myNeighborTotoro;
            } else if (film.title === "Kiki's Delivery Service") {
                return posters.kikisDeliveryService;
            } else if (film.title === "Only Yesterday") {
                return posters.onlyYesterday;
            } else if (film.title === "Porco Rosso") {
                return posters.porcoRosso;
            } else if (film.title === "Pom Poko") {
                return posters.pomPoko;
            } else if (film.title === "Whisper of the Heart") {
                return posters.whisperOfTheHeart;
            } else if (film.title === "Princess Mononoke") {
                return posters.princessMononoke;
            } else if (film.title === "My Neighbors the Yamadas") {
                return posters.myNeighborsTheYamadas;
            } else if (film.title === "Spirited Away") {
                return posters.spiritedAway;
            } else if (film.title === "The Cat Returns") {
                return posters.theCatReturns;
            } else if (film.title === "Howl's Moving Castle") {
                return posters.howlsMovingCastle;
            } else if (film.title === "Tales from Earthsea") {
                return posters.talesFromEarthsea;
            } else if (film.title === "Ponyo") {
                return posters.ponyo;
            } else if (film.title === "Arrietty") {
                return posters.arrietty;
            } else if (film.title === "From Up on Poppy Hill") {
                return posters.fromUpOnPoppyHill;
            } else if (film.title === "The Wind Rises") {
                return posters.theWindRises;
            } else if (film.title === "The Tale of the Princess Kaguya") {
                return posters.theTaleOfThePrincessKaguya;
            } else {
                return posters.whenMarnieWasThere;
            }

        }; */
            /*  for (let p in posters) {
                posters[p];
            } */
        
        /* const estrellitas = () => {
            let numeros = parseInt(film.rt_score);
            let star = '<img className="estrellas" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>';
            let cuenta = Math.floor(numeros * 5/100);

            <img className="estrellas" alt="" src="https://i.imgur.com/JngKcSV.png"/>

        } */

        /* const estrellitas = () => {
            let numeros = parseInt(film.rt_score);
            let cuenta = Math.floor(numeros * 5/100);
            let star = document.createElement('img');
            star.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png";
            let node = document.createTextNode('');
            let clase = document.getElementsById('estrellas');
            star.appendChild(node);
            clase.appendChild(star);
        } */

        /*const estrellitas = () => {
            let star = document.createElement('img');
            console.log(star);
            star.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png";
            star.style.width = "50px";
            star.style.height = "50px";
            star.style.display = "inline";
            document.getElementsByClassName('FilmEstrellas').innerHTML = star;
        } */

        const estrellitas = () => {
            let numeros = parseInt(film.rt_score);
            if(numeros < 80 && numeros > 60) {
                return (<li><img className="estrellas" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                <img className="estrellas" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                <img className="estrellas" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                <img className="estrellas" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                </li>
                )
            } else if(numeros < 60) {
                return (<li><img className="estrellas" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                <img className="estrellas" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                <img className="estrellas" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                </li>
                )
            } else {
                return (<li><img className="estrellas" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                <img className="estrellas" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                <img className="estrellas" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                <img className="estrellas" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                <img className="estrellas" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                </li>
                )
            }
        };

        const imagen = () => {
            return posters[film.title.replace(/ |'/g, "_")];
        };
        
        return (
            <div className="contenedor">
                <div className="FilmFicha">
                    <h3 className="FilmFecha">{film.release_date}</h3>
                    <img className="FilmPoster" src={imagen()} alt=""/>
                    <h2 className="FilmTitulo">{film.title}</h2>
                    <p className="FilmDescripcion">{film.description}</p>
                    <div className="FilmInfo">
                        <p className="FilmDirector">Director: {film.director}</p>
                        <p className="FilmProductor">Productor: {film.producer}</p>
                        <p className="FilmPuntaje" id="puntaje">Puntaje: {film.rt_score}</p>
                        <ul className="FilmEstrellas" id="Estrellas">
                            {estrellitas()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Film;