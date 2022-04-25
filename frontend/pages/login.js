import Head from 'next/head'
//import Layout from '../components/layout'
import { useState } from 'react'
//import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import config from '../config/config'


export default function Login({token}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')

    const login = async (req, res) => {
        try {
            let result = await axios.post(`${config.URL}/login`,
                { username, password },
                { withCredentials: true })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            setStatus(result.status + ': ' + result.data.user.username)
        }
        catch (e) {
            console.log('error: ', JSON.stringify(e.response))
            setStatus(JSON.stringify(e.response).substring(0, 80) + "...")
        }
    }
  return (

      
<div class="w-full flex flex-wrap">

<title>login</title>
<div class="w-full md:w-1/2 flex flex-col">

    <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
        <a href="http://localhost:3000/" class="bg-black text-white font-bold text-xl p-4">BACK</a>
    </div>

    <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
        <p class="text-center text-3xl">Welcome.</p>
        <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
            <div class="flex flex-col pt-4">
                <label for="email" class="text-lg">Email</label>
                <input type="username" name="username" placeholder="your username" onChange={(e) => setUsername(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>

            <div class="flex flex-col pt-4">
                <label for="password" class="text-lg">Password</label>
                <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>

            <button class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" onClick={login}>Login</button>
        </form>
        <div class="text-center pt-12 pb-12">
            <p>Don't have an account? <a href="register1" class="underline font-semibold">Register here.</a></p>
        </div>
    </div>

</div>


<div class="w-1/2 shadow-2xl">
    <img class="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/random/800x800"/>
</div>
</div>

  )
}
export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}