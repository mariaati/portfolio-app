import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Stack, AppBar, Toolbar, Box } from "@mui/material";
import { GitHub, PictureAsPdf, MenuBook, LinkedIn } from '@mui/icons-material';
import nawrasImg from "../images/nawras.jpeg";
import mariaImg from "../images/maria.jpeg";
import mariaCV from "../assets/Maria_Atia.pdf";
import nawrasCV from "../assets/Nawras_Afuni.pdf";

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <AppBar position="static" sx={{ background: 'linear-gradient(to right, #283E51, #485563)' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <MenuBook sx={{ color: '#ffffff' }} />
            <Typography variant="h6" component="div" fontWeight="bold" color="white">
              My Portfolio Showcase
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button color="inherit" href="/">Home</Button>
            <Button color="inherit" href="/contact">Contact</Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Main Section */}
      <Container sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
        <Typography variant="h3" align="center" fontWeight="bold" gutterBottom color="primary">
          Resumes & Portfolios
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Maria */}
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 3, borderRadius: 3, height: '100%', backgroundColor: '#ffffff' }}>
              <CardMedia
                component="img"
                image={mariaImg}
                alt="Maria Atia"
                sx={{
                  aspectRatio: '3 / 4',
                  width: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" fontWeight="bold">
                  Maria Atia
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Junior Software Developer | Tel-Hai College
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Skilled in ReactJS, NodeJS, Python. Participated in internships and hackathons. Strong in OOP, Docker, MongoDB, Git, and fullstack development.
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mt: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    href="https://github.com/mariaati"
                    target="_blank"
                    startIcon={<GitHub />}
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    href={mariaCV}
                    target="_blank"
                    startIcon={<PictureAsPdf />}
                  >
                    Resume (PDF)
                  </Button>
                </Stack>
                <Typography variant="body2" sx={{ mt: 2, fontWeight: 500 }}>
                  Email: mariaatia36@gmail.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Nawras */}
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 3, borderRadius: 3, height: '100%', backgroundColor: '#ffffff' }}>
              <CardMedia
                component="img"
                image={nawrasImg}
                alt="Nawras Afuni"
                sx={{
                  aspectRatio: '3 / 4',
                  width: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" fontWeight="bold">
                  Nawras Afuni
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Computer Science Student | Tel-Hai University
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Skilled in C++, Python, JavaScript, HTML/CSS. Built full web systems in Visual Studio. Passionate about creating great digital experiences.
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mt: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    href="https://github.com/NawrasAs"
                    target="_blank"
                    startIcon={<GitHub />}
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    href={nawrasCV}
                    target="_blank"
                    startIcon={<PictureAsPdf />}
                  >
                    Resume (PDF)
                  </Button>
                </Stack>
                <Typography variant="body2" sx={{ mt: 2, fontWeight: 500 }}>
                  Email: aslynawras27@gmail.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box component="footer" sx={{ mt: 6, py: 3, backgroundColor: '#2b4f60', color: '#fff' }}>
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            © 2024 Maria & Nawras Portfolio
          </Typography>
          <Stack direction="row" spacing={2}>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
              <LinkedIn />
            </a>
            <a href="https://github.com/mariaati" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
              <GitHub />
            </a>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
