import React, { useContext, useState } from 'react';
import Section from './Section';
import laravel from './Images/laravel.png';
import react from './Images/react.png';
import php from './Images/php.png';
import js from './Images/js.png';
import mysql from './Images/mysql.png';
import css from './Images/css.png';
import html from './Images/html.png';
import OwlCarousal from 'react-elastic-carousel';



function SkillsContent() {

    const myServices = [
        {
            key: 1,
            serviceIcon: <img src={laravel} />,
            serviceName: 'Laravel',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            key: 2,
            serviceIcon: <img src={react} />,
            serviceName: 'ReactJs',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            key: 3,
            serviceIcon: <img src={php} />,
            serviceName: 'PHP',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            key: 4,
            serviceIcon: <img src={js} />,
            serviceName: 'JavaScript',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            key: 5,
            serviceIcon: <img src={mysql} />,
            serviceName: 'MySql',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            key: 6,
            serviceIcon: <img src={css} />,
            serviceName: 'CSS',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }, {
            key: 7,
            serviceIcon: <img src={html} />,
            serviceName: 'HTML',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },

    ];

    const breakpoints = [
        { width: 500, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 1000, itemsToShow: 3 },
        { width: 1300, itemsToShow: 4 },
    ];

    const serviceS = (arr) => {
        return (

            <div class="card">
                <div class="box">
                    <div>{arr.serviceIcon}</div>
                    <div className='text'>{arr.serviceName}</div>
                    <p>{arr.description}</p>
                </div>
            </div>




        );
    }
    return (
        <>
         <OwlCarousal breakPoints={breakpoints}>
                {myServices.map(serviceS)}
            </OwlCarousal>
        </>
    );
}

function Skills() {

    const ca = "carousel owl-carousel";
    return (
        <>
            <Section sectionClassName="skills" sectionId="skills" widthClassName="max-width" contentClassName={ca} titleValue="My Skills" content={<SkillsContent />} />
        </>
    );
}

export default Skills;

