import React from "react";
import styles from "./Articles.module.css";
import * as data from "./blogposts.json";
import { Carousel } from 'react-responsive-carousel';
const allDatoCmsPostString = JSON.stringify(data);
const allDatoCmsPost = JSON.parse(allDatoCmsPostString).allDatoCmsPost;

type node = {
    node: information;

}

type information = {
    slug: string;
    title: string;
    seoSettings: seoSettings;
    content: string;
    meta: meta;
    hero: hero;
    author: author;

}

type seoSettings = {
    title: string;
    description: string;
}

type meta = {
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
}

type hero = {
    url: string;
}

type author = {
    authorName: string;
    authorDescription: string;
    gender: string;
    authorImage: authorImage;

}

type authorImage = {
    url: string;

}

const CarouselItem: React.FC<{ data: node[] }> = ({ data }) => {
    return (
        <div>
            {/* {data.map((data: node, index) => {
                return (
                    <Carousel autoPlay >
                        <CarouselItem>
                            <CImage className="d-block w-100" src="/images/react.jpg" alt="slide 1" />
                            <CCarouselCaption className="d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </CCarouselCaption>
                        </CarouselItem>
                    </Carousel>
                )
            })} */}
        </div>
    )
}

// const More: React.FC<{ data: node[] }> = ({ data }) => {
//     return (
//         <Carousel autoPlay>
//             {data.map((data: node, index) =>
//             (
//                 <Slide>
//                     {allBlogs.nodes.slice(index, 2).map((blog) =>
//                     (
//                         <BlogAuthor>
//                             <Author>{blog.data.author}</Author>
//                             <BlogDate>{blog.data.date}</BlogDate>
//                         </BlogAuthor>
//                     )
//                     )}
//                 </Slide>
//             )}
//         </Carousel>
//     )
// }

const Slider: React.FC<{}> = () => {
    return (
        <div>
            <div className={styles["carousel-container"]}>
                <CarouselItem data={allDatoCmsPost} />
            </div>
        </div>

    );
}


export default Carousel;