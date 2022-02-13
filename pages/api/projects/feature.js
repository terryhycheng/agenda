import projects from "../../../src/projects.json";

function getFeatureProjects() {
  let ordered_projects = [];
  const selected_projects = projects.filter(
    (project) =>
      project.isFeature[0] === true &&
      project.isFeature[1] > 0 &&
      project.isFeature[1] < 5
  );

  selected_projects.sort((a, b) => {
    return a.isFeature[1] - b.isFeature[1];
  });

  while (selected_projects.length > 4) {
    selected_projects.pop();
  }

  return selected_projects;
}

export default function handler(req, res) {
  res.status(200).json(getFeatureProjects(projects));
}
