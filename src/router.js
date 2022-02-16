import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@templates/Layout';
import Landing from '@pages/Landing';
import StoreInfo from '@pages/StoreInfo';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />

          <Route path="/store-info" element={<StoreInfo />}>
            <Route path="/store-info/one" element={<StoreInfo />} />
            <Route path="/store-info/two" element={<StoreInfo />} />
            <Route path="/store-info/three" element={<StoreInfo />} />
            <Route path="/store-info/four" element={<StoreInfo />} />
            <Route path="/store-info/five" element={<StoreInfo />} />
            <Route path="/store-info/six" element={<StoreInfo />} />
            <Route path="/store-info/seven" element={<StoreInfo />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
