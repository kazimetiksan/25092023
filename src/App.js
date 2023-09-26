import logo from './logo.svg';
import './App.css';

import Button from './Button';
import SignedIn from './SignedIn';
import List from './List';

import Demo, {DemoRow, DemoRow1} from './Demo';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Detail from './Detail';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

const Home = () => {

  // return <Demo />

  const isSignedIn = false

  return (
    <div className="App">
      <header className="App-header">
      {
        // // Conditional Rendering
        // isSignedIn ? (
        //   // if true
        //   <SignedIn />
        // ) : (
        //   // if false
        //   <Button onClick={(e) => {
        //     console.log('button clicked in App.js', e)
        //   }} />
        // )
      }
      <List />
      </header>
    </div>
  );
}

export default App;
