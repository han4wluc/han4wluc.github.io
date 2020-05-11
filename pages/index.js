import FlexView from 'react-flexview'
import Link from 'next/link'
import profileImg from '../public/static/images/profile.jpg'
import email from '../public/static/images/email.png'
import { FaGithub, FaGitlab, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const meta = {
    title: "han4wluc",
    tags: ["han4wluc", "freelance", "job", "fullstack", "developer"],
    layout: "page",
    publishDate: "2020-04-29",
    modifiedDate: false,
    seoDescription: "han4wluc homepage and blog. Luciano Hanyon Wu is a freelance fullstack developer."
};

function Index() {
    return (
        <div style={{
            maxWidth: 600
        }}>
            <FlexView vAlignContent="center" width={340}>
                <FlexView marginRight={32}> 
                    <img alt="han4wluc profile picture" className="profile-img" src={profileImg} width="64" height="64"/>
                </FlexView>
                <FlexView column>
                    <div className="name-title"> Luciano Hanyon Wu </div>
                    <div className="name-subtitle"> Freelance Fullstack Developer </div>
                </FlexView>
            </FlexView>

            <FlexView className="social-icons-container" marginTop={16} marginLeft={96} vAlignContent="center" wrap={true}>
                <a className="social-icon" href="https://github.com/han4wluc" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>

                <a className="social-icon" href="https://gitlab.com/han4wluc" target="_blank" rel="noopener noreferrer">
                    <FaGitlab/>
                </a>

                <a className="social-icon" href="https://twitter.com/han4wluc" target="_blank" rel="noopener noreferrer">
                    <FaTwitter style={{color: '#1da1f2'}} />
                </a>

                <a className="social-icon" href="https://linkedin.com/in/han4wluc" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin style={{color: '#0073b1'}} />
                </a>

                <img alt="han4wluc contact" src={email} width="140" height="14"></img>

            </FlexView>

            <p>
                I'm currently <b>available</b> for freelance work. Write me about your project by <a href="http://han4wluc.mikecrm.com/rIvNPzI" target="_blank" rel="noopener noreferrer">filling this form</a>, we can then schedule a session to talk about it.
            </p>

            <h4 style={{marginTop: 32}}>
                Personal Background
            </h4>

            <p>
                I grew in in Italy, Rome, went to university in Japan, Tokyo, and have been working in Shanghai for the past years. I currently live in China, Nanjing.
                I fluently speak English, Italian, Chinese and Japanese. I have been actively programming since 2014.
            </p>

            <h4>
                Professional Background
            </h4>

            <p>
                I have spent most of professional career working in startups and international environments. My most notable experiences were:
                <br/>
                <ul>
                    <li>In 2015 I joined a small startup in Shanghai, we developed two English language learning mobile apps using react-native. One of those apps won a Xiaomi Golden App Award</li>
                    <li>In 2017 have been Co-founder CTO of a small startup, which then turned into <a href="https://www.edugo.ai" target="_blank" rel="noopener noreferrer">edugo.ai</a>, here I developed from scratch a mobile app for learning Chinese. </li>
                    <li>In 2019 I have been a tech lead in a fast-growing Chinese startup. We developed a chatbot that has served over a hundred million users in the Chinese e-commerce sector. </li>
                </ul>
                <a href="/static/images/han4wluc_cv.pdf" target="_blank" rel="noopener noreferrer">Read my full CV</a>
            </p>

            <h4>
                Tech Stack
            </h4>

            <p>
                I am a <b>Fullstack Developer</b>. I enjoy participating in the entire stack and lifecycle of application development.
                <br />
                My primary programming language is nodejs/typescript.
                <br />
                My secondary programming language is Python, which I use it for scripting, data analytics and machine learning.
                <ul>
                    <li>
                        <b>Frontend</b>: Reactjs, Mobx, Redux
                    </li>
                    <li>
                        <b>Mobile</b>: React-native
                    </li>
                    <li>
                        <b>Backend</b>: Nodejs/typescript with Express, Nestjs, TypeORM. Python with Flask.
                    </li>
                    <li>
                        <b>Database</b>: Postgres/MySQL
                    </li>
                    <li>
                        <b>Devops</b>: Docker-compose, Gitlab CI/CD
                    </li>
                </ul>
                I also have experience in designing and implementing <b>microservices</b> and using libraries like Kafka and Grpc.
                <br />
                Every project has different requirements, and I am very eager to use learn different technologies for different projects.
            </p>

            <h4>
                Personal Projects
            </h4>

            <p>
                A list of personal projects. I have started maintaining this list since 2020. 
                <br />
                <h5>2020</h5>
                <ul>
                    <li>
                        <b><a href="https://github.com/han4wluc/tsadmin-dashboard" target="_blank" rel="noopener noreferrer">tsadmin</a></b>: A library to generate dashboards in order to perform CRUD operations on backend data that utilized TypeORM.
                    </li>
                    <li>
                        <b><a href="https://github.com/han4wluc/mobx-react-bind" target="_blank" rel="noopener noreferrer">mobx-react-bind</a></b>: A state management library to be used with mobx and react.
                    </li>
                    <li>
                        <b>
                            <a href="https://about.tedo.tech" target="_blank" rel="noopener noreferrer">Tedo</a>
                        </b>: A web and API platform to create and consume code templates.
                    </li>
                </ul>
            </p>

            <p>
                <h4>Posts</h4>
                <ul>
                    <li>
                        <b><Link href="/blog/looking-at-the-future-of-covid-19-through-a-story-of-alibaba-during-sars-2003">Looking at the future of COVID-19, through a Story of Alibaba during SARS 2003</Link></b>
                    </li>
                </ul>
            </p>

            <style jsx>{`
                .social-icon {
                    font-size: 20px;
                    margin-right: 16px;
                }

                .name-title {
                    font-size: 24px;
                    font-weight: bold;
                }
                .name-subtitle {
                    font-size: 18px;
                    font-weight: 200;
                    color: #555;
                    margin-top: 8px;
                }
                .profile-img {
                    border-radius: 64px;
                }
            `}</style>
        </div>
    )
}

export default Index;
