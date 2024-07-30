import copyIcon from '../../assets/copy.svg';
import deleteIcon from '../../assets/delete.svg';
import doneIcon from '../../assets/done.svg';

export const ArticleItem = ({
  article,
  copied,
  handleCopy,
  handleDelete,
  setArticle,
}) => (
  <div className="article_inset">
    <div onClick={() => setArticle(article)} className="link_inset">
      <div className="copy_btn mr-2" onClick={() => handleCopy(article.url)}>
        <img
          src={copied === article.url ? doneIcon : copyIcon}
          alt="copy_icon"
          className="w-5 h-5"
        />
      </div>
      <p className="link_text">{article.url}</p>
      <button
        className="delete_btn ml-2"
        onClick={() => handleDelete(article.url)}
        aria-label="Delete article"
      >
        <img src={deleteIcon} alt="delete_icon" className="w-5 h-5" />
      </button>
    </div>
  </div>
);
