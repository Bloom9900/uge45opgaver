import apiFacade from "./apiFacade";
import { useEffect, useState } from 'react';

export function Home( {login} ) {
    const init = {username: "", password: ""};
    const [loginCredentials, setLoginCredentials] = useState(init);

    const performLogin = (evt) => {
        evt.preventDefault();
        login(loginCredentials.username, loginCredentials.password);
    }
    const onChange = (evt) => {
        setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value })
    }


    return (
        <div>
            <h1>Welcome to Home!</h1>
            <h2>Login here</h2>
            <form onChange={onChange}>
                <input placeholder="Username" id="username" />
                <input placeholder="Password" id="password" />
                <button onClick={performLogin}>Login</button>
            </form>
        </div>
    )
}

export function LoggedIn() {
    return (
      <div>
        <h2>You are now logged in!</h2>
      </div>
    )
}

export function Jokes() {
    const [error, setError] = useState('');
    const [jokes, setJokes] = useState({
        joke1: "",
        joke1Reference: "",
        joke2: "",
        joke2Reference: ""
    });
    useEffect(() => {
        apiFacade.getJokes()
        .then(data => setJokes({
            joke1: data.joke1,
            joke1Reference: data.joke1Reference,
            joke2: data.joke2,
            joke2Reference: data.joke2Reference
        }))
        .catch(err => {
            setError("You are not authorized to see this, see console for more information");
            console.log(err);
        })
    }, [])

    return (
        <div>
            <h2>Jokes goes here!</h2>
            {error}
            <Log value={jokes} />
        </div>
    )
}

export function ScrapeSequential() {
    const [error, setError] = useState('');
    const [sequential, setSequential] = useState({
        title: "",
        timeSpent: "",
        tags: []
    });
    useEffect(() => {
        apiFacade.getScrapeSequential()
        .then(data => setSequential({
            title: data.title,
            timeSpent: data.timeSpent,
            tags: data.tags
        }))
        .catch(err => {
            setError("You are not authorized to see this, see console for more information");
            console.log(err);
        })
    }, [])
    return (
        <div>
            {error}
            <Log value={sequential} />
        </div>
    )
}

export function ScrapeParallel() {
    const [parallel, setParallel] = useState({
        title: "",
        timeSpent: "",
        tags: []
    });
    useEffect(() => {
        apiFacade.getScrapeParallel()
        .then(data => setParallel({
            title: data.title,
            timeSpent: data.timeSpent,
            tags: data.tags
        }))
    }, [])
    return (
        <div>
            <Log value={parallel} />
        </div>
    )
}

const Log = ({ value, replacer = null, space = 2 }) => (
    <pre>
      <code>{JSON.stringify(value, replacer, space)}</code>
    </pre>
)