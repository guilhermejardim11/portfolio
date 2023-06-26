import { useParams } from "react-router-dom";

import Banner from "../components/Banner/Banner";

const ProjectPage = () => {
    const params = useParams();

    return (
        <main>
            <Banner background="">
                <h1>{params.ID}</h1>
                <p>Project Details</p>
            </Banner>
        </main>
    );
};

export default ProjectPage;
