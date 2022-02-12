export function getNewsById(id) {
  const news_single = news.find((one_news) => one_news.id === id);
  return news_single || news[0];
}

export function getAllProjects() {
  const ordered_list = projects.sort((a, b) => {
    var nameA = a.title.toUpperCase(); // ignore upper and lowercase
    var nameB = b.title.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  return ordered_list;
}
