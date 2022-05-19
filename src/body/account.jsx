import * as React from 'react';
import FormLog from '../components/formForLog'
import '../App.css';
import '../style/registration.css'
import Footer from './footer'

export default function account() {
    return (<>
        <div className='wrapper'>
            <div className='login'>
                <div className='acc'>
                    <FormLog></FormLog>
                </div>
            </div>

        </div>
    </>

    );
}