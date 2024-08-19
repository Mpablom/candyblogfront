import WorkGallery from "../components/WorkGallery"
import  works  from "../assets/works.json"
const WorkPage: React.FC = () => {
    return (
        <div className="work-page">
            <h1>Trabajos Realizados</h1>
            <WorkGallery works={works} />
        </div>
    )
};

export default WorkPage;