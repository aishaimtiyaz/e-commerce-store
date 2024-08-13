import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';  
import Main from './components/main';
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Header />
       <Main />
       <Footer />
       <Routes>
                    <Route
                        exact
                        path="/footer"
                        element={<Footer />}
                    />
        </Routes>
    </div>
  );
}

export default App;
