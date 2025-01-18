import { registerRootComponent } from 'expo';

import App from '../App';
import { createBrowserRouter } from 'react-router-dom';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div> Hello, world! </div>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <App />
  </StrictMode>
)

registerRootComponent(App);
