import React from 'react'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Routes,Route} from 'react-router-dom';
import Cards from './components/Cards';
import CardsDetails from './components/CardsDetails';
import '../src/components/Style.css'
const App = () => {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path='/' element={<Cards/>} />
            <Route path='cart/:id' element={<CardsDetails/>} />
        </Routes>
    </div>
  )
}

export default App