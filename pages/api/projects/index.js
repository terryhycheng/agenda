import projects from "../../../src/projects.json";

function reorderHandler() {
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

export default function handler(req, res) {
  res.status(200).json(reorderHandler(projects));
}
