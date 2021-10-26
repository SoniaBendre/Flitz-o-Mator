import * as React from 'react';
import {useState} from 'react';
import {get_gif} from '../gifapi/index'
import FavoriteIcon from '@mui/icons-material/Favorite';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { name_check } from '../nameapi';
import { generate_poem } from '../poem/list';


const theme = createTheme();
export default function Details() {
    const [user_name, setUser] = useState("")
    const [crush_name, setCrush] = useState("")
    const [compatibility, setCompatibility] = useState("")
    const [gif, setGif] = useState("")
    const [poem, setPoem] = useState("")    

    const handleSubmit = async (e) => {
      e.preventDefault()
      //uses name API to check compatibility based on names entered by user
      setCompatibility(await name_check(user_name, crush_name))
      //Uses gif API to get relevant gif
      setGif(await get_gif("crush", 50))
      setPoem(generate_poem())

    }

    return (
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sx">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>
          <FavoriteIcon sx={{ m: 1 }}>
          </FavoriteIcon>
          <MailOutlineIcon sx={{ m: 1}}></MailOutlineIcon>
          </div>
          <Typography component="h1" variant="h3">
            Welcome to the Flitz-O-Mator!
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              onChange = {(e) => setUser(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="user_Name"
              label="Your Name"
              name="user_name"
              autoComplete="user_name"
              autoFocus
            />
            <TextField
              onChange = {(e) => setCrush(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="crush_name"
              label="Flitz Receiver Name"
              type="crush_name"
              id="crush_name"
              autoComplete="crush_name"
            />
            {compatibility && <Typography component="h3" variant="h7" align="center" gutterBottom={true} >
            Compatibility Percentage Based On Names: {compatibility} %
          </Typography>}
            <center>
            <img src={gif} alt={"click SUBMIT to generate gif"}/>
            </center>
            <Typography component="h1" variant="h5">
            {poem}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    )
}