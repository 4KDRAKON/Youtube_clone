import React, { useState, useEffect,useRef } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Header } from "../Home/Header";
import { Section } from "../Home/section";
import Logo from "../../lib/img/likes.png";
import img from "../../lib/img/akkaunt__logo.svg";
import { Language } from "../../context/Context";
import { useContext } from "react";
import { Context } from "../../context/Localiz"; 
import Home from "../../lib/img/header_uy.svg";
import Trending from "../../lib/img/header__olov.svg";
import subs from "../../lib/img/subcrise.svg";
import lib from "../../lib/img/lirary.svg";
import { NavLink } from "react-router-dom";
function Player() {
    const { item_id } = useParams();
    const [item, setItem] = useState({});
    const [error, setError] = useState(null);
    const [films, setFilms] = useState([]);
    const { lang } = useContext(Context);
    const Ref = useRef(null);
    const Add = () => {
        Ref.current.classList.add("chanel__div3__btn2");
      };
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos/${item_id}`)
            .then((response) => {
                setItem(response.data);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, [item_id]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then((response) => {
                setFilms(response.data.slice(0, 10));
            })
            .catch((error) => {
                console.error("Error fetching data from server:", error);
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container">
            <Header />
            <Section />
            <div className="player__render__and__render">
            {item && (
                <div className="text">
                    <img className="Player__img"
                        src={item.url}
                        alt={item.title}
                        width={863}
                        height={500}
                    />
                    <div className="player__likes">
                        <div className="nimadirda">
                            <h2 className="Player__textlar">{item.title}</h2>
                            <h2 className="Player__watch">123k views</h2>
                        </div>
                        <a href="#link">
                            <img src={Logo} alt="logo" width={396} height={53} />
                        </a>
                    </div>

                    <div className="player__accaunt">
                        <Link className="sjsjdsjdjsjd" to={"/Chanel/" + item.id}>
                            <img className="hdjdudhudhuhhuhduehduehdeuhduehduedheudheuhdeuhdeuhdeushdesu" src={img} alt="logo" />
                            <button ref={Ref} className="chanel__div3__btnn" onClick={Add}>Subscribe 2.3m</button>
                        </Link>
                        <p className="Player__accaunt__text">{Language[lang].section2.p} </p>
                    </div>
                </div>
            )}

            <ul className="player__listtt">
                {films.map((film) => (
                    <li key={film.id}>
                        <Link to={"/Player/" + film.id}>
                            <img
                                className="section__render__img"
                                src={film.thumbnailUrl}
                                alt={film.title + " Poster"}
                                width={220}
                                height={150}
                            />
                            <h3 className="layer__titlr">{Language[lang].section2.b}</h3>
                            <h2 className="section2__title">{Language[lang].section2.n}</h2>
                            
                        </Link>
                    </li>
                ))}
            </ul>
            </div>
            <ul className="header2">
      <li className="header__item">
            <Link className="Header__link" to={"/"}>
              <img src={Home} alt="logo" width={20} height={19} />
              
            </Link>
          </li>
          <li className="header__item">
            <NavLink className="Header__link" to={"/Dontwork"}>
              <img src={Trending} alt="logo" width={16} height={21} />
              
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className="Header__link" to={"/Dontwork"}>
              <img src={subs} alt="logo" width={18} height={18} />
              
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className="Header__link" to={"/Dontwork"}>
              <img src={lib} alt="logo" width={20} height={16} />
             
            </NavLink>
          </li>
      </ul>
        </div>
    );
}

export { Player };