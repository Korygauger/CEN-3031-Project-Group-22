import React, {useState} from "react";
import { Typography, Button, IconButton, AppBar, Card, Box, CardActions, CardActionArea, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material'
import FlashcardList from "../FlashcardList";

function Flashcards () {
    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
    return (
        <div className="home">
            <CssBaseline/>
            <FlashcardList flashcards={flashcards} />
        </div>
    );
}

const SAMPLE_FLASHCARDS = [
    {
        id: 1,
        question: 'What is 2 + 2?' ,
        answer: '4',
        options: [
            '2',
            '3',
            '4',
            '5',
        ]
    },
    {
        id: 2,
        question: 'What is 3 + 3?' ,
        answer: '6',
        options: [
            '4',
            '5',
            '6',
            '7',
        ]
    },
    {
        id: 3,
        question: 'What is 4 + 4?' ,
        answer: '8',
        options: [
            '5',
            '6',
            '7',
            '8',
        ]
    }
]

export default Flashcards