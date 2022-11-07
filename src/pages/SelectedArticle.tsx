import Article from './../components/Articles/Article';


const index: number = parseInt(localStorage.getItem("indexArticle")!);

function SelectedArticle() {
    return (
        <>
            <Article currentIndex={index} />
        </>
    );
}

export default SelectedArticle;
