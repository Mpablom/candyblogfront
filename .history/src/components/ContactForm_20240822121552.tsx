import { Box, Typography, TextField, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/FacebookRounded';


const ContactForm = () => {
  return (
    <Box sx={{ padding: 4 }} className="contact-form">
      <Typography variant="h4" gutterBottom sx={{ fontSize: "3em"}}>Contacto</Typography>
      <TextField fullWidth sx={{backgroundColor: 'white', borderRadius: 4}} label="Nombre" margin="normal" />
      <TextField fullWidth sx={{backgroundColor: 'white', borderRadius: 4}} label="Email" margin="normal" />
      <TextField fullWidth sx={{backgroundColor: 'white', borderRadius: 4}} label="Mensaje" multiline rows={4} margin="normal" />
      <Button variant="contained" sx={{bgcolor:"secondary.main", color:"white", ":hover":{bgcolor:"text.secondary"}, mt: 2}} className='btn-send'>Enviar</Button>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6">Síguenos en redes sociales</Typography>
      <Typography><a href="https://www.facebook.com/profile.php?id=100068839001840" target="_blank" rel="noreferrer"><FacebookIcon sx={{fontSize: 40, filter: "drop-shadow(2px 2px 10px rgba(2, 2, 2, 0.3))"}} color="primary"/></a></Typography>
      </Box>
    </Box>
  );
};

export default ContactForm;
