"use client";

import { useState } from 'react';
import axios from 'axios';

const Test = () => {
    const [artist, setArtist] = useState('');
    const [song, setSong] = useState('');
    const [lyrics, setLyrics] = useState('');

    const fetchLyrics = async () => {
        try {
            const response = await axios.post('/api/getLyrics', {
                artist: artist,
                title: song,
            });
            setLyrics(response.data.lyrics || 'Lyrics not found');
        } catch (error) {
            console.error('Error fetching lyrics:', error);
            setLyrics('Lyrics not found');
        }
    };

    return (
        <div style={{ paddingTop: '200px', padding: '20px' }}>
            <h1>Song Lyrics Finder</h1>
            <div style={{ marginBottom: '10px' }}>
                <label>Artist:</label>
                <input
                    type="text"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                    placeholder="Enter artist name"
                    style={{
                        marginLeft: '10px',
                        padding: '5px',
                        color: 'black',
                    }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>Song:</label>
                <input
                    type="text"
                    value={song}
                    onChange={(e) => setSong(e.target.value)}
                    placeholder="Enter song title"
                    style={{
                        marginLeft: '10px',
                        padding: '5px',
                        color: 'black',
                    }}
                />
            </div>
            <button onClick={fetchLyrics} style={{ padding: '5px 10px', cursor: 'pointer' }}>Get Lyrics</button>
            <div style={{ marginTop: '20px' }}>
                <h2>Lyrics:</h2>
                <pre>{lyrics}</pre>
            </div>
        </div>
    );
};

export default Test;
