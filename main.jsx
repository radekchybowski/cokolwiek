import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Tenzies from './scrimba_tutorial/5_tenzies/Tenzies';
import Quiz from './scrimba_tutorial/6_quiz/Quiz';

// import './assets/global.scss'
// import ReactFacts from './scrimba_tutorial/1_static_site/ReactFacts';
// import BioSnippet from './scrimba_tutorial/2_bio/BioSnippet';
// import Airbnb from './scrimba_tutorial/3_airbnb/Airbnb';
// import Meme from './scrimba_tutorial/4_meme/Meme';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )




ReactDOM.createRoot(document.querySelector('#root')).render(
  <Quiz/>
);