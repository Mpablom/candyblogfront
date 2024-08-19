import WorkGallery from "../components/WorkGallery"
import  worksData  from "../assets/works.json"
const WorkPage: React.FC = () => {
    return (
        <div className="work-page">
            <h1>Trabajos Realizados</h1>
            <WorkGallery works={worksData} />
        </div>
    )
};

export default WorkPage;