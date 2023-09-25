import logo from './logo.svg';
import './App.css';

import Button from './Button';
import SignedIn from './SignedIn';
import List from './List';
import Demo from './Demo';

const App = () => {

  return <Demo />

  const isSignedIn = false

  return (
    <div className="App">
      <header className="App-header">
      {
        // Conditional Rendering
        isSignedIn ? (
          // if true
          <SignedIn />
        ) : (
          // if false
          <Button onClick={(e) => {
            console.log('button clicked in App.js', e)
          }} />
        )
      }
      <List />
      </header>
    </div>
  );
}

export default App;
