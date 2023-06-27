import styles from './Banner.module.scss';

import arrow from '../../assets/light/icons/arrow.png';

const Banner = (props) => {
    // const [innerHeight, setInnerHeight] = useState();

    // useEffect(() => {
    //     setTimeout(() => {
    //         setInnerHeight(window.innerHeight);
    //     }, 100);
    // }, []);

    const style = {
        backgroundImage: `url("${props.background}")`,
        // height: innerHeight || '',
    };

    return (
        <div className={`${styles.banner} ${props.className}`} style={style}>
            {props.children}

            <div className={styles.scroll_down}>
                <img src={arrow} alt='arrow' />
                <div>Swipe Down</div>
            </div>
        </div>
    );
};

export default Banner;
