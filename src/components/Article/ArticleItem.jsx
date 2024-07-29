import copyIcon from '../../assets/copy.svg';
import doneIcon from '../../assets/done.svg';

export const ArticleItem = ({ article, copied, handleCopy, setArticle }) => (
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
    </div>
  </div>
);
