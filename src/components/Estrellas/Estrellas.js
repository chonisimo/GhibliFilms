import React from 'react';
import './Estrellas.css';

const puntos = document.getElementsByClassName('FilmPuntaje');
const star5 = document.getElementById('star5');
const star4 = document.getElementById('star4');
const filmStar = document.getElementsByClassName('FilmEstrellas');

class Estrellas extends React.Component {
    render() {
        /* const cantidad = () => {
            if (film.rt_score < 80 && film.rt_score > 60) {
                return <img className="estrellas" id="star1" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                <img className="estrellas" id="star2" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                <img className="estrellas" id="star3" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                <img className="estrellas" id="star4" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
            } else if (film.rt_score < 60) {
                return <img className="estrellas" id="star1" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                <img className="estrellas" id="star2" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                <img className="estrellas" id="star3" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
            } else {
                return <img className="estrellas" id="star1" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                <img className="estrellas" id="star2" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                <img className="estrellas" id="star3" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                <img className="estrellas" id="star4" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                <img className="estrellas" id="star5" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
            }
        }; */
        return (
            <div className="FilmEstrellas">
                <img className="estrellas" id="star1" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                <img className="estrellas" id="star2" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                <img className="estrellas" id="star3" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                <img className="estrellas" id="star4" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
                <img className="estrellas" id="star5" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png"/>
            </div>
            )
    }
};

export default Estrellas;