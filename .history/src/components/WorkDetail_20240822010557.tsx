import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import worksData from '../assets/works.json';
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper'; 

interface Work {
  id: number;
  image: string;
  title: string;
  description: string;
  gallery: string[];
}
interface WorkDetailProps {
  id: number;
}

const WorkDetail: React.FC<WorkDetailProps> = ({id}) => {
  const [work, setWork] = useState<Work | null>(null);

  useEffect(() => {
    const selectedWork = worksData.find((w) => w.id === id);

    setWork(selectedWork || null);
  }, [id]);

  if (!work) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundImage: 'linear-gradient(45deg,#ffdde1 -20%, #ee9ca7 50%, #ffdde1 120%)' }}>
      <Typography variant="h4" gutterBottom>{work.title}</Typography>
      <Typography variant="body1" gutterBottom>{work.description}</Typography>
      <SwipeableTextMobileStepper gallery={work.gallery} title={work.title} />
    </Box>
  );
};

export default WorkDetail;
