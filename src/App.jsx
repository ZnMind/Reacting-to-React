import React, { useState, useEffect } from "react";
import Greeter from './components/Greeter';

const App = () => {

    const [username, setUsername] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
          }, 3000);
    }, [loaded]);

    if (!loaded) {
        return (
            <div>
                <h1>Website loading...</h1>
                <button onClick={() => setLoaded(true)}>Click me to load</button>
            </div>
        )
    } else {
        return (
            <div>
                <h1><Greeter phrase="Hello there" name="Dan" /></h1>
                <h1><Greeter phrase="Howdy" name="Partner" /></h1>
                <h1><Greeter phrase="What's good" name="Man" /></h1>
                <input value={username} onChange={e => setUsername(e.target.value)}></input>
                <p>You are logging in as {username}</p>
            </div>
        );
    }

};

export default App;