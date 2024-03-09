import React from "react";
import { Routes, Route } from "react-router-dom";
import { Chanel } from "../Chanel/Profile";
import { Dontwork } from "../Dont_work/dontwork";
import { Homemain } from "../Home/Home_main";
import { Player } from "../player/player";
import { Eror } from "../error/error";
import { Context as Theme } from "../../context/Theme";
function AuthenticatedApp() {
 React.useContext(Theme)
 console.log(Theme);
  return (
    <div className={`container container--${Theme}`}>
      <Routes>
        <Route path="/" element={<Homemain />} />
        <Route path="Home" element={<Homemain />} />
        <Route path="Player/:item_id" element={<Player />} />
        <Route path="Chanel/:user_id" element={<Chanel />} />
        <Route path="Dontwork" element={<Dontwork />} />
        <Route path="*" element={<Eror />} />





      </Routes>
    </div>
  );
}


export default AuthenticatedApp;