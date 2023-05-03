import { useEffect, useState } from "react";
import axios from 'axios'


function Music() {
    const CLIENT_ID = "021c4b246678444496ea893d82ffe60a"
    const REDIRECT_URI = "http://localhost:3000/about/music"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("")

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem('token')

        if (!token && hash) {
            token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1]
            console.log(token);

            window.location.hash = ''
            window.localStorage.setItem('token', token)
            setToken(token)
        }



    }, [])

    const logout = () => {
        setToken('')
        window.localStorage.removeItem('token')
    }






    return (
        <div className="App">


            <div className="col-lg-6 col-md-12">
                <p>For music, I'm one of those people who say they like all music, except I actually like everything.</p>
                <p>From rap, to folk. From jazz to rock. But why tell you when I can show you some of the things I like and also show you how did I used Spotify's API.</p>
                <p>Heads up, theres probably going to be a lot of Kanye West around here. </p>
            </div>

            <h1>Spotify React</h1>
            {!token ? <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a> : <button onClick={logout}>Log Out</button>}







        </div>
    );
}

export default Music;