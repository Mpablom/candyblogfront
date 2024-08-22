import React from "react";
import WorkGallery from "../components/WorkGallery";
import works from "../assets/works.json";
import { Typography } from "@mui/material";

const WorkPage: React.FC = () => {
  return (
    <div className="work-page">
      <WorkGallery works={works} />
    </div>
  );
};

export default WorkPage;
