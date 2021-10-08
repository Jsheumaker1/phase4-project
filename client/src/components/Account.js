import { PaperClipIcon } from '@heroicons/react/solid'
import React, {useState, useEffect} from 'react';
import { LockClosedIcon } from '@heroicons/react/solid'


function Account( {login, user, setUser} ) {  

    const [isRevealPwd, setIsRevealPwd] = useState(false);

    const [userForm, setUserForm] = useState({
        name: user.name,
        username: user.username,
        email: user.email,
        password: user.password_digest
      })

    const handleDelete = () =>{
        console.log(user.id)
        if (window.confirm("Are you sure you want to delete this account?"))
        fetch(`http://localhost:3000/users/${user.id}`, {
          method: 'DELETE'},
          login(false))}

    

    return (
        
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            {/* {setUser.map((user) => { return(                
                <dr key={user.id}> */}
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Account Information</h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userForm.name}</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">User Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userForm.username}</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userForm.email}</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Password</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"  type={isRevealPwd ? "text" : "password"} > {userForm.password}</dd>
                 <br/>
                <button className="mt-1 text-xs text-gray-900 sm:mt-0 sm:grid-cols-3 sm:col-span-1" onClick={() => setIsRevealPwd(!isRevealPwd)} type="submit">Show Password</button>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <div>
                <button onClick={handleDelete} type="submit" className="group relative w-full flex center justify-center  py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                    </span>
                    Delete Account
                </button>
                </div>
                <div>
                <button  type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                    </span>
                    Edit Account
                </button>
                </div>
                
              </div>
            </dl>
          </div>
          {/* </dr>
          )})} */}
        </div>
      )
    }

export default Account;