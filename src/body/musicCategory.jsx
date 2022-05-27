import * as React from 'react';
import '../App.css';
import '../style/category.css';
import Ski from '../image/ski.jpg';
import Orch from '../image/orch.jpg';
import ClassicG from '../image/classicGuitar.jpg';
import ElectricG from '../image/electric.jpg';
import ElectricM from '../image/electricM.jpg';
import Game from '../image/game.jpg';
import Movie from '../image/movie.jpg';
import { Link } from 'react-router-dom'
import Footer from './footer'


function musicCategory() {
    return (<>
        <div className="bodyC">
            <div className="wrapper">
                <div className="container">
                    <h1 className="backMusic" >Royalty-free Background Music</h1>
                    <h2 className="discover">Discover our Instrumental Music library for Videos, Animation and Games</h2>
                    <p className="browse">Browse our royalty-free background music catalog and download our instrumental music tracks to use them in any kind of media such as YouTube Videos, Films and Movies, Commercials, Trailers and Teasers, Advertising, Video Games and Apps, Animation, Documentaries, and much more. Our collection of looping music is 100% free of royalties, fresh and exclusive to this website, plus every composition has been cleverly produced to offer the same type of multiple edits, different lengths, and to loop seamlessly. </p>
                    <div className="genre">
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/royalty-free-music/pop">
                            <div className="music hmisuc">
                                <h3 className="genreMusic">POP / Trailer Music</h3>
                                <img className="imgMusic" alt={"pic"} src={Ski}></img>
                                <p className="descriptionGenre">Find the ideal royalty-free track to use as background for the most impactful YouTube videos and movie trailers.</p>
                            </div>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/royalty-free-music/epic">
                            <div className="music hmisuc">
                                <h3 className="genreMusic">Epic / Orchestral Music</h3>
                                <img className="imgMusic" alt={"pic"} src={Orch}></img>
                                <p className="descriptionGenre">Impress your audience with our most epic and grand orchestral instrumental tracks for videos, trailers, advertising.</p>
                            </div>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/royalty-free-music/rock">
                            <div className="music hmisuc">
                                <h3 className="genreMusic">Indie Rock / Energetic Music</h3>
                                <img className="imgMusic" alt={"pic"} src={ElectricG}></img>
                                <p className="descriptionGenre">Let’s rock with our most adrenaline pumping instrumental rock tracks for videos, trailers, commercials.</p>
                            </div>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/royalty-free-music/electronic">
                            <div className="music hmisuc">
                                <h3 className="genreMusic">Electronic / EDM / Synth Music</h3>
                                <img className="imgMusic" alt={"pic"} src={ElectricM}></img>
                                <p className="descriptionGenre">Don’t miss our analog and digital electronic and synth music for any video, trailer, or web commercial.</p>
                            </div>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/royalty-free-music/easy">
                            <div className="music hmisuc">
                                <h3 className="genreMusic">Easy Listening Music</h3>
                                <img className="imgMusic" alt={"pic"} src={Ski}></img>
                                <p className="descriptionGenre">Take it easy and relax with this fresh collection of easygoing and ambient royalty free music for media of any kind.</p>
                            </div>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/royalty-free-music/acoustic">
                            <div className="music hmisuc">
                                <h3 className="genreMusic">Acoustic / Piano Music</h3>
                                <img className="imgMusic" alt={"pic"} src={ClassicG}></img>
                                <p className="descriptionGenre">Need unplugged instrumental music for your video? Look no further! Our finest acoustic guitar and piano songs are all here.</p>
                            </div>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/royalty-free-music/game">
                            <div className="music hmisuc">
                                <h3 className="genreMusic">Video Game Music</h3>
                                <img className="imgMusic" alt={"pic"} src={Game}></img>
                                <p className="descriptionGenre">The retro game music era is back, fuel your video games with our 8-bit and 16-bit chiptunes collection.</p>
                            </div>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/royalty-free-music/movie">
                            <div className="music hmisuc">
                                <h3 className="genreMusic">Movie / Underscore Music</h3>
                                <img className="imgMusic" alt={"pic"} src={Movie}></img>
                                <p className="descriptionGenre">Download inspiring, insightful and emotional background music for films, movies and trailers.</p>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    </>
    );
}

export default musicCategory;