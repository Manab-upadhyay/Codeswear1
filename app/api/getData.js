import connectDB from '../db/page';
import Product from '../models/product';

export default async function GetData(req, res) {
  await connectDB(); // Connect to the database

  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
