import React from "react";
import WorkGallery from "../components/WorkGallery";
import works from "../assets/works.json";

const WorkPage: React.FC = () => {
  return (
    <div className="work-page">
      <h2 style={{fontSize: '3em'}}>Trabajos Realizados</h2>
      <WorkGallery works={works} />
    </div>
  );
};

export default WorkPage;
