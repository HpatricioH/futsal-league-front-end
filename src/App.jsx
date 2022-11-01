import { BrowserRouter } from 'react-router-dom';
import './App.css';
import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useRecoilValue } from 'recoil';
import { userData } from '../src/recoil/atoms/userData';
import PrivateRoutes from './Routes/PrivateRoutes';
import { PublicRoutes } from './Routes/PublicRoutes';
import ScrollToTop from './utilities/ScrollToTop';
const AuthorizationContext = React.createContext();

const App = () => {
  const token = useRecoilValue(userData);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <ScrollToTop>
          <AuthorizationContext.Provider value={token}>
            {token ? <PrivateRoutes token={token} /> : <PublicRoutes />}
          </AuthorizationContext.Provider>
        </ScrollToTop>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
