import HomeBanner from "../components/Banner/HomeBanner";
import ProjectSection from "../components/Section/ProjectsSection";
import AboutSection from "../components/Section/AboutSection";
import ContactsSection from "../components/Section/ContactsSection";
import SkillsetSection from "../components/Section/SkillsetSection";

const projectList = [
    {
        id: "imoukubo",
        title: "imoukubo",
        thumbnail:
            "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_600/https://www.ukubo.com/wp-content/uploads/2021/05/project-imoukubo-image1l-600x258.jpg",
    },
    {
        id: "melsport",
        title: "Melsport",
        thumbnail:
            "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2560/https://www.ukubo.com/wp-content/uploads/2021/05/project-melsport-image4-1.jpg",
    },
    {
        id: "imoukubo 2",
        title: "imoukubo 2",
        thumbnail:
            "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_600/https://www.ukubo.com/wp-content/uploads/2021/05/project-imoukubo-image2-600x211.jpg",
    },
    {
        id: "imoukubo 3",
        title: "imoukubo 3",
        thumbnail:
            "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_600/https://www.ukubo.com/wp-content/uploads/2021/05/project-imoukubo-image4-600x281.jpg",
    },
];

const HomePage = () => {
    return (
        <main style={{ paddingTop: "0px" }}>
            <HomeBanner />
            <ProjectSection projectList={projectList} />
            <AboutSection />
            <SkillsetSection />
            <ContactsSection />
        </main>
    );
};

export default HomePage;
