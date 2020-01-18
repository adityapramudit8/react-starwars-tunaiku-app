import React from 'react'
import { Card, Grid, Image } from 'semantic-ui-react';
import MoviesCover from '../assets/movies-cover.jpg';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Movies( {data}) {
    return (
        <div>
            <h1 >Movies</h1>
            <Grid className="content-middle" columns={3}>
                {data.map((films, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Image className="cover-movie" size='medium' src={MoviesCover}/>
                                    <Card.Header style={{color: "#ffb100"}}>{films.title}</Card.Header>
                                    <strong>Episode : {films.episode_id}</strong>
                                    <Card.Description>
                                        <h3>Description</h3>
                                        <p className="description">{films.opening_crawl}</p>
                                    </Card.Description>
                                    <Link to="/people">
                                        <Button/>
                                    </Link>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    );
                })}
            </Grid>
        </div>
    );
}
