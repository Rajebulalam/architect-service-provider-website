import React from 'react';
import { Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container className='py-5'>
            <div className='border rounded p-3 mb-3'>
                <h4> Difference between authorization and authentication?</h4>
                <p>Authorization means proving true or false and also be approval to do something. To process or action of proving or showing something to be true, genuine or valid. So, authorization defines after log in you can get some extra power to do something than normal user. Authentication means proving you as a user by giving correct address. Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board.</p>
            </div>
            <div className='border rounded p-3 my-3'>
                <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p>Firebase is easy to use and its m secure. The firebase realtime database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. You can create so many authentication like, email password, google, github and facebook ect. and get access from user by this. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            </div>
            <div className='border rounded p-3 mt-3'>
                <h4> What other services does firebase provide other than authentication?</h4>
                <p>Firebase is originally developed by firebase inc and later acquired by Google. It provides different kinds of services that help you to develop high-quality mobile and web applications to boast up your business. It is compatible with Web, iOS, Android, and OS X clients. With firebase, developers don't need to worry about the backend programming, Authentication, API development, database, File storage, etc.</p>
                <p>
                    Firebase provides all the services with very efficient and fast performance.Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency.
                </p>
            </div>
        </Container>
    );
};

export default Blogs;