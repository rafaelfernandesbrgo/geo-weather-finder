import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import AppProvider from './hooks/index';
import Routes from './routes';
import FadeIn from 'react-fade-in';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {



  return (
    <Router>
      <AppProvider>
          <FadeIn delay={1000} transitionDuration={1000}>
            <Routes />
          </FadeIn>
      </AppProvider>
      <GlobalStyle />
    </Router>
  )

}




export default App;


