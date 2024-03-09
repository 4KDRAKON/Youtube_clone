import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider as AuthProvider } from "../src/components/context/paroluchun";
import { Provider as Till } from './components/context/Localiz';
import { Provider as Theme } from './components/context/Theme';
import App from './App';
import "./index.scss"
import "../src/components/Page/Home/section2.scss"
import "../src/components/Page/player/player.scss"
import "../src/components/Page/Home/section3.scss"
import "../src/components/Page/Home/section4.scss"
import "../src/components/Page/Chanel/chanel.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme>
    <Till>
    <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </Till>
  </Theme>
  </React.StrictMode>
);

