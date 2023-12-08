import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Outlet } from 'react-router-dom';

import i18n from '../assets/translation';

const pages = ['Home', 'Quiz', 'About', 'Nightmarish UX'];

const supportedLanguages = [
  { code: 'fr', name: 'Français' },
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'it', name: 'Italiano' },
  { code: 'de', name: 'Deutch' },
  { code: 'zh', name: '普通话' },
  { code: 'renne', name: 'Renne' },
];

const LanguageSelector = () => {
  const changeLanguage = (event) => {
    //const selectedLanguage = event.target.value;
    //i18n.changeLanguage(selectedLanguage);
    i18n.locale = event.target.value;
    //i18n.changeLanguage(event.target.value)
    console.log(i18n.locale)
    // Force le rafraîchissement de la page
    location.reload();

  };

  return (
    <select onChange={changeLanguage} value={i18n.locale}>
      {supportedLanguages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
};

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    const redirect = (page) => {
      if (page === 'Home') {
        return '/';
      } else if (page === 'Quiz') {
        return '/quiz';
      } else if (page === 'About') {
        return '/about';
      } else if (page === 'Nightmarish UX') {
        return '/ux';
      } else {
        return '/error';
      }
    }
    
    return (
      <>
        <AppBar position="static" sx={{ backgroundColor: '#2ecc71' }}>
          <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center' }}>
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'white',
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'red', // Changement de couleur lorsqu'il est survolé
                  },
                }}
              >
                🎄 LOGO 🌍
              </Typography>
    
              <Typography
                variant="h5"
                noWrap
                component="a"
                href='/'
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'white',
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'red', // Changement de couleur lorsqu'il est survolé
                  },
                }}
              >
                🎄 LOGO 🌍
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    component="a"
                    href={redirect(page)}
                    onClick={handleCloseNavMenu}
                    sx={{ mx: 2, color: 'white', '&:hover': { color: 'red' } }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              {/*<LanguageSelector />*/}
            </Toolbar>
          </Container>
        </AppBar>
        <Outlet />
      </>
      );
    
  }
            

export default ResponsiveAppBar;
