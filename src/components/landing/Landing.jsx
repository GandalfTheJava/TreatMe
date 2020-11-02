import React from 'react';
import './Landing.scss';
import { Link } from 'react-router-dom';
import PumpkinIcon from '../../icons/Pumpkin.icon';
const Landing = () => (
    <div className="container-landing-outer">
        <div className='container-landing-header'>
            <h2>Trick || Treat</h2>
            <PumpkinIcon />
        </div>
        <div className='container-landing-options-container'>
            <h6>I want to</h6>
            <div className='container-landing-options'>
                <Link to='/distribute'>distribute treats</Link>
                <Link to='/collect'>collect treats</Link>
            </div>
        </div>
    </div>

);


export default Landing;