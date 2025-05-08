import React, {useState} from 'react'
import PageControl from '../components/pageControl'

const Login =() =>{

    const[isLoginMode, setIsLoginMode] = useState(false)
  return (
    <div>

   <PageControl/>
   <div className='flex justify-center items-center h-screen bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200'>
    <div className='w-[430px] bg-white p-8 rounded-2xl shadow-lg'>

        {/* HEADER TITLE */}
        <div className='flex justify-center mb-4'>
            <h2 className='text-3xl font-semibold text-center'>{isLoginMode ? "Login" : "sign up"}</h2>
        </div>

        {/*Tab control */}
          <div className='relative flex h-12 mb-6 border border-grey-300 rounded-full overflow-hidden'>
          <button onClick={() => setIsLoginMode(true)} className={`w-1/2  text-lg font-medium transition-all z-10  ${isLoginMode ? "text-white" : "text-black"}` }>
            Login
          </button>
          <button onClick={()=> setIsLoginMode(false)} className={`w-1/2 text-lg font-medium transition-all z-10 ${!isLoginMode ? "text-white" : "text-black"}`}>
            sign up
          </button>
          <div className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 ${isLoginMode ? "left-0" : "left-1/2"}`}></div>
          </div>

          {/* Forms selection */}

          <form className='space-y-4'>
            {!isLoginMode &&
            (
                <input type="text" placeholder='Name' required className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400'/> 
            )}

            {/* shared input field */}
            <input type="email" placeholder='Email Address' required className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400' />
            <input type="Password" placeholder='Password' required  className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400'/>

            {/*Signup field*/}
            {!isLoginMode &&(
                <input type="password" placeholder='Comfirm Password' required  className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400'/>
            )}

                {/*Forget password for login*/}
                {isLoginMode && (
                    <div className=' text-right'>
                        <p className='text-cyan-600 hover:underline'>
                            <a href="#">Forget Password</a>
                        </p>
                    </div>
                )}

                {/* shared button */}
                 <button className='w-full p-3  bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 rounded-2xl text-white text-lg font-medium hover:opacity-90 transition'>
                    {isLoginMode ? "Login" : "signUp"}
                 </button>

                 {/* Switch link */}
                 <p className='text-center text-gray-600'>
                    {isLoginMode ? "Don't have an account?" : "Already have an account?"}
                    <a href="#" onClick={(e) => setIsLoginMode(!isLoginMode)}  className='text-cyan-600 hover:underline'>
                        {isLoginMode ? "signUp now" : "Login"}</a>
                 </p>
          </form>
    </div>
  </div>
  </div>
  )
}

export default Login

