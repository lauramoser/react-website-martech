import React from "react";
import styles from "./Articles.module.css";
import * as data from "./blogposts.json";
const allDatoCmsPostString = JSON.stringify(data);
const allDatoCmsPost = JSON.parse(allDatoCmsPostString).allDatoCmsPost;

let size = 3;

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

const More: React.FC<{ data: node[] }> = ({ data }) => {
    return (
        <div>
            {data.slice(size, size + 3).map((data: node) => {
                return (
                    <div className={styles["lengthArt"]}>
                        <table>
                            <tr>
                                <td className={styles["additional-pictures"]}>
                                    <img src={data.node.hero.url} alt="" className={styles["additional-hero"]}></img>
                                    <img src={data.node.author.authorImage.url} alt="" className={styles["additional-author"]}></img>
                                </td>
                                <td className={styles["additional-text"]}>
                                    <h3>{data.node.seoSettings.title}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: data.node.seoSettings.description }}></p>
                                    {/* <p className={styles["content"]} dangerouslySetInnerHTML={{ __html: data.node.content }}></p> */}
                                </td>
                            </tr>
                        </table>
                    </div>
                )
            })}
        </div>
    )
}

const Articles: React.FC<{}> = () => {
    return (
        <div>
            <div className={styles["more-container"]}>
                <More data={allDatoCmsPost} />
            </div>
        </div>

    );
}


export default Articles;