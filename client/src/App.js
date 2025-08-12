import Layout from './pages/Layout';
import MainPage from './pages/MainPage';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="">
      <Layout>
        <Routes>
          <Route path='/' element={<MainPage></MainPage>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
