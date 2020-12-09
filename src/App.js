import Child from './child';
import './App.css';
import {TransactionProvider} from './TransactionContext';

function App() {
  return (
    <TransactionProvider>
    
      <Child />
    
    </TransactionProvider>

  );
}

export default App;
