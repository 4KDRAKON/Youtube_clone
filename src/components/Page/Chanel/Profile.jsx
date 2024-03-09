import React, { useState, useEffect, useRef } from "react"; // useState va useRef qo'shildi
import { useParams, Link } from "react-router-dom";
import { Section } from "../Home/section";
import { Header } from "../Home/Header";
import "./chanel.scss";
import Img from "../../lib/img/chanel__tepa.png";
import Img2 from "../../lib/img/qongiroqqqqqqqqqqq.svg";
import Img3 from "../../lib/img/Lupa.svg";
import Pichoq from "../../lib/img/Pichoq.png";
import Brat from "../../lib/img/profill__brat.svg";
import Brat2 from "../../lib/img/profil__brat2.svg";
import Brat3 from "../../lib/img/profil__brat3.svg";
import axios from "axios";
import { Language } from "../../context/Context";
import { useContext } from "react";
import { Context } from "../../context/Localiz"; 

// document.title = "Profile"; // Bu qism o'chirildi

function Chanel() {
  const {lang} = useContext(Context)
  const { user_id } = useParams();
  const [user, setUser] = useState([]); // React.useState o'rniga useState
  const Ref = useRef(null); // React.useRef o'rniga useRef

  useEffect(() => { // document.title uchun useEffect qo'shildi
    document.title = "Profile";
    fetch("https://reqres.in/api/users/" + user_id)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setUser(data?.data);
        }
      });
  }, [user_id]);

  const Add = () => {
    Ref.current.classList.add("chanel__div3__btn2");
  };
  const [films, setFilms] = useState([]); // React.useState o'rniga useState

  useEffect(() => { // Boshqa useEffect
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
      <Header />
      <Section />
      <img className="ishikop" src={Img} alt="rasm"
       width={1495}
       height={280} />
      {user && (
        <div className="chanel__div">

          <div className="chanel__div1">

            <img className="chanel__div__img"
              src={user.avatar}
              alt={user.first_name + " " + user.last_name + "s avatar"}
              width={80}
              height={80}
            />

            <div className="chanel__div2">
              <h2 className="chanel__div2__h2">{user.first_name + " " + user.last_name}</h2>

              <p className="chanel__div2__p">245K subscribed</p>
            </div>
            <div className="chanel__div3">
              <img src={Img2} alt="logo" width={22} height={26} />
              <button ref={Ref} className="chanel__div3__btn" onClick={Add}>Subscribe 2.3m</button>
            </div>
          </div>

          <ul className="chanel__div4__ul">
            <li className="chanel__div4__li">
              <a className="chanel__link" href="#link">{Language[lang].header.a1}</a>
            </li>
            <li className="chanel__div4__li">
              <a className="chanel__link" href="#link">{Language[lang].chanel.a1}</a>
            </li>
            <li className="chanel__div4__li">
              <a className="chanel__link" href="#link">{Language[lang].chanel.a2}</a>
            </li>
            <li className="chanel__div4__li2">
              <a className="chanel__link" href="#link">{Language[lang].chanel.a3}</a>
            </li>
            <li className="chanel__div4__li2">
              <a className="chanel__link" href="#link">{Language[lang].chanel.a4}</a>
            </li>
            <li className="chanel__div4__li2">
              <a className="chanel__link" href="#link">{Language[lang].chanel.a5}</a>
            </li>
            <li className="chanel__div4__li2">
              <a className="chanel__link" href="#link">
                <img src={Img3} alt="lupa" />
              </a>
            </li>
          </ul>


          <div className="chanel__div5">
            <div className="chanel__div5__div">
              <img className="chanel__div5__img" src={Pichoq} alt="Pichoq" width={400} height={250} />
              <div>
              <h2 className="chanel__div5__h2">{Language[lang].chanel.a6}</h2>
              <p className="chanel__div5__p">{Language[lang].chanel.a7} </p>

                  <p className="chanel__div5__p2">11k views  ·  6 months ago</p>
              </div>
            </div>
            <ul className="chanel__div5__ul">
              <li className="chanel__div5__li">
              {Language[lang].chanel.a9}
              </li>
              <li className="chanel__div5__li">
                <a className="chanel__div__a" href="#link">
                  <img src={Brat} alt="" /> <p>Flora Benson</p>
                </a>
              </li>
              <li className="chanel__div5__li">
                <a className="chanel__div__a" href="#link">
                  <img src={Brat2} alt="" /> <p>Violet Cobb</p>
                </a>
              </li>
              <li className="chanel__div5__li">
                <a className="chanel__div__a" href="#link">
                  <img src={Brat3} alt="" /> <p>Phillip Mullins</p>
                </a>
              </li>
            </ul>
          </div>

<h2 className="chanel__div5__h22">{Language[lang].chanel.a8}</h2>
          <ul className="chanel__div5__ul2">

          {films.map((item2) => (
            
     <Link key={item2.id} to={"/Player/" + item2.id}>
       <li key={item2.id} className="chanel__div5__li2">
         <img
           className="section__render__img"
           src={item2.thumbnailUrl}
           alt={item2.title + "s Poster"}
           width={220}
           height={150}
         />
         <h2 className="section2__title">11k views  ·  6 months ago</h2>
       </li>
     </Link>
    
   ))}
   </ul>

        </div>
      )}








    </div>



  );
}

export { Chanel };