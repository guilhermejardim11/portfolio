import styles from "./SkillsetSection.module.scss";

import Section from "../Section/Section";
import SectionTitle from "../Section/SectionTitle";

const SkillsetSection = () => {
    return (
        <Section>
            <SectionTitle title="Skillset" to="/portfolio/skills" text="View All" />
        </Section>
    );
};

export default SkillsetSection;
