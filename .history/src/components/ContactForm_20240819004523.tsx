import { Box, Typography, TextField, Button } from '@mui/material';

const ContactForm = () => {
  return (
    <Box sx={{ padding: 4 }} className="contact-form">
      <Typography variant="h4" gutterBottom>Contacto</Typography>
      <TextField fullWidth label="Nombre" margin="normal" />
      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Mensaje" multiline rows={4} margin="normal" />
      <Button variant="contained" color="primary">Enviar</Button>     
    </Box>
     <Box sx={{ marginTop: 4, backgroundColor: '#f5f5f5', width: '100%' }}>
        <Typography variant="h6">Síguenos en redes sociales</Typography>
        <Typography>Facebook | Twitter | Instagram</Typography>
      </Box>
  );
};

export default ContactForm;
