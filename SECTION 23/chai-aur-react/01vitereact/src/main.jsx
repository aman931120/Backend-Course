import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

// function MyApp(){
//     return (
//         <div>
//             <h1>Custom App !</h1>
//         </div>
//     )
// }


// This will not work because of SYNTAX
// const reactElement = {
//   type: "a",
//   // this props is basically properties
//   props: {
//     href: "https://google.com",
//     target: "_blanks",
//   },
//   children: "Click me to visit google",
// };

// const anotherElement = (
//     <a href="https://google.com" target='_blank'>Visit Google</a>
// )


// This will work because it has a correct syntax
// const reactElement = React.createElement(
//     // we have a special syntax
//     'a',
//     {href:'https://google.com', target:'_blank'},
//     "click me to visit google"
// )


createRoot(document.getElementById('root')).render(
    // <App />
    // anotherElement
    // reactElement

)
