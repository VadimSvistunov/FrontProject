import * as React from 'react';

import FormRegM from '../components/formForRegM'
import FormRegU from '../components/formForRegU'
import '../App.css';
import '../style/registration.css'

export default function registration() {
    return(<>
    <div className = 'wrapper'>
            <div className = 'login'>
                <div className = 'acc'>
                    <p style = {{color:'black' , textAlign:'left'}}>Register as user </p>
                    <FormRegU></FormRegU>
                </div>
            </div>
            
        </div>
        </>

    );
}