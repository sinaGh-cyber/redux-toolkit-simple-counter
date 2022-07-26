import { Provider } from 'react-redux';
import './App.css';
import Counter from './components/counter/counter';
import { store } from './features/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
