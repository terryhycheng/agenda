import projects from "../../../src/projects.json";

export default function handler(req, res) {
  res.status(200).json(projects);
}
