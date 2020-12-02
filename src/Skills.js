import React, { useContext, useState } from 'react';
import Section from './Section';
import laravel from './laravel.png';
import react from './react.png';
import php from './php.png';
import js from './js.png';
import mysql from './mysql.png';
import css from './css.png';
import html from './html.png';


function SkillsContent() {
    const image_class = "column left";
    const text_class = "column right";

    const myServices = [
        {
            key : 1,
            serviceIcon : <img src = {laravel}/>,
            serviceName : 'Laravel',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            key : 2,
            serviceIcon : <img src = {react}/>,
            serviceName : 'ReactJs',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            key : 3,
            serviceIcon : <img src = {php}/>,
            serviceName : 'PHP',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            key : 4,
            serviceIcon : <img src = {js}/>,
            serviceName : 'JavaScript',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            key : 5,
            serviceIcon : <img src = {mysql} style = {{width : '120px', height : '80px'}}/>,
            serviceName : 'MySql',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            key : 6,
            serviceIcon : <img src = {css}/>,
            serviceName : 'CSS',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
       
    ];

    const serviceS = (arr)=>{
        return(
            <div class="card">
                <div class="box">
                    {arr.serviceIcon}
                    <div className='text'>{arr.serviceName}</div>
                    <p>{arr.description}</p>
                </div>
            </div>
        );
    }
    return (
        <>
            {myServices.map(serviceS)}
        </>
    );
}

function Skills() {


    return (
        <>
            <Section sectionClassName="skills" sectionId="skills" widthClassName="max-width" contentClassName="skills-content" titleValue="My Skills" content={<SkillsContent />} />
        </>
    );
}

export default Skills;

