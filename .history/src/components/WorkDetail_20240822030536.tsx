import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-domclear";
import worksData from '../assets/works.json';
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper'; // Asegúrate de que la ruta sea correcta

interface Work {
  id: number;
  image: string;
  title: string;
  description: string;
  gallery: string[];
}

const WorkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [work, setWork] = useState<Work | null>(null);

  useEffect(() => {
    const selectedWork = worksData.find((w) => w.id === parseInt(id!));
    setWork(selectedWork || null);
  }, [id]);

  if (!work) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" gutterBottom>{work.title}</Typography>
      <Typography variant="body1" gutterBottom>{work.description}</Typography>
      <SwipeableTextMobileStepper gallery={work.gallery} />
    </Box>
  );
};

export default WorkDetail;
