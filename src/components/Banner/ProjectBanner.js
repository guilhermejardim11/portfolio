import styles from './ProjectBanner.module.scss';

import Banner from './Banner';
import Button from '../UI/Button';

const ProjectBanner = (props) => {
    return (
        <Banner className={styles.banner} background={props.thumbnail}>
            <div>
                <h1>{props.title}</h1>
                <ul>
                    {props.tags.map((tag) => (
                        <li key={tag}><Button>{tag}</Button></li>
                    ))}
                </ul>
            </div>
        </Banner>
    );
};

export default ProjectBanner;
