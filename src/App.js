//import Lista from "./components/Lista";
import {BrowserRouter} from 'react-router-dom';
//import Rutas from "./routes/Rutas";
//import './App.css';
import {AdminRouter, WebRouter} from './routes';
import {AuthProvider} from './contexts';



function App() {
  return (
    <AuthProvider>
  <BrowserRouter>
    <AdminRouter/>
    <WebRouter/>
  </BrowserRouter>
  </AuthProvider>
  );
}

export default App;

