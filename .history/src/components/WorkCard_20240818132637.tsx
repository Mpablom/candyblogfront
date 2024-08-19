import React from "react"

interface WorkCardProps {
    title: string
    description: string
    image: string
}

const WorkCard: React.FC<WorkCardProps> = ({ title, description, image }) => {
    return (
        <div className="work-card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
};

export default WorkCard;