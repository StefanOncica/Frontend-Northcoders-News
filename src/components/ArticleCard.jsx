function ArticleCard({ article }) {
  return (
    <section>
      <h5>Tittle: {article.title}</h5>
      <h6>Author: {article.author}</h6>
      <p>Topic: {article.topic}</p>
      <p>Total votes: {article.votes}</p>
      <p>
        Created: {article.created_at.split("T")[0]}{" "}
        {article.created_at.split("T")[1].split(".")[0]}
      </p>
      <p>Total comments: {article.comment_count}</p>
      <img
        src={article.article_img_url}
        alt={`picture about ${article.topic}`}
      />
  </section>
  );
}

export default ArticleCard;