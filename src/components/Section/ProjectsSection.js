import Gallery from "../Gallery/Gallery";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

const ProjectSection = (props) => {
    return (
        <Section>
            <SectionTitle title="Projects" to="/portfolio/projects" text="View All" />
            <Gallery projectList={props.projectList} />
        </Section>
    );
};

export default ProjectSection;
