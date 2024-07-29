import { useEffect, useState } from 'react';
import linkIcon from '../assets/link.svg';
import loaderIcon from '../assets/loader.svg';
import { useLazyGetSummaryQuery } from '../services/article';

import { ArticleItem } from './Article/ArticleItem';
import { ArticleSummary } from './Article/ArticleSummary';

const Preview = () => {
  const [article, setArticle] = useState({ url: '', summary: '' });
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState('');

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    try {
      const articlesFromLocalStorage =
        JSON.parse(localStorage.getItem('articles')) || [];
      setAllArticles(articlesFromLocalStorage);
    } catch (e) {
      console.error('Failed to parse articles from local storage:', e);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await getSummary({ articleUrl: article.url });
      if (data?.summary) {
        const newArticle = { ...article, summary: data.summary };
        const updatedAllArticles = [newArticle, ...allArticles];
        setArticle(newArticle);
        setAllArticles(updatedAllArticles);
        localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
      } else {
        console.error('No article summary found.', error);
      }
    } catch (e) {
      console.error('Error fetching article summary:', e);
    }
  };

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="Link icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Paste the article link"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="input peer"
            aria-label="Article URL"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            Go!
          </button>
        </form>

        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((article, index) => (
            <ArticleItem
              key={index}
              article={article}
              copied={copied}
              handleCopy={handleCopy}
              setArticle={setArticle}
            />
          ))}
        </div>

        {isFetching ? (
          <div className="flex justify-center items-center">
            <img
              src={loaderIcon}
              alt="loader"
              className="w-20 h-20 object-contain"
            />
          </div>
        ) : error ? (
          <p className="font-inter font-bold text-center">
            Well, that wasn&apos;t supposed to happen...
            <br />
            <span className="text-gray-700">{error?.data?.error}</span>
          </p>
        ) : (
          article.summary && <ArticleSummary summary={article.summary} />
        )}
      </div>
    </section>
  );
};

export default Preview;
