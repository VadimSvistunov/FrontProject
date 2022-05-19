
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import MusicCategory from './body/musicCategory';
import Menu from './header/header'
import Body from './body/mainPage'
import SoundCategory from './body/soundsCategory'
import Contact from './body/conactPage'
import TMP from './body/templateForGenre'
import Login from './body/account'
import Reg from './body/registration'
import PrivateRoute from "./rootes/privateRoote";
import GuestRoute from "./rootes/guestRoute";
import Profile from "./body/profile";
import useAuth from './hooks/useAuth';
//import { AuthRoute, GuestRoute, MaybeAuthRoute } from 'eazy-auth'



function App() {
  const auth = useAuth();

  return (
    <>

      <Router>
        <Menu />
        <Routes>
          <Route exect path="/" element={<Body />} />
          {auth.isLoaded && auth.user ? (
            <PrivateRoute path="/profile" element={<Profile />}>
            </PrivateRoute>
          ) : (
              <>
                <GuestRoute path='/login' element={<Login />}>
                </GuestRoute>
                <GuestRoute path="/registration" element={<Reg />}>
                </GuestRoute>
              </>
            )}


          {/* <Route path="/login" element={<Login/>}/>
                <Route path="/registration" element={<Reg/>}/> */}
          <Route path="/royalty-free-music" element={<MusicCategory />} />
          <PrivateRoute path="/royalty-free-music/action-and-trailer" element={<TMP />} />
          <Route path="/royalty-free-music/epic-and-orchestral" element={<TMP />} />
          <Route path="/royalty-free-music/rock-and-energetic" element={<TMP />} />
          <Route path="/royalty-free-music/electronic-and-edm" element={<TMP />} />
          <Route path="/royalty-free-music/easy-listening-music" element={<TMP />} />
          <Route path="/royalty-free-music/acoustic-and-piano" element={<TMP />} />
          <Route path="/royalty-free-music/game-music" element={<TMP />} />
          <Route path="/royalty-free-music/movie" element={<TMP />} />
          <Route path="/sound-effects-for-videos/" element={<SoundCategory />} />
          <Route path="/sound-effects-for-videos/riser-and-crescendo" element={<SoundCategory />} />
          <Route path="/sound-effects-for-videos/boom-and-slam" element={<SoundCategory />} />
          <Route path="/sound-effects-for-videos/ambience-and-indoor" element={<SoundCategory />} />
          <Route path="/sound-effects-for-videos/ambience-and-outdoor" element={<SoundCategory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>

      </Router>
    </>


  );
}

export default App;
