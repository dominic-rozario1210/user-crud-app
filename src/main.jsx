import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from "./redux/Store.js"
import axios from 'axios'

axios.defaults.baseURL="https://6a91908e7751d35ce47e9973.mockapi.io/api"
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
)
