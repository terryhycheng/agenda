import staff from "../../../src/staff.json";

export default function handler(req, res) {
  res.status(200).json(staff);
}
