import React from 'react'
import './About.css'
import {SiHiveBlockchain, SiStrapi, SiFsecure} from 'react-icons/si';
import {VscServerProcess} from 'react-icons/vsc';
import About_card from './About_card';

const About = () => {
  return (
    <div className='about'>
        <div className='container'>
            <h2>Growing Protocol Ecosystem</h2>
            <p>Fast growing Website</p>
            <div className='card-container'>
                <div className='card'>
                    <About_card />
                </div>
                <div className='card'>
                    <About_card />
                </div>
                <div className='card'>
                    <About_card />
                </div>
                <div className='card'>
                    <About_card />
                </div>
            </div>
            <a href='/' className='btn'>Use Defi</a>
        </div>
    </div>
  )
}

export default About