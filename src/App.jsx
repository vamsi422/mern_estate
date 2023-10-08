
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';
function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signIn' element={<Signin/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/about' element={<About/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
