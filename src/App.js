import './stylesheets/App.css'
import Layout from './components/Layout'
import TopMenu from './components/TopMenu'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/auth'

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <TopMenu />
          <Layout />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
