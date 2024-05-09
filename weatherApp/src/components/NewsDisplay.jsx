import React, { useState, useEffect } from 'react';

export const NewsDisplay = () => {
    const [topStories, setTopStories] = useState([]);

    useEffect(() => {
        const fetchTopNews = async () => {
            const apiKey = 'XUGg4QaG0WWcXMxGewo9yUAt3AG7PkAm';
            const url = (`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`);
            const response = await fetch(url);
            const data = await response.json();
            setTopStories(data.results.slice(0, 5));
        };

        fetchTopNews();
    }, []);

    return (
        <div>
            <h2>Top News Stories</h2>
            <ul>
                {topStories.map((story, index) => (
                    <li key={index}>
                        <h3>{story.title}</h3>
                        <p>By: {story.byline}</p>
                        <p>{story.abstract}</p>
                        {story.multimedia && story.multimedia.length > 0 && (
                            <img src={story.multimedia[0].url} alt={story.title} />
                        )}
                        <a href={story.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

