import React from 'react'
import { Card, Grid } from 'semantic-ui-react';

export default function Movies( {data}) {
    return (
        <>
            <h1>Movies</h1>
            <Grid columns={3}>
                {data.map((films, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{films.title}</Card.Header>
                                    
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </>
    );
}
