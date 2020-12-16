import PersonCard from './Components/PersonCard'
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard 
      lastName={ "Doe" }
      firstName={ "Jane" }
      age={ 45 }
      hair={ "Black" }
      />
      <PersonCard 
      lastName={ "Smith" }
      firstName={ "John" }
      age={ 88 }
      hair={ "Brown" }
      />
      <PersonCard 
      lastName={ "Fillmore" }
      firstName={ "Millard" }
      age={ 50 }
      hair={ "Brown" }
      />
      <PersonCard 
      lastName={ "Smith" }
      firstName={ "Maria" }
      age={ 62 }
      hair={ "Brown" }
      />
    </div>
  );
}

export default App;
