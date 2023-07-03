import logo from './logo.svg';
import './App.css';
import Button from './Button';

let buttons = ['btn1', 'btn2', 'btn3', 'btn4'];
function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {buttons.map((item, index)=> {
          if(index % 2 === 0) {
            return <Button key={index} name={item}/>
          }
          return null
        })}
      </header>
    </div>
  );
}

export default App;
