import React from 'react';

const Review = (props) => {

  let totalc = 0
  let totalw = 0
  let worstId = 0
  let worstWrong = 0
  let worstFront = ""
  
  props.cards.map(
    card => (
      totalc += card.correct,
      totalw += card.wrong
    )
  )

  props.cards.map(
    card => {
      if (card.wrong > worstWrong ){
        worstId = card.id
        worstWrong = card.wrong
        worstFront = card.front
      }
    }
  )

  return (
    <div>
      <div>
        Total Correct: {totalc}
      </div>
      <div>
        Total Wrong: {totalw}
      </div>
      <div>
        Card that needs the most work (Front Side): {worstFront} 
      </div>
    </div>
  )

}


export default Review