import Gallery from "../components/Gallery/Gallery";
import Section from "../components/Section/Section";

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

const ProjectsPage = () => {
    return (
        <main>
            <Section>
                <Gallery projectList={projectList} />
            </Section>
        </main>
    );
};

export default ProjectsPage;
