import React, { useState, useEffect } from "react";
import Opa from "../../lib/img/opa.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import { Language } from "../../context/Context";
import { useContext } from "react";
import { Context } from "../../context/Localiz"; 
import "./home.scss";
import Home from "../../lib/img/header_uy.svg";
import Trending from "../../lib/img/header__olov.svg";
import subs from "../../lib/img/subcrise.svg";
import { NavLink } from "react-router-dom";

function Section2() {
  const [films, setFilms] = useState([]);
  const { lang, setLang } = useContext(Context);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/photos");

        if (res?.data) {
          setFilms(res?.data.slice(0, 5));
        }
      } catch (error) {
        console.error("Error fetching data from server:", error);
      }
    };

    fetchFilms();
  }, []);

  return (
    <div className="container">
      <div className="section2">
        <ul className="section__render">
          <div className="opa__item">
            <img src={Opa} alt="opa" />
            <h2 className="section__title">Dollie Blair</h2>
          </div>
          {films.map((item2) => (
            <Link className="section2__item" key={item2.id} to={"/Player/" + item2.id}> 
              <li className="section2__item">
                <img
                  className="section__render__img"
                  src={item2.thumbnailUrl}
                  alt={item2.title + "s Poster"}
                  width={220}
                  height={150}
                />
                <h2 className="section2__title">{Language[lang].section2.n}</h2>
              </li>
            </Link>
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
            
          <select className="select" value={lang} onChange={(evt) => setLang(evt.target.value)}>
              <option value="Uz">UZ</option>
              <option value="RU">RU</option>
              <option value="Eng">EN</option>
            </select>
            
          </li>
      </ul>
    </div>
  );
}

export { Section2 };