import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
import Header from "./components/Header"
import CourseScreen from "./screens/CourseScreen"
import HomeScreen from "./screens/HomeScreen"
import LoginScreen from "./screens/LoginScreen"
import SignupScreen from "./screens/SignupScreen"
import AboutUsScreen from "./screens/AboutUsScreen"



function App() {
 
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<HomeScreen/>}/>
      <Route path="/home" element={<HomeScreen/>}/>
      <Route path="/about" element={<AboutUsScreen/>}/>
      <Route path="/product/:id" element={<CourseScreen/>}/>
      <Route path="/login" element={<LoginScreen/>}/>
      <Route path="/signup" element={<SignupScreen/>}/>
      <Route path="/course1" element={<CourseScreen/>}/>
    </Routes>
   
    </div>
  )
}

export default App
