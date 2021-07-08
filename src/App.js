import logo from './static/images/k-logo.jpg';
import './App.css';
import { Box, Typography, Grid } from '@material-ui/core';

function App() {
  return (
    <Box component="div" className="App">
      <Box component="div" className="top-image">
        <Box component="div" className="white-patch" />
      </Box>
      <Box
        component="div"
        className="second-block"
        sx={{ m: { lg: '20%', md: '10%', xs: '5%' } }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h1">KRETZ</Typography>
          <Typography
            variant="subtitle"
            sx={{
              pt: 2,
              fontWeight: 300,
              fontSize: { lg: '5em', sm: '2em' },
            }}
          >
            Plus qu’une agence immobilière, une maison de famille
          </Typography>
          <Typography variant="subtitle2">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia.
          </Typography>

          <Typography variant="subtitle2" sx={{ pt: 2 }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </Typography>
        </Box>

        <Box
          component="img"
          src={logo}
          sx={{ alignSelf: 'flex-start', width: '200px', height: '200px' }}
        ></Box>
      </Box>
    </Box>
  );
}

export default App;
