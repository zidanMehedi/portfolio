import React, { useContext } from 'react';
import Section from './Section';
import me from './Images/Zidan Bro.jpeg';
import Typical from "react-typical";
import cv from './Images/Mehedi_Hassan_Zidan.pdf'


function AboutContent() {
    const image_class = "column left";
    const text_class = "column right";

    const Download = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <div className={image_class}>
                <img src={me} />
            </div>
            <div class={text_class}>
                <div class="text">Hello I'm Zidan. I'm a <span>
                <Typical
                    steps={[
                        'Web Developer',
                        1000,
                        ' Web Designer',
                        1000,
                    ]}
                    wrapper = "b"
                    loop={Infinity}
                /></span></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nihil doloribus distinctio itaque illo nam. Error adipisci facilis perspiciatis odit, facere, repellat aut dolorem at quas amet explicabo, sit sed minus ea voluptate deleniti est esse cumque corrupti voluptatum iusto nihil vel? Ea mollitia, adipisci totam cupiditate consequatur qui beatae aliquam possimus? Et illo provident rerum cumque modi omnis praesentium?</p>
                <a id = 'download' href = {cv} traget = '_blank'>Download CV</a>
            </div>

        </>
    );
}

function About() {


    return (
        <>
            <Section sectionClassName="about" sectionId="about" widthClassName="max-width" contentClassName="about-content" titleValue="About Me" content = {<AboutContent/>}/>
        </>
    );
}

export default About;

