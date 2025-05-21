import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Home from './pages/Home';
import BackgroundRemover from './pages/BackgroundRemover';
import ImageUpscaler from './pages/ImageUpscaler';
import LogoGenerator from './pages/LogoGenerator';
import ShadowGenerator from './pages/ShadowGenerator';
import ImageEditor from './pages/ImageEditor';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Disclaimer from './pages/Disclaimer';
import Pricing from './pages/Pricing';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
  },
});

const AdminPanel = () => (
  <div style={{ maxWidth: 500, margin: '40px auto', padding: 32, background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px #0001' }}>
    <h2>Admin Panel (Demo)</h2>
    <p>Basic admin dashboard. (Extend with login, stats, user management, etc.)</p>
  </div>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Routes>
            <Route path="/" element={<>
              <HeroSection />
              <Home />
            </>} />
            <Route path="/background-remover" element={<BackgroundRemover />} />
            <Route path="/image-upscaler" element={<ImageUpscaler />} />
            <Route path="/logo-generator" element={<LogoGenerator />} />
            <Route path="/shadow-generator" element={<ShadowGenerator />} />
            <Route path="/image-editor" element={<ImageEditor />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
