import React from "react";
import {Card, Button, Grid} from 'semantic-ui-react'
import Review from "./Review.js"

const Cards = (props) => {
  
  return (
    <div >
      <Grid columns={3} divided>
        <Grid.Row >
            {props.cards.map( card => (
              <Grid.Column  >
                <div>
                  {card.showFront ? 
                    <Card 
                      onClick={() => props.toggleShowFunction(card)} 
                      header={card.front} 
                      style={{padding: "10px", height: "125px"} }
                    >
                    <Card.Description as="h3">
                        {card.front}
                      </Card.Description>
                      <Card.Meta>
                        <span> Correct: {card.correct}, Wrong: {card.wrong} </span>
                      </Card.Meta>
                    </Card>
                    :
                    <div>
                      <Card  onClick={() => props.toggleShowFunction(card)} header={card.back} style={{padding: "10px", height: "125px"} } />
                      <Button onClick={() => props.upCorrect(card) }>I Got it Right!</Button>
                      <Button onClick={() => props.upWrong(card) }>I Got it Wrong</Button>
                    </div> 
                  }
                  <br/>
                  <Button color="blue" onClick={() => props.editCard(card)} >Edit</Button>
                  <Button color="red" onClick={() => props.deleteCard(card)} >Delete</Button>
                  <hr />
                </div>
              </Grid.Column>
            ))} 
        </Grid.Row>
      </Grid>
      <hr/>
      <br/>
      <Review  cards={props.cards}/>
    </div>
)
}
export default Cards

