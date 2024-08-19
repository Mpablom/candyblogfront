import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react"
import { useNavigate } from 'react-router-dom';

interface WorkCardProps {
    title: string
    description: string
    image: string
}

const WorkCard: React.FC<WorkCardProps> = ({ title, description, image }) => {
    const navigate = useNavigate();
  const handleLearnMore = () => {
    navigate(`/works/${id}`);
  };
   return (
    <Card sx={{ maxWidth: 350, margin: 1 }}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" onClick={handleLearnMore}>Learn More</Button>
      </CardActions>
    </Card>
  ); 
};

export default WorkCard;