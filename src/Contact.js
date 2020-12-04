import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Section from './Section';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';


function ContactContent() {
    const image_class = "column left";
    const text_class = "column right";
    const field_name = "field name";
    const field_email = "field email";
    const field_textarea = "field textarea";
    return (
        <>
            <div className={image_class}>
                <div class="text">Contact With Me</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nihil doloribus distinctio itaque illo nam. </p>
                <div className='icons'>
                    <div className='row'>
                        <AccountCircleRoundedIcon className='icon' />
                        <div className='info'>
                            <div className='head'>Name</div>
                            <div className='sub-title'>Mehedi Hassan Zidan</div>
                        </div>
                    </div>
                    <div className='row'>
                        <HomeRoundedIcon className='icon' />
                        <div className='info'>
                            <div className='head'>Address</div>
                            <div className='sub-title'>Narayanganj, Bangladesh</div>
                        </div>
                    </div>
                    <div className='row'>
                        <EmailRoundedIcon className='icon' />
                        <div className='info'>
                            <div className='head'>E-Mail</div>
                            <div className='sub-title'>mkzzidan786@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={text_class}>
                <div className='text'>Message Me</div>
                <form action='#'>
                    <div className='fields'>
                        <div className={field_name}>
                            <input type='text' placeholder='Name'></input>
                        </div>
                        <div className={field_email}>
                            <input type='text' placeholder='Email'></input>
                        </div>
                    </div>
                    <div className='field'>
                        <input type='text' placeholder='Subject'></input>
                    </div>
                    <div className={field_textarea}>
                        <textarea cols='30' rows='10' placeholder='Message'></textarea>
                    </div>
                    <div className='button'>
                        <button type='submit' > Send </button>
                    </div>
                </form>
            </div>
        </>
    );
}

function Contact() {


    return (
        <>
            <Section sectionClassName="contact" sectionId="contact" widthClassName="max-width" contentClassName="contact-content" titleValue="Contact" content={<ContactContent />} />
        </>
    );
}

export default Contact;

