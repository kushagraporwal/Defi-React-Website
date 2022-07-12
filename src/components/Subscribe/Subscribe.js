import React from 'react'
import './Subscribe.css'
const Subscribe = () => {
  return (
    <div className='sucscribe'>
        <div className='content'>
            <h2>Join our defi community</h2>
            <form action="">
                <div className='form-container display-col'>
                    <input type="email" name="email" placeholder="Enter your email" />
                    <button className='btn'>Sign Up</button>
                </div>
                <div className='form-container'>
                    <input type="checkbox" /><p>Yes I agree to receive email</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Subscribe