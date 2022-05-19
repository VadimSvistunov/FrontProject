import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import useAuth from '../hooks/useAuth';
import { increase, decrease } from '../redux/action';
import Footer from './footer'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import Modal from '../components/modal';
import MusicPlayerSlider from '../components/player'

export default function TemplateForGenre() {
    const [music, setMusic] = useState()
    const [active, setActive] = useState(false)
    const [play, setPlay] = useState(false)
    const audioEl = useRef(null);

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
    // const playing = () => {
    //     audioEl.current.play()
    // }

    return (<>
        <div className='wrapper'>
            {/* <button onClick={OnAddHandler}> add </button>
            {auth.isLoaded && (auth.isAdmin ? (
                <button onClick={onSubHAndler}> delete </button>
            ):( <p>ds</p>
            ))} */}
            {/* <div className='item' style={{ display: 'grid', gridAutoRows: 'repeat(12,1fr)' }}>
                <p id="inner" style={{ color: 'black', width: '100px' }}></p>
            </div> */}
            <button onClick={() => submitModalAddMusic()}>add music</button>
            {music?.musics.map((item, index) => {
                return (
                    <>
                        <MusicPlayerSlider item = {item} index = {index} />
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
