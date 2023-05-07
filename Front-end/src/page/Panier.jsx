import Button from "../components/Button";

function ArticlesList({ articles, deleteArticle }) {
    return (
      <div>
        {articles.map((article) => (
          <div key={article.id}>
            <h2>{article.name}</h2>
            <p>{article.description}</p>
            <p>{article.price}</p>
            <p>{article.category}</p>
            <Button
              text="Supprimer"
              className="my-2"
              onClick={() => deleteArticle(article.id)}
            />
          </div>
        ))}
      </div>
    );
  }
  