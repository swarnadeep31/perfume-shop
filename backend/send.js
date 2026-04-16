import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";


dotenv.config();

const products = [
  {
    name: "Dior Sauvage",
    description: "A fresh, spicy fragrance with bergamot and ambroxan notes.",
    price: 8999,
    images: ["https://images.unsplash.com/photo-1594035910387-fea47794261f"],
    sizes: ["50ml", "100ml"]
  },
  {
    name: "Chanel No. 5",
    description: "An iconic floral bouquet with jasmine and rose.",
    price: 10999,
    images: ["https://images.unsplash.com/photo-1615634260167-c8cdede054de"],
    sizes: ["50ml", "100ml"]
  },
  {
    name: "YSL Black Opium",
    description: "A warm and addictive blend of coffee and vanilla.",
    price: 9999,
    images: ["https://images.unsplash.com/photo-1592945403244-b3fbafd7f539"],
    sizes: ["50ml", "90ml"]
  },
  {
    name: "Tom Ford Oud Wood",
    description: "A luxurious woody scent with oud, sandalwood, and amber.",
    price: 15999,
    images: ["https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd"],
    sizes: ["50ml", "100ml"]
  },
  {
    name: "Paco Rabanne 1 Million",
    description: "A bold and luxurious scent with leather and spice.",
    price: 8999,
    images: ["https://images.unsplash.com/photo-1594035910387-fea47794261f"],
    sizes: ["50ml", "100ml"]
  }
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Product.deleteMany(); // clear old data
    await Product.insertMany(products);

    console.log("Data seeded!");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedData();