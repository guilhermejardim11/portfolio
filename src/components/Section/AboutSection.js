import About from "../About/Profile";
import Experience from "../About/Experience";
import Dot from "../UI/Dot";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

const AboutSection = () => {
    return (
        <Section background pattern>
            <SectionTitle title="About" url="/about" text="Know More" />
            <About />
            <p>
                Hello! I'm Guilherme Jardim and I'm a UX/UI Designer,
                experienced in Figma, Adobe Creative Suite, React.js, HTML,
                SCSS, JavaScript.
            </p>
            <Dot style={{ marginTop: "38px", marginBottom: "24px" }} />
            <Experience />
        </Section>
    );
};

export default AboutSection;
