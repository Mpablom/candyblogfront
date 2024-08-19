import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import worksData from '../assets/works.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);

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
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>{work.title}</Typography>
      <Typography variant="body1" gutterBottom>{work.description}</Typography>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {work.gallery.map((image: string, index: number) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`work ${index + 1}`} style={{ width: '100%' }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default WorkDetail;
