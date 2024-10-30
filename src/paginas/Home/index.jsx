import React from 'react';
import { Box, Button, Typography, Grid2, useMediaQuery } from '@mui/material';
import ilustracaoPrincipal from '../../assets/ilustracao-principal.svg';
import logo1 from '../../assets/logo1.svg';
import logo2 from '../../assets/logo2.svg';
import logo3 from '../../assets/logo3.svg';
import logo4 from '../../assets/logo4.svg';
import logo5 from '../../assets/logo5.svg';
import logo6 from '../../assets/logo6.svg';
import logo7 from '../../assets/logo7.svg';
import membershipIcon from '../../assets/membership-icon.svg';
import nationalIcon from '../../assets/national-icon.svg';
import clubsIcon from '../../assets/clubs-icon.svg';
import rafiki from '../../assets/rafiki.svg';
import subIcon1 from '../../assets/subIcon1.svg';
import subIcon2 from '../../assets/subIcon2.svg';
import subIcon3 from '../../assets/subIcon3.svg';
import subIcon4 from '../../assets/subIcon4.svg';
import pana from '../../assets/pana.svg';
import image9 from '../../assets/image9.svg';
import EastIcon from '@mui/icons-material/East';

const HomePageMainSection = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px) and (min-width: 769px)');

  return (
    <Box
      sx={{
        flexShrink: isMobile ? 0 : 0,
        marginTop: isMobile ? '18%' : '70px',
      }}
    >
      {/*Container Pai*/}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          gap: isMobile ? 0 : isTablet ? 10 : 20,
          padding: isMobile ? '0' : '60px',
          backgroundColor: '#F0F2F5',
          minWidth: isMobile ? '25rem' : isTablet ? '30rem' : '50rem',
        }}
      >
        {/* Container do Texto */}
        <Box
          sx={{
            textAlign: isMobile ? 'center' : 'left',
            flex: isMobile ? 1 : 0.6,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 700,
              fontSize: isMobile ? '2rem' : '3rem',
              color: '#3F51B5',
            }}
          >
            Lessons and insights
          </Typography>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 700,
              fontSize: isMobile ? '2rem' : '3rem',
              color: '#4CAF4F',
            }}
          >
            from 8 years
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '1rem',
              color: '#828282',
            }}
          >
            Where to grow your business as a photographer, side or social media?
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#4CAF4F',
              fontFamily: '"Inter", sans-serif',
              fontSize: '0.875rem',
              borderRadius: '2px',
              marginTop: '10px',
              padding: '10px 20px',
            }}
          >
            Register
          </Button>
        </Box>

        {/* Container da Imagem */}
        <Box
          sx={{
            flex: isMobile ? 1 : 0.4,
            display: isMobile ? 'none' : 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src={ilustracaoPrincipal}
            alt="Ilustração principal"
            style={{ width: '100%', maxWidth: 400 }}
          />
        </Box>
      </Box>

      {/* Seção "Our Clients" com logos individuais */}
      <Box sx={{ textAlign: 'center', marginTop: 8 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 500 }}
        >
          Our Clients
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontFamily: '"Inter", sans-serif', color: '#828282' }}
        >
          We have been working with some Fortune 500+ clients
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 12,
            marginTop: 4,
          }}
        >
          {[logo1, logo2, logo3, logo4, logo5, logo6, logo7].map(
            (logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                style={{ height: 40 }}
              />
            )
          )}
        </Box>
      </Box>

      {/* Seção de Recursos com ícones maiores */}
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{
          marginTop: 8,
          fontFamily: '"Inter", sans-serif',
          fontWeight: 500,
        }}
      >
        Manage your entire community <br /> in a single system
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 4,
          marginTop: 4,
          flexWrap: 'nowrap',
        }}
      >
        {[
          {
            icon: membershipIcon,
            title: 'Membership Organisations',
            description:
              'Our membership management software provides full automation of the membership renewals and payments',
          },
          {
            icon: nationalIcon,
            title: 'National Associations',
            description:
              'Our membership management software provides full automation of the membership renewals and payments',
          },
          {
            icon: clubsIcon,
            title: 'Clubs And Groups',
            description:
              'Our membership management software provides full automation of the membership renewals and payments',
          },
        ].map(({ icon, title, description }, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              minWidth: 300,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 1,
              margin: '10px',
              padding: '15px 10px',
            }}
          >
            <img
              src={icon}
              alt={`${title} Icon`}
              style={{ marginBottom: '10px', height: 65, width: 65 }}
            />
            <Typography
              variant="h6"
              sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 500 }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ fontFamily: '"Inter", sans-serif' }}
            >
              {description}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row-reverse',
          alignItems: 'center',
          gap: isMobile ? 0 : isTablet ? 10 : 15,
          padding: isMobile ? '0' : '70px',
          minWidth: isMobile ? '25rem' : isTablet ? '30rem' : '50rem',
        }}
      >
        {/* Container do Texto */}
        <Box
          sx={{
            textAlign: isMobile ? 'center' : 'left',
            flex: isMobile ? 1 : 0.8,
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontFamily: '"Inter", sans-serif', // Adiciona uma fonte fallback
              fontWeight: 600,

              color: '#4D4D4D', // Muda a cor do título
            }}
          >
            The unseen of spending three years at Pixelgrade
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontFamily: '"Inter", sans-serif', // Adiciona uma fonte fallback
              fontWeight: 600,

              color: '#4D4D4D', // Muda a cor do título
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#4CAF4F',
              fontFamily: '"Inter", sans-serif',
              fontSize: '0.875rem',
              borderRadius: '2px',
              marginTop: '10px',
              padding: '10px 20px', // Ajuste o padding do botão
            }}
          >
            Learn More
          </Button>
        </Box>

        {/* Container da Imagem */}
        <Box
          sx={{
            flex: isMobile ? 1 : 0.4,
            display: isMobile ? 'none' : 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src={rafiki}
            alt="Ilustração principal"
            style={{ width: '100%', maxWidth: 400 }} // Ajuste o tamanho máximo da imagem
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#F0F2F5',
        }}
      >
        {' '}
        {/* Define flexbox para a linha */}
        <Box sx={{ flex: 1, padding: '45px' }}>
          {' '}
          {/* Container do texto, flex: 1 para ocupar o espaço restante */}
          {/* Seção de Recursos com ícones maiores */}
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Inter", sans-serif', // Adiciona uma fonte fallback
              fontWeight: 600,

              color: '#4D4D4D', // Muda a cor do título
            }}
          >
            Helping a local
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 700,

              color: '#4CAF4F',
            }}
          >
            business reinvent itself
          </Typography>
          <Typography
            variant="body3"
            sx={{
              fontFamily: '"Inter", sans-serif',

              color: '#828282',
            }} // Adiciona cor ao texto secundário
          >
            Where to grow your business as a photographer, side or social media?
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          {' '}
          {/* Container dos cards, flex: 1 para ocupar o espaço restante */}
          <Grid2 container spacing={0.5} justifyContent="flex-start">
            {' '}
            {/* Utilize Grid2 para organizar os cards em grade */}
            {[
              {
                icon: subIcon1,
                title: '2,245,341',
                description: 'Members',
              },
              {
                icon: subIcon2,
                title: '46,328',
                description: 'Clubs',
              },
              {
                icon: subIcon3,
                title: '828,867',
                description: 'Events Bookings',
              },
              {
                icon: subIcon4,
                title: '1,926,436',
                description: 'Payments',
              },
            ].map(({ icon, title, description }, index) => (
              <Grid2 item key={index} xs={6}>
                {' '}
                {/* Cada card ocupa metade da largura */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    textAlign: 'center',
                    minWidth: 300,
                    alignItems: 'flex-start',
                  }}
                >
                  <img
                    src={icon}
                    alt={`${title} Icon`}
                    style={{ marginBottom: '10px', height: 40, width: 65 }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: 500,
                        textAlign: 'left',
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{
                        fontFamily: '"Inter", sans-serif',
                        textAlign: 'left',
                      }}
                    >
                      {description}
                    </Typography>
                  </Box>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row-reverse',
          alignItems: 'center',
          gap: isMobile ? 0 : isTablet ? 10 : 15,
          padding: isMobile ? '0' : '70px',
          minWidth: isMobile ? '25rem' : isTablet ? '30rem' : '50rem',
        }}
      >
        {/* Container do Texto */}
        <Box
          sx={{
            textAlign: isMobile ? 'center' : 'left',
            flex: isMobile ? 1 : 0.8,
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontFamily: '"Inter", sans-serif', // Adiciona uma fonte fallback
              fontWeight: 600,

              color: '#4D4D4D', // Muda a cor do título
            }}
          >
            How to design your site footer like we did
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontFamily: '"Inter", sans-serif', // Adiciona uma fonte fallback
              fontWeight: 600,

              color: '#4D4D4D', // Muda a cor do título
            }}
          >
            One event calendar shared across National, Regional and Club events
            to simplify your event experience. Allowing you to create waiting
            lists, share data capture, issue credential for course completion,
            apply smart purchasing rules and much more.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#4CAF4F',
              fontFamily: '"Inter", sans-serif',
              fontSize: '0.875rem',
              borderRadius: '2px',
              marginTop: '10px',
              padding: '10px 20px', // Ajuste o padding do botão
            }}
          >
            Learn More
          </Button>
        </Box>

        {/* Container da Imagem */}
        <Box
          sx={{
            flex: isMobile ? 1 : 0.4,
            display: isMobile ? 'none' : 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src={pana}
            alt="Ilustração principal"
            style={{ width: '100%', maxWidth: 400 }} // Ajuste o tamanho máximo da imagem
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row-reverse',
          alignItems: 'flex-start',
          gap: isMobile ? 0 : isTablet ? 10 : 15,
          padding: isMobile ? '0' : '35px',
          minWidth: isMobile ? '25rem' : isTablet ? '30rem' : '50rem',
          backgroundColor: '#F0F2F5',
        }}
      >
        {/* Container do Texto */}
        <Box
          sx={{
            textAlign: isMobile ? 'center' : 'left',
            flex: 1,
          }}
        >
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontFamily: '"Inter", sans-serif', // Adiciona uma fonte fallback
              color: '#4D4D4D', // Muda a cor do título
            }}
          >
            “We have enjoyed working with the JustGo system to setup and go live
            with our new membership platform. The initial effort to organise it
            along the lines of how our sport currently works was quick and
            relatively easy. The new system has already massively improved the
            time and effort it takes to setup and process member and club
            applications. It will help us to communicate with people in our
            sport in a much more effective way, and collect data to help us
            improve how our sport is governed.”
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontFamily: '"Inter", sans-serif', // Adiciona uma fonte fallback
              fontWeight: 400,
              paddingTop: '5px',
              color: '#4CAF4F', // Muda a cor do título
            }}
          >
            Tim Smith
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: '"Inter", sans-serif', // Adiciona uma fonte fallback
              color: '#4D4D4D', // Muda a cor do título
            }}
          >
            British Dragon Boat Racing Association
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {[logo1, logo2, logo3, logo4, logo5, logo6, logo7].map(
              (logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  style={{ height: 40 }}
                />
              )
            )}

            <Button
              variant="text"
              sx={{
                width: 'auto',
                height: '65%',
                backgroundColor: 'white',
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '15px',
                color: '#4CAF4F',
                '@media (max-width: 768px)': {
                  marginLeft: 'auto',
                  marginRight: '30px',
                },
              }}
            >
              Meet all customers {<EastIcon sx={{ marginLeft: '5px' }} />}
            </Button>
          </Box>
        </Box>

        {/* Container da Imagem */}
        <Box
          sx={{
            flex: isMobile ? 1 : 0.4,
            display: isMobile ? 'none' : 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src={image9}
            alt="Ilustração principal"
            style={{ width: '100%', maxWidth: 400 }} // Ajuste o tamanho máximo da imagem
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePageMainSection;
