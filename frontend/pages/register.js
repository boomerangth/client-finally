import { useState } from 'react'
import Head from 'next/head'
//import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
//import Navbar from '../components/navbar'
import axios from 'axios'
import config from '../config/config'
export default function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')

    const profileUser = async () => {
        console.log('token: ', token)
        const users = await axios.get(`${config.URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log('user: ', users.data)
    }

    const register = async (req, res) => {
        try {
            let result = await axios.post(`${config.URL}/register`,
                { username, email, password })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            setStatus(result.data.message)
        }
        catch (e) {
            console.log(e)
        }

    }
    return (
        <div class="w-full flex flex-wrap">

        <title>register</title>
        <div class="w-full md:w-1/2 flex flex-col">

            <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
                <a href="login" class="bg-black text-white font-bold text-xl p-4" alt="Logo">BACK</a>
            </div>

            <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                <p class="text-center text-3xl">Join Us.</p>
                <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
                    <div class="flex flex-col pt-4">
                        <label for="name" class="text-lg">Username</label>
                        <input type="username" name="username" placeholder="username" onChange={(e) => setUsername(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <div class="flex flex-col pt-4">
                        <label for="email" class="text-lg">Email</label>
                        <input type="email" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
    
                    <div class="flex flex-col pt-4">
                        <label for="password" class="text-lg">Password</label>
                        <input type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    {/* <div class="flex flex-col pt-4">
                        <label for="confirm-password" class="text-lg">Confirm Password</label>
                        <input type="password" id="confirm-password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div> */}
    
                    
                    <button class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" onClick={register}>Register</button>
                </form>
                <div class="text-center pt-12 pb-12">
                    <p>Already have an account? <a href="login" class="underline font-semibold">Log in here.</a></p>
                </div>
            </div>

        </div>

        
        <div class="w-1/2 shadow-2xl">
            <img class="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/random" alt="Background" />
        </div>
    </div>
  
    )
  }