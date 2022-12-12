import Hello from './components/Hello'; 
import Hello2 from './components/Hello2';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div>
      <Wrapper>
        <Hello name="react" color="tomato" isSpecial/>
        <Hello name="Javascript"/>
        <Hello />
        <Hello2 name="react" color="grey"/>
        <Hello2 name="react" color="grey" isSpecial/>
      </Wrapper>
    </div>
  );
}

export default App;
