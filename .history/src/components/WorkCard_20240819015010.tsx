import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface WorkCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ id, title, description, image }) => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate(`/works/${id}`);
  };

  return (
    <Card sx={{ maxWidth: 350, boxShadow:8 }}>
      <CardMedia component="img" alt={title} height="140" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small" onClick={handleLearnMoreClick} sx={{ color: "black", width: "100%", bgcolor: "secondary.main" }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default WorkCard;
