import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Home from "./components/Main/Home/Home";
import News from "./components/Main/News/News";
import Contacts from "./components/Main/Contacts/Contacts";
import Reviews from "./components/Main/Reviews/Reviews";
import ReviewsContainer from "./components/Main/Reviews/ReviewsContainer";

function App(props) {
  return (
    <div className="App">
        <Header forHeader={props.store.header}/>
        <Main forMain={props.store}>
            <Routes>
                <Route
                    path="/"
                    element={<Home forHome={props.store.home}/>}
                />
                <Route
                    path="/reviews"
                    element={<ReviewsContainer title={props.store.reviews.title}/>}
                />
                <Route
                    path="/news"
                    element={<News/>}
                />
                <Route
                    path="/contacts"
                    element={<Contacts contacts={props.store.contacts}/>}
                />
            </Routes>
        </Main>
        <Footer/>
    </div>
  );
}

export default App;
