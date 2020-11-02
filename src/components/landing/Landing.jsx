import React from 'react';
import './Landing.scss';
import { Link } from 'react-router-dom';
import PumpkinIcon from '../../icons/Pumpkin.icon';
const Landing = () => (
    <div className="container-landing-outer">
        <div className='container-landing-header'>
            <h1>Trick || Treat</h1>
            <PumpkinIcon />
        </div>
        <div className='container-landing-options-container'>
            <h3>I want to</h3>
            <div className='container-landing-options'>
                <div className='container-landing-options-links'>
                    <Link to='/distribute' className="landing-link">Give out treats</Link>
                </div>
                <div className='container-landing-options-links'>
                    <Link to='/collect' className="landing-link">Collect treats</Link>
                </div>
            </div>
        </div>
    </div>

);


export default Landing;