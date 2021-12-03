import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './MoveCard.scss'

const MoveCard = (props) => {
    const { title,poster_path,overview } = props.movie
    const shortOverview=overview.slice(0,100)
    return (
        <div className="col-md-3 mb-3 ">
            <Card className="moviCard" >
                <Card.Img style={{height:'300px'}} variant="top" src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                       {shortOverview} <span className="text-primary">see more....</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MoveCard;