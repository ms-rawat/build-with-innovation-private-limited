import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import DataContext from './components/GlobleContext';

function Login() {
  
    const {setUser}=useContext(DataContext)
    const navigate = useNavigate();




 let fetchdata=async(values)=>{
      let responce= await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
          })
          
        
          if(responce.ok)
          {
            const result = await responce.json();
            setUser(result)
            document.cookie = `token=${result.token}; expires=${new Date(result.expiresIn).toUTCString()}; `;
            navigate('/home')
          }
          else{
            let element=document.querySelector('.message')
            element.innerHTML="error! try again"
          }
          
                      
    }

    const formik=useFormik({
        initialValues:{
            username: 'kminchelle',
            password: '0lelplR',

        },
        onSubmit:(values)=>{
            console.log(values)
            fetchdata(values)
        }
    }
          
    )
  return (
    <div className="mx-auto mt-10 bg-slate-300 w-5/6  lg:w-1/4 md:2/4 p-8 rounded-lg shadow-lg">
      <form action="" className="flex flex-col gap-6 items-center" onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="username" className="text-sm font-semibold text-gray-700">
            Username
          </label>
          <input
            name='username'
            value={formik.values.username}
            onChange={formik.handleChange}
            type="text"
            placeholder="Enter your username"
            className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md  focus:outline-none bg-slate-100 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="text-sm font-semibold text-gray-700">
            Password
          </label>
          <input
            name='password'
            value={formik.values.password}
            onChange={formik.handleChange}

            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 mt-1 text-gray-700 border bg-slate-100 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="message"></div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>

        {/* Additional content or links can be added here */}
      </form>
    </div>
  );
}

export default Login;
