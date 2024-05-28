import React, {useEffect, useState} from 'react';
//import logo from './logo.svg';
import './App.css';


function App() {
    const [myDate, myDateUpdate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            myDateUpdate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
});


return (
    <div>
        <h3>Example React</h3>
        <input />
        <div>{myDate.toString()}</div>
        </div>
    );

}

export default App;





// function App(){
//     return (
//         <div className="App">
//             <header className="App-Header">
//             <p>
//                 Edit <code>src/App.tsx</code> and save to reload
//             </p>
//             <a
//             className="App-link"
//             href="https://react.js.org"
//             target='_blank'
//             rel="noopener noreferrer"
//             >
//                 Learn React
//             </a>
//             </header>
//         </div>
//     )
// }