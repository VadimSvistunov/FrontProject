
import * as React from 'react';
import Form from '../components/formContact';
import '../style/contact.css';
import '../App.css';
import SendBtn from '../components/btnSend';
import Footer from './footer'


function contactPage() {
    return (
        <>
            <div className='wrapper'>
                <div className='container1'>
                    <h1 className='contact'>Contact Us</h1>
                    <h2 className='ds'>Looking for support? Want to say Hi? Feel free to get in touch with us</h2>
                    <p className='feel'>Feel free to get in touch with us for any information or to get support for any order you have made on OpenGameMusicS. Please allow 24 hours for the response, we’ll get back to you as soon as possible.  Limited after-hours and weekend / holiday support is not guaranteed. We always try our best to reply to everyone, so please do not send the same request more than once.</p>
                    <Form></Form>

                </div>
                <SendBtn></SendBtn>
            </div>
            <Footer></Footer>
        </>

    );
}

export default contactPage;