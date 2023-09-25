import logo from './logo.svg';
import './App.css';

import Button from './Button';
import SignedIn from './SignedIn';
import List from './List';

const App = () => {

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
          <Button />
        )
      }
      <List />
      </header>
    </div>
  );
}

export default App;
