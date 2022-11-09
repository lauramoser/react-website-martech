import React from "react";
import styles from "./Articles.module.css";
import * as data from "./blogposts.json";
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

const Blogpost: React.FC<{ data: node[] }> = ({ data }) => {
    return (
        <div>
            {data.map((data: node, index) => {
                return (
                    <div className={styles["blog"]}>
                        <div className={styles["post"]}>
                            <img src={data.node.hero.url} alt=""></img>
                            <h3>{data.node.seoSettings.title}</h3>
                            <p className={styles["description"]}>{data.node.seoSettings.description}</p>
                            <p className={styles["author"]}>{data.node.author.authorName}</p>
                            <p className={styles["date"]}>{data.node.meta.publishedAt}</p>
                            <div className={styles["read"]}>
                            <a onClick={() => localStorage.setItem("indexArticle", index.toString())} className={styles["link"]} href="/selectedarticle" >lesen</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const AllArticles: React.FC<{}> = () => {
    return (
        <div>
            <div className={styles["article-container"]}>
                <Blogpost data={allDatoCmsPost} />
            </div>
        </div>
    );
}


export default AllArticles;