export const mockArticleApi = {
  getSummary: async ({ articleUrl }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            summary: `This is a fake summary for the article at ${articleUrl}.`,
          },
        });
      }, 1000);
    });
  },
};
