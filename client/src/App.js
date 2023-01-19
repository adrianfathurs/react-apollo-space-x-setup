import './App.css';
import Launch from './component/Launch';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App pt-3">
      <Container maxWidth="lg">
        <Launch/>
      </Container>
    </div>
  );
}

export default App;
