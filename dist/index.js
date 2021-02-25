// import React from 'react'
// import ReactDOM from 'react-dom'
// import './styles/index.scss'
// import App from './App'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export { default as Button } from './components/Button';
export { default as Alert } from './components/Alert';
export { default as Menu } from './components/Menu';
export { default as Tabs } from './components/Tabs';
export { default as Icon } from './components/Icon';
export { default as Input } from './components/Input';
export { default as AutoComplete } from './components/AutoComplete';
export { default as Transition } from './components/Transition';
export { default as Progress } from './components/Progress';
export { default as Upload } from './components/Upload';
