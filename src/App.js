import './App.css';
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './screens/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
