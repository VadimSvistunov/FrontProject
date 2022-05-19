import * as React from 'react';
import '../App.css';
import '../style/category.css';
import SOUND from '../image/soun_effect.jpg'
import Nature from '../image/nature.jpg'
import Meteorite from '../image/meteorite.png'
import Indoor from '../image/indoor.jpg'
import { Link } from 'react-router-dom'
import Footer from './footer'

function songsCategory() {
    return(
    <div className = "bodyC">
    <div className = "wrapper">
        <div className = "container">
            <h1 className = "backMusic" >Sound Effects for Videos</h1>
            <h2 className = "discover">Download Sound Effects for Videos, Trailers, YouTube, TV / Radio and Games</h2>
            <p className = "browse">Find plenty of sound effects edited and optimized for easy use into everything from Videos, Trailers and Teasers to more traditional Film and other TV / Radio productions. Our cinematic sounds can also be used as audio assets by game designers for their Video Games and Apps. What makes our sound library unique is that every sound collected in this website is original and exclusive to this site! That really means that we are not just compiling and selling other people’s content. This guarantees that our audio assets are fresh, unique and current, and it also keeps the quality consistent. </p>
            <div className = "genre">
            <Link style = {{textDecoration: 'none', color: 'black'}} to = "/riser-and-crescendo">
                <div className = "music hmisuc">
                    <h3 className = "genreMusic">Riser / Crescendo</h3>
                    <img  className = "imgMusic"  alt = {"pic"} src= {SOUND}></img>
                    <p className = "descriptionGenre">Risers, crescendos, sweeps, and other rising sound effects to enhance excitement and suspense.</p>
                </div>
                </Link>
                <Link style = {{textDecoration: 'none', color: 'black'}} to = "/boom-and-slam">
                <div className = "music hmisuc">
                    <h3 className = "genreMusic">Boom / Slam / Impact</h3>
                    <img  className = "imgMusic"  alt = {"pic"} src= {Meteorite}></img>
                    <p className = "descriptionGenre">Collection of booms, slams, thuds and other impact sound effects to be used as a form of punctuation.</p>                      
                </div>
                </Link>
                <Link style = {{textDecoration: 'none', color: 'black'}} to = "/boom-and-slam">
                <div className = "music hmisuc">
                    <h3 className = "genreMusic">Ambience / Indoor</h3>
                    <img  className = "imgMusic"  alt = {"pic"} src= {Indoor}></img>
                    <p className = "descriptionGenre">From common indoor and office background sounds, to wide industrial buildings and vehicle sounds.</p>
                </div>
                </Link>
                <Link style = {{textDecoration: 'none', color: 'black'}} to = "/ambience-and-outdoor">
                <div className = "music hmisuc">
                    <h3 className = "genreMusic">Ambience / Outdoor</h3>
                    <img  className = "imgMusic"  alt = {"pic"} src= {Nature}></img>
                    <p className = "descriptionGenre">Nature background sounds, inspiring outer space landscapes and unusual outdoor ambience sounds.</p>
                </div>
                </Link>

            </div>
        </div>
    </div>
    <Footer></Footer>
</div>
)
}

export default songsCategory;