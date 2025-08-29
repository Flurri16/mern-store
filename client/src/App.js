import AddPage from './pages/AddPage';
import ItemPage from './pages/ItemPage';
import Layout from './pages/Layout';
import MainPage from './pages/MainPage';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="">
      <Layout>
        <Routes>
          <Route path='/' element={<MainPage></MainPage>}></Route>
          <Route path='/add' element={<AddPage></AddPage>}></Route>
          <Route path=':id' element={<ItemPage></ItemPage>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
