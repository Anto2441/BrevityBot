export const ArticleSummary = ({ summary }) => (
  <div className="flex flex-col gap-8 mt-10">
    <h2 className="summary_title">
      Article <span className="sub_gradient">Summary</span>
    </h2>
    <div className="summary_box">
      <p className="summary_text">{summary}</p>
    </div>
  </div>
);
