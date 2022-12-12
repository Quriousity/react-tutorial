import Hello from './components/Hello'; 
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div>
      <Wrapper>
        <Hello name="react" color="tomato"/>
        <Hello name="Javascript"/>
        <Hello />
      </Wrapper>
    </div>
  );
}

export default App;
