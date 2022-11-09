import React from "react";
import styles from "./Articles.module.css";
import * as data from "./blogposts.json";
const allDatoCmsPostString = JSON.stringify(data)
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

interface SelectedProps {
    index: number;
    data: node[];
}


const Blog: React.FC<SelectedProps> = ({ data, index }) => {
    return (
        <div>
            {data.slice(index, index +1).map((data: node) => {
                return (
                    <div className={styles["container"]}>
                        <div className={styles["header"]}>
                            <img src={data.node.hero.url} alt=""></img>
                        </div>
                        <div>
                            <div className={styles["author-container"]}>
                                <img src={data.node.author.authorImage.url} alt=""></img>
                                <div className={styles["overlay"]}>
                                    <a href="#Profile">{data.node.author.authorName}</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles["article"]}>
                            <h1>{data.node.title}</h1>
                            <p className={styles["date-name"]}>{data.node.meta.publishedAt} von {data.node.author.authorName}</p>
                            <p className={styles["content"]} dangerouslySetInnerHTML={{ __html: data.node.content }}></p>
                        </div>

                        <div id="Profile" className={styles["moreAboutAuthor"]}>
                            <table>
                                <tr>
                                    <td className={styles["pictures"]}>
                                        <img src={data.node.author.authorImage.url} alt=""></img>
                                    </td>
                                    <td className={styles["text"]}>
                                        <h3>{data.node.author.authorName}</h3>
                                        <p dangerouslySetInnerHTML={{ __html: data.node.author.authorDescription }}></p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

interface ArticleProps {
    currentIndex: number;
}

const Article: React.FC<ArticleProps> = ({currentIndex}) => {
    return (
        <div>
            <Blog data={allDatoCmsPost} index={currentIndex} />
        </div>
    );
}

export default Article;
