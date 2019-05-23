import React from 'react'; // Hace Funcionar JSX  
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';  
import './global.css';  

// import Badge from './components/Badge' primer ejemplo
import BadgeNew from './pages/BadgeNew';

const container = document.getElementById('app');

// ReactDOM.render(<Badge firstName="Andres" LastName="David" jobTitle="T Backend" twitter="@AndresP"/>, container);
ReactDOM.render(<BadgeNew/>, container);
