import './App.css';
import {withAuthenticator } from '@aws-amplify/ui-react';

function App({signOut}) {
  return (
    <div className="App">
      <center>
        <h1>Welcome to My Website</h1>
        <div>
          <button onClick={signOut}>Sign Out</button>
        </div>
        </center>
    </div>
  );
}

export default  withAuthenticator(App);
