import * as React from 'react';
import '../App.css';
import YT from '../image/yt_icon.png';
import VK from '../image/vk_icon.png';
import FB from '../image/face_icon.png';
import { Link } from 'react-router-dom'
export default function footer() { 
    return(
        <footer>
             <div className = 'footer'>
                <div className = 'wrapper'>
                    <div className = 'footerGrid'>
                        <div>
                            <h3 style={{color:"white"}}>Exclusive Content Only</h3>
                            <p></p>
                            </div>
                        <div>
                            <h3 style={{color:"white"}}>Free Downloads Available</h3>
                            <p></p>
                            </div>
                        <div>
                            <h3 style={{color:"white"}}>Seamless Looping Audio</h3>
                            <p></p> 
                        </div>
                        <div>                       
                            <h3 style={{color:"white"}}>Multiple Music Edits</h3>
                            <p></p>
                        </div>
                    </div>
                    <div className = 'icons'>

                    </div>
                    <div className = 'social' style = {{textAlign : 'center'}}>
                            <img alt = {"pic"} src = {YT}></img>
                            <img alt = {"pic"} src = {VK}></img>
                            <img alt = {"pic"} src = {FB}></img>
                    </div>
                </div>
                <div style = {{position:'relative', height: '1px', backgroundColor:'black'}}>
                    <div style = {{position: 'absolute', top:'0', left:'50%', marginLeft: '-50vw', width: '100vw', height: '1px', backgroundColor: 'white'}}></div>
                </div>
                <div className = 'wrapper'>
                    <p>OpenGameMusic.com by FenomeN. Copyright © 2021-2021 All rights reserved.</p>
                </div>
            </div>
            <div>
                
            </div>   
                
            </footer>    
    );
}