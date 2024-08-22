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
        <Typography variant="h6">Síguenos en redes sociales</Typography>
        <Typography><a href="https://www.facebook.com/profile.php?id=100068839001840"><FacebookRounded sx={{ fontSize: 30, color: "secondary.main" }}/></a></Typography>
      </Box>
    </Box>
  );
};

export default ContactForm;
