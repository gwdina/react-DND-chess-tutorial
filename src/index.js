import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import Board from './Board';
import { observe } from './Game'

// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <Square black>
//     <Knight />
//     </Square> */}
//     <App />
//     {/* <Board knightPosition={[0, 0]} /> */}
//   </React.StrictMode>
// );



const root = ReactDOM.createRoot(document.getElementById('root'));
observe((knightPosition) => root.render(<Board knightPosition={knightPosition} />
)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
