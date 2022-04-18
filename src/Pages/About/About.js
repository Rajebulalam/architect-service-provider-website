import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container className='py-5'>
            <h2 className='text-center'>About Me</h2>
            <div className='border rounded p-3 mt-4'>
                <h4> <small>Hi There!</small> </h4>
                <p>I'm <strong className='fs-4'> Rajebul Alam khokan</strong>. In next three - four months I am only focusing in my web development with programming hero. Then next two - three years I am focusing on my job career and I will be prove myself as a best web developer in my job sector. Then I am forward to build my own identity in web development and there I want to create my own company in the web development sector. And then I am focusing in my around who has not a job after completing their graduation. I am always say's one thing about me that I am capable to anything learn and I am also ready to do any kinds of hard work to achieving my goal.</p>
            </div>
        </Container>
    );
};

export default About;