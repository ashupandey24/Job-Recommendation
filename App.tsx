
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JobRecommender from './Components/JobRecommender'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Nav/>}></Route> */}
      <Route path='/' element={<JobRecommender/>}></Route>
     
     
    </Routes>
    </BrowserRouter>
    </>
     
       
    
  )
}

export default App
