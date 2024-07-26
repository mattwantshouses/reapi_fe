import React from 'react';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Property Search App</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
