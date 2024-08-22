import { Box, Typography, TextField, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';


const ContactForm = () => {
  return (
    <Box sx={{ padding: 4 }} className="contact-form">
      <Typography variant="h4" gutterBottom sx={{ fontSize: "3em"}}>Contacto</Typography>
      <TextField fullWidth sx={{backgroundColor: 'white', borderRadius: 2}} label="Nombre" margin="normal" />
      <TextField fullWidth sx={{backgroundColor: 'white', borderRadius: 2}} label="Email" margin="normal" />
      <TextField fullWidth sx={{backgroundColor: 'white', borderRadius: 2}} label="Mensaje" multiline rows={4} margin="normal" />
      <Button variant="contained" sx={{bgcolor:"secondary.main", color:"white", ":hover":{bgcolor:"text.secondary"}}} className='btn-send'>Enviar</Button>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6">Síguenos en redes sociales</Typography>
        <Typography><a href="https://www.facebook.com/sbgstudio/" target="_blank" rel="noreferrer"><FacebookIcon sx={{fontSize: 40}} color="primary"></a></Typography>
      </Box>
    </Box>
  );
};

export default ContactForm;
