import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item Feedback item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This item Feedback item 2',
            rating: 10
        },
        {
            id: 3,
            text: 'This item Feedback item 3',
            rating: 10
        }
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });
    // Edit feedback
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }
    //  Update feedback
    const updateFeedback = (id, updItem) =>{
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item ))
    };

    // Delete feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you Sure?')){
           setFeedback(feedback.filter((item)=> item.id !== id))
   
        }
    };
    // Add feedback

    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4();
        setFeedback([newFeedback,...feedback]);
    };

    return <FeedbackContext.Provider 
        value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;