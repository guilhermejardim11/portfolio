import Card from "../UI/Card";
import styles from "./Experience.module.scss";

const Experience = () => {
    return (
        <div>
            <div className={styles.years}>
                <span>
                    <sup>+</sup>4
                </span>{" "}
                <div>
                    years of
                    <br />
                    experience
                </div>
            </div>

            <div className={styles.projects}>
                <Card>
                    <span>7</span>
                    <div>UI/UX Projects</div>
                </Card>

                <Card>
                    <span>14</span>
                    <div>Front-End Projects</div>
                </Card>

                <Card>
                    <span>7</span>
                    <div>Identity Projects</div>
                </Card>
            </div>
        </div>
    );
};

export default Experience;
