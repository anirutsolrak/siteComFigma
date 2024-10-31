import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Grid2,
  TextField,
  Button,
  IconButton,
  SvgIcon,
  ThemeProvider,
  createTheme,
  styled,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logoFooter from '../../assets/logoFooter.svg';
import send from '../../assets/send.svg'


const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: '2.67px',
      borderColor: 'rgba(255, 255, 255, 0.2)', // Opacidade de 20%
    },
  },
  '& .MuiOutlinedInput-input': {
    color: 'white', // Cor do texto branca
  },
}));

const Footer = () => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: '#263238',
          color: '#fff',
          py: 4,
          mt: 8,
        }}
      >
        <Container maxWidth="xl" sx={{ display: 'flex', flexDirection:  'row', justifyContent: 'center' }}>
          <Grid2 container spacing={20} sx={{
            display: 'flex',
            [theme.breakpoints.down('md')]: {
              display: 'grid',
              justifyContent: 'flex-start',
            },
          }}>
            {/* Container 1: Logo e Redes Sociais */}
            <Grid2 sx={{ display: 'flex', flexDirection: 'column', width: '10rem' }}>
              <img src={logoFooter} alt="Nexcent" width="100" />
              <Typography variant="body2" color="white" mt={5}>
                Copyright © 2023 Nexcent UI/UX
              </Typography>
              <Typography variant="body2" color="white" mt={3}>
                All rights reserved
              </Typography>
              <Box mt={5}>
                <IconButton aria-label="instagram">
                  <SvgIcon>
                    <InstagramIcon />
                  </SvgIcon>
                </IconButton>
                <IconButton aria-label="twitter">
                  <SvgIcon>
                    <TwitterIcon />
                  </SvgIcon>
                </IconButton>
                <IconButton aria-label="youtube">
                  <SvgIcon>
                    <YouTubeIcon />
                  </SvgIcon>
                </IconButton>
              </Box>
            </Grid2>

            {/* Container 2: Company */}
            <Grid2 sx={{ display: 'flex', flexDirection: 'column', width: '10rem' }}>
              <Typography variant="h6" gutterBottom>
                Company
              </Typography>
              <Link href="/about" color="inherit">
                About us
              </Link>
              <Link href="/blog" color="inherit">
                Blog
              </Link>
              <Link href="/contact" color="inherit">
                Contact us
              </Link>
              <Link href="/pricing" color="inherit">
                Pricing
              </Link>
              <Link href="/testimonials" color="inherit">
                Testimonials
              </Link>
            </Grid2>

            {/* Container 3: Support */}
            <Grid2 sx={{ display: 'flex', flexDirection: 'column', width: '10rem' }}>
              <Typography variant="h6" gutterBottom>
                Support
              </Typography>
              <Link href="/help" color="inherit">
                Help center
              </Link>
              <Link href="/terms" color="inherit">
                Terms of service
              </Link>
              <Link href="/legal" color="inherit">
                Legal
              </Link>
              <Link href="/privacy" color="inherit">
                Privacy policy
              </Link>
              <Link href="/status" color="inherit">
                Status
              </Link>
            </Grid2>

            {/* Container 4: Stay up to date */}
            <Grid2 sx={{ display: 'flex', flexDirection: 'column', width: '15rem' }}>
              <Typography variant="h6" gutterBottom>
                Stay up to date
              </Typography>
              <Grid2 container>
              <Grid2 xs={3}>
                  {/* Usando o StyledTextField */}
                  <StyledTextField
                    fullWidth
                    variant="outlined"
                    placeholder="Your email address"
                    InputProps={{
                      endAdornment: <img src={send} alt="Nexcent" width="25" />,
                    }}
                  />
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;