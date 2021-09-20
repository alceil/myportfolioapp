import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='Ashish Tom | YouTuber | TinkerHub Campus Lead @ Toc H Kochi| Uplifting the student community in the field of tech and personal growth'
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Mentor</h3>
                    <p className='about-details'>
                        Mentoring and guiding people in the
                        right direction has always been my thing.Whether,it be my 
                        juniors,fellow classmates I guide and mentor those who need 
                        help in web development,career guidance etc..
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Blogger</h3>
                    <p className='about-details'>
                        I've been writing blogs for some time now related to
                        web development,hackathons,tech events etc. Check out{' '}
                        <a
                            className='about-link-element'
                            href='https://medium.com/@ashishtom_55952'
                        >
                            my medium blogs today!
                        </a>
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>Youtuber</h3>
                    <p className='about-details'>
                        Seeing there is no proper youtube channel to guide engg students
                        towards a better high paying career. I started a youtube channel in 2020 to help
                        and guide people about the oppurtunities available in the Tech Industry{' '}
                        <a
                            className='about-link-element'
                            href='https://www.youtube.com/channel/UCLJ_bolBGb30qBCUxp_o8JA'
                        >
                            subscribe to my channel today!
                        </a>
                    </p>
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;
