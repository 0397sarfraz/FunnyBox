import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { JokesProvider } from './JokesContext'
import Home from './Home'
import Jokes from './Jokes'
import Layout from './Layout'
import Favorite from './Favorite'

function App() {
  return (
    <Router>
      <JokesProvider>
        <Layout>
        <Routes>
          <Route path="/" element={<Jokes />} />
          <Route path="*" element={<div>404 Not Found</div>} />
          <Route path="/jokes/:category" element={<Jokes />} />
          <Route path="/jokes/Favorite" element={<Favorite />} />
        </Routes>
      </Layout>
      </JokesProvider>

    </Router>

  )
}


export default App;