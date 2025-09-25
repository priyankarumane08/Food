import './App.css'
import { MainPage } from './Components/MainPage'
import {Routes,Route} from "react-router-dom"
import { MealInfo } from './Components/MealInfo'

function App() {


  return (
   
    // <MainPage/>
    <Routes>
       <Route path="/" element={<MainPage />} /> 
       <Route path='/:mealid' element={<MealInfo/>}/>
    </Routes>
    
      )
}

export default App
