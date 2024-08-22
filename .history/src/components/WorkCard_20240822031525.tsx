import React, { useState } from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Dialog, DialogContent } from "@mui/material";
import WorkDetail from "./WorkDetail";

interface WorkCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ id, title, description, image }) => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 350, boxShadow: 8 }}>
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
          <Button
            size="small"
            onClick={handleOpenModal}
            sx={{ color: "white", width: "100%", bgcolor: "secondary.main", ":hover": { bgcolor: "text.secondary" } }}
          >
            Ver más
          </Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={handleCloseModal} maxWidth="md" fullWidth>
        <DialogContent>
          <WorkDetail id={id} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WorkCard;
