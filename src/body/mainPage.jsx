import * as React from "react";
import BtnMusics from '../components/buttonMusics'
import BtnSongs from '../components/btnSongs'
import '../App.css';
import { Link } from 'react-router-dom'
import Footer from './footer'
import Background from "../image/20.png"

function Body() {
    return (
        <>
            <div className='container'>


                <div className='background' >
                    <div className='text'>
                        <h1 className='textField'>Quality Music and Sounds for <br />
                            Videos, Trailers, Animation, Games</h1>
                        <p>Bring music and sound to your YouTube Video, Trailer, Animation or Video Game</p>
                        <p>Affordable Royalty-free Music and Free Downloadable Sound Effects</p>
                    </div>
                </div>

                <section>
                    <div className='wrapper'>
                        <div className='description'>
                            <div className='descriptionText'>
                                <h1 className='textField textDescription'>A variety of audio assets in just one place</h1>
                                <p className='textDescription'>OpenGameMusic is one of the most original and affordable music and sound effects libraries on the web, designed for and created by real audio professionals. Our main focus  has been to offer royalty-free background music which has been edited and optimized for easy deployment into Videos, Slideshows, Advertising, but also Video Games and Animation. We later introduced a whole new category dedicated to professional sound effects for Videos, Trailers, TV / Radio, and other broadcast productions.</p>
                                <div className='btn'>
                                    <div className='btnFreeMusics'>
                                        <Link to="/royalty-free-music">
                                            <BtnMusics></BtnMusics>
                                        </Link>
                                    </div>
                                    <div className='btnFreeSongs'>
                                        <Link to="/sound-effects-for-videos">
                                            <BtnSongs ></BtnSongs>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='features'>
                            <h2 className='textFeatures'>Why OpenGamesMusic? Check out some of our key values and features</h2>
                            <div className='iconsFeatures'>
                                <div>
                                    <img></img>
                                    <h3>Exclusive Content Only</h3>
                                    <p className='textFeaturesd'>All of our instrumental music and sound effects have been produced by our own team, which means that our content is 100% original and exclusive to this site and that we own the copyright to all the audio in our library. Safe and legal.</p>
                                </div>
                                <div>
                                    <img></img>
                                    <h3>Free Downloads Available</h3>
                                    <p className='textFeaturesd'>We offer free downloads for both our music and sound effects! You can download a short version of all our music tracks, and get all our sound effects for free, these assets are licensed under Creative Commons Attribution License.</p>
                                </div>
                                <div>
                                    <img></img>
                                    <h3>Seamless Looping Audio</h3>
                                    <p className='textFeaturesd'>All our music tracks, and many of our sound categories, feature 100% looping audio files, cleverly produced to avoid any unwanted gap or little pause at the end of the file, thus perfect for use in both videos and games.</p>
                                </div>
                                <div>
                                    <img></img>
                                    <h3>Multiple Music Edits</h3>
                                    <p className='textFeaturesd'>Every music piece in our library has been cleverly produced in different edits, so that it can adapt to each media</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        </>
    );
}

export default Body;
