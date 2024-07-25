import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout__header">
        {/* Add header content here */}
      </header>
      <main className="layout__main">
        {children}
      </main>
      <footer className="layout__footer">
        {/* Add footer content here */}
      </footer>
    </div>
  );
};

export default Layout;
import React from 'react';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';

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
