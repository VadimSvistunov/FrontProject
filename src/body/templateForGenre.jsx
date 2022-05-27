import * as React from 'react';
import '../App.css';
import Footer from './footer'
import { useState, useEffect, useRef } from 'react'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Modal from '../components/modal';
import MusicPlayerSlider from '../components/player'
import BtnMusics from '../components/btnadd'
import useAuth from '../hooks/useAuth'

export default function TemplateForGenre() {
    const [music, setMusic] = useState()
    const [active, setActive] = useState(false)
    const [play, setPlay] = useState(false)
    const audioEl = useRef(null);
    const url = useLocation();
    const genre = url.pathname
    const auth = useAuth()    


    useEffect(() => {
        axios.get(`http://localhost:5000/api/music/getAll`)
            .then((response) => {
                setMusic(response.data);
            })
    }, []);

    const submitModalAddMusic = () => {
        setActive(true)
    }
    console.log(music)

    return (<>
        <div className='wrapper'>
            {/* <button onClick={OnAddHandler}> add </button>
            {auth.isLoaded && (auth.isAdmin ? (
                <button onClick={onSubHAndler}> delete </button>
            ):( <p>ds</p>
            ))} */}
            {auth.isLoaded && auth.user ? (<button onClick={() => submitModalAddMusic()} style={{border:"none", backgroundColor:"white"}} ><BtnMusics></BtnMusics></button>) : ""}

            {music?.musics.map((item, index) => {
                return (
                    <> 
                    {item.genre === genre.split('/').pop().toLowerCase() ? <MusicPlayerSlider item = {item} index = {index} /> : ""}
                    </>
                );
            })}
            {/* <button onClick={playing}>play</button>
            <audio src={Music} ref={audioEl}></audio> */}
        </div>
        <Footer></Footer>
        <Modal active={active} setActive={setActive} />
    </>);
}
