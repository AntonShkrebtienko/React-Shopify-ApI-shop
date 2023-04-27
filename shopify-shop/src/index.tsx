import ReactDOM from 'react-dom';
import App from './components/app/App';
import './components/app/app.css'
import { Provider } from 'react-redux';
import { createStore, Store } from "redux"
import reducer from './components/store/reducer';
import ErrorBoundry from './components/error-boundry';

export const store: Store = createStore(reducer)
ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <App />
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);