import { getTableCount } from "../../lib/db";

export default async function handler(_, res) {
  res.status(200).json({ count: await getTableCount() });
}
