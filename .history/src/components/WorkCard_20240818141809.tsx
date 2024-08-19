import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react"

interface WorkCardProps {
    title: string
    description: string
    image: string
}

const WorkCard: React.FC<WorkCardProps> = ({ title, description, image }) => {
   return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
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
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  ); 
};

export default WorkCard;