import type { NextPage } from 'next';
import { Typography, Button } from '@mui/material';

const Home: NextPage = () => {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Property Search App
      </Typography>
      <Button variant="contained" color="primary">
        Start Searching
      </Button>
    </div>
  );
};

export default Home;