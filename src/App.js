import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [tweet, setTweet] = useState('');
  const [tweet2, setTweet2] = useState('');
  const [tweet3, setTweet3] = useState('');
  const [tweet4, setTweet4] = useState('');
  const [result, setResult] = useState(null);

  function handleButtonClick() {
    var formdata = new FormData();
    formdata.set('tweet', tweet);
    formdata.set('tweet2', tweet2);
    formdata.set('tweet3', tweet3);
    formdata.set('tweet4', tweet4);
    console.log(`tweet=${tweet}`);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch('http://127.0.0.1:5000/babbage', requestOptions)
      .then(response => response.json())
      .then(data => setResult(data))
      .catch(error => console.error(error));
  }

  return (
    <div>
      <div>
        <label>Tweet:</label>
        <input type="text" value={tweet} onChange={e => setTweet(e.target.value)} />
      </div>
      <div>
        <label>Tweet2:</label>
        <input type="text" value={tweet2} onChange={e => setTweet2(e.target.value)} />
      </div>
      <div>
        <label>Tweet3:</label>
        <input type="text" value={tweet3} onChange={e => setTweet3(e.target.value)} />
      </div>
      <div>
        <label>Tweet4:</label>
        <input type="text" value={tweet4} onChange={e => setTweet4(e.target.value)} />
      </div>
      <button onClick={handleButtonClick}>Send POST Request</button>
      {result && <p>Result: {JSON.stringify(result)}</p>}
    </div>
  );
}

export default App;
