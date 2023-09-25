import logo from './logo.svg';
import './App.css';

import Button from './Button';
import SignedIn from './SignedIn';

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
      </header>
    </div>
  );
}

export default App;
