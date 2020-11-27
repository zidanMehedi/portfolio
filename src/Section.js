import React from 'react';
import me from './Zidan Bro.jpeg';

function Section() {

    return (
        <>
            <section className="home" id="home">
                <div className="max-width">
                    <div className="home-content">
                        <img src = {me} width = '200px' height = '200px'/>
                        <div className='text-1'>Hello, My name is</div>
                        <div className='text-2'>Zidan Mehedi</div>
                        <div className='text-3'>and I am a <span>Web Developer</span></div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Section;