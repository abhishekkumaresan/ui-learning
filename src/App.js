import logo from './logo.svg';
import './App.css';
import { Box, Typography } from '@material-ui/core';

function App() {
  return (
    <Box component="div" className="App">
      <Box component="div" className="top-image">
        <Box component="div" className="white-patch" />
      </Box>
      <Box component="div" className="second-block">
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          Kretz
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
