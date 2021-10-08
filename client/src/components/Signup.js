import React, {useState, useEffect} from 'react';
import '../App.css';
import { Card, Button, Form } from 'semantic-ui-react'
import { Popup } from 'reactjs-popup';
import '../index.css'
import 'reactjs-popup/dist/index.css';
import { useHistory } from "react-router-dom";
import { UsersIcon } from '@heroicons/react/outline';



function SignUp ({login, users, setCurrentUser }) {

    const history = useHistory();  

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });

    const handleSignup = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setFormData({
            ...formData, [name]:value
    })}

    const handleSubmit = (e) =>{
        e.preventDefault()
        const newForm = {
            name: formData.name,
            username: formData.username,
            email: formData.email,
            password: formData.password
        }
        
        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify(newForm)
              })
              .then(res=>res.json())
              .then(data=>{
              if (data.error){
                  alert (data.error)}
              else
                {login (true)
                setCurrentUser([...users,data]);
                history.push('/home')}
            })
              
    }



    return (
        <>

    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="px-4 sm:px-0">
            
                <p className="mt-1 text-sm text-gray-600"></p>
                </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
                <form action="/home" method="POST">
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-5 py-6 bg-white sm:p-7">
                        <h3 className="p-7 text-2xl font-medium leading-6 text-gray-900">Account Information</h3>
                            <div className="grid grid-cols-4  gap-8">
                                <div className="col-span-10 sm:col-span-6">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input onChange={handleSignup} value={formData.name} type="text" name="name" id="name" autoComplete="name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                                </div>

                                <div className="col-span-8 sm:col-span-6">
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                                    <input onChange={handleSignup} value={formData.username} type="text" name="username" id="username" autoComplete="username" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                                </div>

                                <div className="col-span-8 sm:col-span-6">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input onChange={handleSignup} value={formData.email} type="text" name="email" id="email" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                                </div>

                                <div className="col-span-8 sm:col-span-6">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                    <input onChange={handleSignup} value={formData.password} type="password" name="password" id="password" autoComplete="password" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button onSubmit={handleSubmit} type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
            <div className="border-t border-gray-200" />
        </div>
        </div>
    </>

    )
}

export default SignUp
