import { Box, Typography, TextField, Button } from '@mui/material';

const ContactForm = () => {
  return (
    <Box sx={{ padding: 4 }} className="contact-form">
      <Typography variant="h4" gutterBottom>Contacto</Typography>
      <TextField fullWidth sx={{backgroundColor: 'white'}} label="Nombre" margin="normal" />
      <TextField fullWidth sx={{backgroundColor: 'white'}} label="Email" margin="normal" />
      <TextField fullWidth sx={{backgroundColor: 'white', borderRadius: 2}} label="Mensaje" multiline rows={4} margin="normal" />
      <Button variant="contained" color="primary">Enviar</Button>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6">Síguenos en redes sociales</Typography>
        <Typography>Facebook | Twitter | Instagram</Typography>
      </Box>
    </Box>
  );
};

export default ContactForm;
