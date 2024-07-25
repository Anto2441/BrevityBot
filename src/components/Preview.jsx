import { useState } from 'react';
import linkIcon from '../assets/link.svg';

const Preview = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      alert('Gotcha!');
    } catch (error) {
      console.error('Error fetching article summary:', error);
    }
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
      </div>
    </section>
  );
};

export default Preview;
