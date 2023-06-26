import styles from './Banner.module.scss';

import arrow from '../../assets/light/icons/arrow.png';

const Banner = (props) => {
    const style = {
        backgroundImage: `url("${props.background}")`,
        // height: window.innerHeight,
    };

    return (
        <div className={styles.banner} style={style}>
            {props.children}

            <div className={styles.scroll_down}>
                <img src={arrow} alt='arrow' />
                <div>Swipe Down</div>
            </div>
        </div>
    );
};

export default Banner;
