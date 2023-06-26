import styles from "./Profile.module.scss";

import background from "../../assets/light/images/profile-background.jpg";

const Profile = () => {
    const today = new Date().getTime();
    const birthday = new Date("1996-08-31").getTime();
    const age = Math.abs(new Date(today - birthday).getUTCFullYear() - 1970);

    return (
        <div
            className={styles.profile}
            style={{ backgroundImage: `url("${background}")` }}
        >
            <div>
                <h3>Name</h3>
                <h4>
                    Guilherme
                    <br />
                    Jardim
                </h4>
            </div>

            <div>
                <h3>Age</h3>
                <h4>{age} yrs</h4>
            </div>

            <div>
                <h3>Nationality</h3>
                <h4>Portuguese</h4>
            </div>
        </div>
    );
};

export default Profile;
