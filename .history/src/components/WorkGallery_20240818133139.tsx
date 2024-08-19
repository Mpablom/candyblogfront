import WorkCard from "./WorkCard"


interface WorkItem {
    image: string
    title: string
    description: string
}
interface WorkGalleryProps {
    works: WorkItem[]
}
const WorkGallery: React.FC<WorkGalleryProps> = ({ works }) => {
    return (
        <div className="work-gallery">
            {works.map((work) => (
                <WorkCard
                    key={work.title}
                    title={work.title}
                    description={work.description}
                    image={work.image}
                />
            ))}
        </div>
    )
}
export default WorkGallery