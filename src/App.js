import React from 'react';
import { Container } from "semantic-ui-react";
import Cards from "./Cards.js";
import CardForm from "./CardForm.js"

class App extends React.Component {

  state = {
    cards: [
      {id: 1, front: "My question", back: "My answer", showFront: true, correct: 0, wrong: 0},
      {id: 2, front: "My Goes here Question", back: "My Goes here Answer", showFront: true, correct: 0, wrong: 0},
      {id: 3, front: "My Question is big", back: "My Answer is big", showFront: true, correct: 0, wrong: 0}
    ]
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000)
  };

  addCard = (cardData) => {
    const card = {id: this.getId(), ...cardData, showFront: true, correct: 0, wrong: 0}
    this.setState({cards: [card, ...this.state.cards
      ]
    })
  }

  toggleShow = (toggledCard) => {
    toggledCard.showFront = !toggledCard.showFront  
    this.setState({
      cards: this.state.cards.map( card => {
          if (card.id === toggledCard.id) {
            return toggledCard
          }
          return card
        }
      )
    })
  }

  editCard = (card) => {
    const front_back = card.showFront ? card.front : card.back
    const newcardface = prompt("How would you like to edit this?", front_back );
    
    
    if (card.showFront === true) {
      card.front = newcardface
    } else if (card.showFront === false) {
      card.back = newcardface
    }

    this.setState({
      cards: this.state.cards.map( icard => {
          if (icard.id === card.id) {
            return {
              ...card
            }
          }
          return icard
        }
      )
    })

  }

  deleteCard = (cardData) => {
    const thing = this.state.cards.filter(card => card.id !== cardData.id)
    this.setState({cards: thing})
  }

  upCorrect = (card) => {
    card.correct = card.correct + 1
    this.setState({
      cards: this.state.cards.map( icard => {
          if (icard.id === card.id) {
            return {
              ...card
            }
          }
          return icard
        }
      )
    })
    this.toggleShow(card)
  };

  upWrong = (card) => {
    card.wrong = card.wrong + 1
    this.setState({
      cards: this.state.cards.map( icard => {
          if (icard.id === card.id) {
            return {
              ...card
            }
          }
          return icard
        }
      )
    })
    this.toggleShow(card)
  };

  render() {
    return (
      <div>
        <Container style={{margin: "25px"}}>
          <CardForm  addCardFunction={this.addCard}/>
          <Cards 
            upCorrect={this.upCorrect} 
            upWrong={this.upWrong} 
            deleteCard={this.deleteCard} 
            editCard={this.editCard} 
            toggleShowFunction={this.toggleShow} 
            cards={this.state.cards}
          />
        </Container>
      </div>
    )
  };

};

export default App;
