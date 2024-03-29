import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm() {

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext); 
    const [text, setText] = useState(''); // State
    const [btnDisabled, setBtnDisabled] = useState(true); // State
    const [message, setMessage] = useState(''); // State
    const [rating, setRating] = useState(); // State

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => { // Changes state
        if(text === ''){
            setBtnDisabled(true);
            setMessage(null);
        } else if(text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage('Text must be at least 10 characters.');
        } else{
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(e.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedback = {
                text: text, 
                rating: rating,

            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }else {
            addFeedback(newFeedback);
        }
            
            setText('');
        }

    }


  return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How Would you rate your service?</h2>

                <RatingSelect select={(rating) => setRating(rating)} />

                <div className="input-group">
                    <input 
                    onChange={handleTextChange} 
                    type="text" 
                    placeholder="Write a review" 
                    value={text}
                    />
                    <Button type='submit' isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
  )
}

export default FeedbackForm