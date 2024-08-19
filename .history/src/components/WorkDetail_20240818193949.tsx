import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WorkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [work, setWork] = useState<unknown>(null);

  useEffect(() => {
    // Carga el JSON y encuentra el trabajo por ID
    fetch('../assets/works.json')
      .then(response => response.json())
      .then(data => {
        const selectedWork = data.find((w: unknown) => w.id === parseInt(id!));
        setWork(selectedWork);
      });
  }, [id]);

  if (!work) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>{work.titl}</Typography>
      <Typography variant="body1" gutterBottom>{work.description}</Typography>
      <Grid container spacing={2}>
        {work.gallery.map((image: string, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <img src={image} alt={`work ${index + 1}`} style={{ width: '100%' }} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WorkDetail;