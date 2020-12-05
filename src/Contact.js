import React, { useContext } from 'react';
import Section from './Section';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';


const Address = (Props) => {
    return (
        <div className='row'>
            {Props.icon}
            <div className='info'>
                <div className='head'>{Props.head}</div>
                <div className='sub-title'>{Props.sub_title}</div>
            </div>
        </div>
    );
}

const SocialMedia = (Props) => {
    return (
        <a href= {Props.href} target='_blank'>
            <IconButton className={'icon-button ' + Props.site}>
                {Props.icon}
            </IconButton>
        </a>
    );
}


function ContactContent() {
    const image_class = "column left";
    const text_class = "column right";
    const field_name = "field name";
    const field_email = "field email";
    const field_textarea = "field textarea";

    const AddressProperties = [
        {
            icon: <AccountCircleRoundedIcon className='icon' />,
            head: 'Name',
            sub_title: 'Mehedi Hassan Zidan',
        },
        {
            icon: <HomeRoundedIcon className='icon' />,
            head: 'Address',
            sub_title: "Narayanganj, Bangladesh",
        },
        {
            icon: <EmailRoundedIcon className='icon' />,
            head: 'E-Mail',
            sub_title: 'mkzzidan786@gmail.com',
        },
    ];

    const SocialMedias = [
        {
            href: 'http://facebook.com/zidanMehedi.171/',
            site: 'fb',
            icon: <FacebookIcon className=' icon' />,
        },
        {
            href: 'http://linkedin.com/in/zidanmehedi/',
            site: 'ld',
            icon: <LinkedInIcon className='icon' />,
        },
        {
            href: 'http://github.com/zidanMehedi',
            site: 'gh',
            icon: <GitHubIcon className='icon' />,
        },
    ];
    return (
        <>
            <div className={image_class}>
                <div class="text">Contact With Me</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nihil doloribus distinctio itaque illo nam. </p>
                <div className='icons'>
                    {
                        AddressProperties.map((arr) => {
                            return <Address icon={arr.icon} head={arr.head} sub_title={arr.sub_title} />
                        })
                    }
                </div>
                <div className='social-icon'>
                    {
                        SocialMedias.map((arr)=>{
                            return <SocialMedia href = {arr.href} site = {arr.site} icon = {arr.icon}/>
                        })
                    }
                </div>
            </div>
            <div className={text_class}>
                <div className='text'>Message Me</div>
                <div className='void'></div>
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

