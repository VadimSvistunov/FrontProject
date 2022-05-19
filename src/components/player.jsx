import * as React from 'react';
import { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactAudioPlayer from 'react-audio-player';
import { useSound } from 'use-sound'


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
export default function MusicPlayerSlider({ item, index }) {
    const audioRef = useRef();
    const soundUrl = 'http://localhost:5000/' + item.musicFile;

    const [play] = useSound(soundUrl, {
        sprite: {
            kick: [0, 350],
            hihat: [374, 160],
            snare: [666, 290],
            cowbell: [968, 200],
        }
    });


    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {item.name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {item.author}
                    </Typography>
                </CardContent>
                <CardActions>
                    <ReactAudioPlayer
                        src={'http://localhost:5000/' + item.musicFile}
                        controls
                        ref={audioRef}
                    />
                    <Button
                        aria-label="kick"
                        onMouseDown={() => play({ id: 'kick' })}
                    >
                        1
                    </Button>
                    <Button
                        aria-label="hihat"
                        onMouseDown={() => play({ id: 'hihat' })}
                    >
                        2
                    </Button>
                    <Button
                        aria-label="snare"
                        onMouseDown={() => play({ id: 'snare' })}
                    >
                        3
                    </Button>
                    <Button
                        aria-label="cowbell"
                        onMouseDown={() => play({ id: 'cowbell' })}
                    >
                        4
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}
