import background from '../../assets/image/background.jpg';

import Banner from './Banner';
import Dot from '../UI/Dot';

const HomeBanner = () => {
    return (
        <Banner background={background}>
            <h1 style={{ fontSize: '45px' }}>
                Hello! I'm
                <br />
                Guilherme
            </h1>
            <Dot />
            <h2>UI/UX Designer</h2>
        </Banner>
    );
};

export default HomeBanner;
