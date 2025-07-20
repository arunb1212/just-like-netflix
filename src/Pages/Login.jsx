import React from 'react'
import Footer from '../Components/Footer'
import { useState } from 'react'

const Login = () => {
    const [pass, setPass] = useState(false)
    const [sign, setSign] = useState("SignUp")
    return (
        <div className=''>
            <div
                className='relative min-h-screen flex justify-center flex-col items-center bg-cover bg-center'
                style={{ backgroundImage: "url('./public/assets/background_banner.jpg')" }}
            >
                <div className='w-full flex flex-col items-center'>
                    <img className='absolute left-[30px] h-[50px] top-[30px]' src="./public/assets/logo.png" alt="" />
                    <div className='bg-[#040A0A] w-[500px] flex justify-center items-center flex-col'>
                        <h1 className='text-2xl'>{sign}</h1>
                        <form className='flex items-center gap-[20px] justify-center rounded flex-col py-[20px]' action="">
                            {sign==="SignUp"?<input type='text' className='w-[300px] h-[40px] border rounded outline-none' name="" placeholder='Enter Name' id="" />:<></>
                            }
                            <input className='w-[300px] h-[40px] border rounded outline-none' name="" placeholder='email or mobile number' id="" />
                            <div className='relative w-[300px] '>
                                <input type={pass ? "text" : "password"} className='h-[40px] rounded outline-none border w-[300px]' placeholder='Password' />
                                <p onClick={() => setPass(prev => (!prev))} className=' cursor-pointer absolute  translate-1/2 right-[30px] top-[20px] -translate-y-1/2 '>{pass ? "Hide" : "Show"}
                                </p>
                            </div>

                            <div className='flex gap-[10px]'>
                                <input type="checkbox" name="" id="check" />
                                <label htmlFor="check">Remember Me </label>
                            </div>
                            <button className='bg-[#C11119] w-[300px] h-[40px] rounded '>Sign In</button>
                            {
                                sign==="SignIn"?<p className='text-gray-500 '>New to Netflix? <span onClick={()=>setSign("SignUp")} className='text-white cursor-pointer'>Sign Up</span></p>:
                                <p className='text-gray-500'>Already have a account? <span onClick={()=>setSign("SignIn")} className='text-white cursor-pointer'  >Sign In</span></p>

                            }

                        </form>
                    </div>
                </div>

            </div>
            <div className=' flex items-center w-full  h-[200px]'>
                <Footer />
            </div>
        </div>
    )
}

export default Login