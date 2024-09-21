import logo from './logo.svg';
import './App.css';
import Question from "./Question";
import {Container} from "@mui/material";

function App() {
  return (
    <div className="App">
        <Container sx={{
            display:'flex'
        }}>
            <Question question="What is your name?" options={["John", "Jane", "Doe","Cane"]} handleSubmit={() => {}}/>
        </Container>
    </div>
  );
}

export default App;
