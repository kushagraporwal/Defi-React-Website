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
                    <About_card  icon={<SiHiveBlockchain className='icon' />} heading='Reliable tammper-proof network'/>
                </div>
                <div className='card'>
                    <About_card icon={<SiStrapi className='icon' />} heading='Seamless tammper-proof network' text='Integrate with any current or future blockchain'/>
                </div>
                <div className='card'>
                    <About_card icon={<SiFsecure className='icon' />} heading='Proven ready made solutions' text='Integrate pre build time-tested oracle solutions'/>
                </div>
                <div className='card'>
                    <About_card icon={<VscServerProcess className='icon' />} heading='Secure off chain computation' text='Use a decentralized network of defi'/>
                </div>
            </div>
            <a href='/' className='btn'>Use Defi</a>
        </div>
    </div>
  )
}

export default About