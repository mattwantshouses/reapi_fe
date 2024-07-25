import type { NextPage } from 'next';
import { Typography } from '@mui/material';

const Home: NextPage = () => {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Property Search App
      </Typography>
    </div>
  );
};

export default Home;
