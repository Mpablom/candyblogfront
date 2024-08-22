import { Box, Typography, TextField, Button } from '@mui/material';
import FacebookRounded from '@mui/icons-material/FacebookRounded';

const ContactForm = () => {
  return (
    <Box sx={{ padding: 4 }} className="contact-form">
      <Typography variant="h4" gutterBottom sx={{ fontSize: "4em", fontFamily:"Great Vibes, cursive", fontWeight:"400", fontStyle:"normal"}}>Contacto</Typography>
      <TextField fullWidth sx={{backgroundColor: 'white', borderRadius: 5, boxShadow: 2}} label="Nombre" margin="normal" />
      <TextField fullWidth sx={{backgroundColor: 'white', borderRadius: 5, boxShadow: 2}} label="Email" margin="normal" />
      <TextField fullWidth sx={{backgroundColor: 'white', borderRadius: 5, boxShadow: 2}} label="Mensaje" multiline rows={4} margin="normal" />
      <Button variant="contained" sx={{bgcolor:"secondary.main", color:"white", ":hover":{bgcolor:"text.secondary"}}} className='btn-send'>Enviar</Button>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5">Síguenos en redes sociales</Typography>
        <Typography variant="h1"><a href="#"><FacebookRounded /></a></Typography>
      </Box>
    </Box>
  );
};

export default ContactForm;
