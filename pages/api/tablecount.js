import { getTableCount } from "../../lib/db";

export default function handler(_, res) {
  res.status(200).json({ count: getTableCount() });
}
