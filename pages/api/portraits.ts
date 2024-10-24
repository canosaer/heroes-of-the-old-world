import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { species } = req.query;
  const portraitsPath = path.join(process.cwd(), 'public/assets/img/tactical/portraits', species as string);

  try {
    const portraits = fs.readdirSync(portraitsPath).filter(file => file.endsWith('.webp'));
    res.status(200).json(portraits);
  } catch (error) {
    console.error('Error reading portraits:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}