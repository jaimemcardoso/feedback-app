import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { FeedbackProvider } from './context/FeedbackContext';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './components/pages/AboutPage';
import Post from './components/Post';

function App() {

// Return outputs onto DOM
//  App level state lives here, GLOBAL state so we can pass it as a prop
 

 
    return (
        <FeedbackProvider>

        <Router>
        <Header />
        <div className="container">
            <Routes>
        <Route exact path='/' element={
            <>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
            </>
        }>
   
        </Route>

        <Route path='/about' element={<AboutPage />} />
        <Route path='/post/*' element={<Post />} />

        </Routes>
        <AboutIconLink />
        </div>
        </Router>
        </FeedbackProvider>

    )
}


export default App;

//  State
//  component level - associated with that one component, EX: Navigation with open and close state
//  Global/app leve state, feedback for example. Share feedback component state with other components
// 