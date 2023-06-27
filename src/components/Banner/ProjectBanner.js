import styles from './ProjectBanner.module.scss';

import Banner from './Banner';

const ProjectBanner = (props) => {
    return (
        <Banner className={styles.banner} background={props.background}>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </Banner>
    );
};

export default ProjectBanner;
