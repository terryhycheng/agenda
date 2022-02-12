import projects from "../../../src/projects.json";

function getProjectById(id) {
  const project = projects.find((project) => project.id === id);
  return project;
}

export default function handler(req, res) {
  getProjectById(req.query.id)
    ? res.status(200).json(getProjectById(req.query.id))
    : res.status(400).send("No project was found.");
}
