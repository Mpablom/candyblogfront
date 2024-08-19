import { Box, Typography, TextField, Button } from '@mui/material';

const ContactForm = () => {
  return (
    <Box sx={{ padding: 4 }} className="contact-form">
      <Typography variant="h4" gutterBottom sx={{ fontSize: "3em"}}>Contacto</Typography>
      <TextField fullWidth sx={{backgroundColor: 'white', borderRadius: 2}} label="Nombre" margin="normal" />
      <TextField fullWidth sx={{backgroundColor: 'white', borderRadius: 2}} label="Email" margin="normal" />
      <TextField fullWidth sx={{backgroundColor: 'white', borderRadius: 2}} label="Mensaje" multiline rows={4} margin="normal" />
      <Button variant="contained" sx={{bgcolor:"text.secondary", color:"white", ":hover":{bgcolor:"text.secondary", scale: 1.1,transition: "all 0.2s ease-in-out"}}}>Enviar</Button>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6">Síguenos en redes sociales</Typography>
        <Typography>Facebook | Twitter | Instagram</Typography>
      </Box>
    </Box>
  );
};

export default ContactForm;
