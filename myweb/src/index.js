import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
//import NetflixIndex from './Component/NetflixIndex'
import reportWebVitals from './reportWebVitals';
import Twoway from './Practice/Twoway';
import Fetchingtable from './Practice/Fetchingtable';
import Fetching from './Practice/Fetching';
//import  {NetflixRegister}  from './Component/NetflixRegister';
//import Fetching from './Practice/Fetching';
//import Fetchingtable from './Practice/Fetchingtable';
//import EventBinding from './Practice/EventBinding';
//import TwowayBinding from './Practice/TwowayBinding';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Fetching></Fetching>
  </React.StrictMode>
);
//    <NetflixIndex/>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
