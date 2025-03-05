import { useState, useEffect } from 'react';
import { 
  Instagram 
} from 'lucide-react';
import discoverImage from '../assets/hero.jpg'
import Instagram1 from '../assets/instagram1.jpg' 
import Instagram2 from '../assets/instagram2.jpg' 
import Instagram3 from '../assets/instagram3.jpg' 
import Instagram4 from '../assets/instagram4.jpg' 
import Instagram5 from '../assets/instagram5.jpg'
import Instagram6 from '../assets/instagram6.jpg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const products = [
  { 
    name: 'Sylhuerme', 
    category: 'Chair', 
    price: 1200000, 
    image: '/api/placeholder/300/300?text=Sylhuerme',
    tag: 'New'
  },
  { 
    name: 'Lesfat', 
    category: 'Sofa', 
    price: 7500000, 
    image: '/api/placeholder/300/300?text=Lesfat',
    tag: 'Sale'
  },
  { 
    name: 'Lofito', 
    category: 'Bed', 
    price: 5500000, 
    image: '/api/placeholder/300/300?text=Lofito',
    tag: 'New'
  },
  { 
    name: 'Reagrifo', 
    category: 'Armchair', 
    price: 3200000, 
    image: '/api/placeholder/300/300?text=Reagrifo',
    tag: 'Sale'
  },
  { 
    name: 'Grilla', 
    category: 'Lamp', 
    price: 1500000, 
    image: '/api/placeholder/300/300?text=Grilla'
  },
  { 
    name: 'Mugges', 
    category: 'Side Table', 
    price: 2000000, 
    image: '/api/placeholder/300/300?text=Mugges'
  },
  { 
    name: 'Pirgogy', 
    category: 'Dresser', 
    price: 7000000, 
    image: '/api/placeholder/300/300?text=Pirgogy'
  },
  { 
    name: 'Petty', 
    category: 'Sofa', 
    price: 5200000, 
    image: '/api/placeholder/300/300?text=Petty'
  }
];

const roomInspirations = [
  '/api/placeholder/400/400?text=Room1',
  '/api/placeholder/400/400?text=Room2',
  '/api/placeholder/400/400?text=Room3',
  '/api/placeholder/400/400?text=Room4',
  '/api/placeholder/400/400?text=Room5',
  '/api/placeholder/400/400?text=Room6'
];

const instagramPhotos = [
  Instagram1,
  Instagram2,
  Instagram3,
  Instagram4,
  Instagram5,
  Instagram6
];



const Home = () => {
    const navigate = useNavigate()
    // const [categories, setCategories] = useState({})
    // const [categoryProducts, setCategoryProducts] = useState({});

    const handleshopNow = () => {
        navigate('/shop')
      
    }


    // useEffect(() => {
    //     // Fetch categories
    //     const fetchCategories = async () => {
    //         try {
    //             const response = await axios.get('/api/products/categories/');
    //             setCategories(response.data);

    //             // Fetch products for each category
    //             const productPromises = response.data.map(async (category) => {
    //                 const productsResponse = await axios.get(`/api/products/products/?category=${category.id}`);
    //                 return { 
    //                     categoryName: category.name, 
    //                     products: productsResponse.data.results 
    //                 };
    //             });

    //             const categoryProductsData = await Promise.all(productPromises);
    //             const productsMap = categoryProductsData.reduce((acc, item) => {
    //                 acc[item.categoryName] = item.products;
    //                 return acc;
    //             }, {});

    //             setCategoryProducts(productsMap);
    //         } catch (error) {
    //             console.error('Error fetching categories or products:', error);
    //         }
    //     };

    //     fetchCategories();
    // }, []);



  return (
    <div className="relative">
      {/* Full-length hero section */}
      <section className="relative h-screen w-full flex">
        <img 
          src={discoverImage} 
          alt="New Collection" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-1/2 h-110 right-20 transform -translate-y-1/2 bg-white p-12 shadow-xl max-w-md flex flex-col justify-between">
        <div>
          <p>New Arrival</p>
          <h2 className="text-4xl font-bold mb-6 text-yellow-600">Discover Our New Collection</h2>
          <p className="mb-8 text-gray-600 text-lg leading-relaxed">
            Discover our latest furniture designs that blend comfort, style, and innovation
          </p>
        </div>
        <button onClick={handleshopNow} className="bg-yellow-600 text-white w-3/5 px-10 py-4 text-lg hover:bg-amber-600 transition-colors mt-auto">
          Shop Now
        </button>
      </div>

      </section>


      <div className="max-w-7xl mx-auto">
        {/* Browse Range */}
        {/* <section className="px-6 mb-12">
                <h2 className="text-center text-3xl font-bold mb-8">Browse The Range</h2>
                <div className="flex justify-center space-x-8">
                    {categories.map((category) => {
                        const categoryProductList = categoryProducts[category.name] || [];
                        const representativeProduct = categoryProductList[0];

                        return (
                            <div key={category.id} className="text-center">
                                <img 
                                    src={representativeProduct?.image || '/api/placeholder/300/300?text=No Image'} 
                                    alt={category.name} 
                                    className="rounded-lg mb-4 w-64 h-64 object-cover"
                                />
                                <p className="text-xl">{category.name}</p>
                                <p className="text-sm text-gray-500">
                                    {categoryProductList.length} Products
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section> */}

        {/* Our Products */}
        <section className="px-6 mb-12">
          <h2 className="text-center text-3xl font-bold mb-8">Our Products</h2>
          <div className="grid grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.name} className="relative group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover rounded-lg"
                />
                {product.tag && (
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded text-white ${
                    product.tag === 'New' ? 'bg-green-500' : 'bg-red-500'
                  }`}>
                    {product.tag}
                  </div>
                )}
                <div className="mt-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-gray-500">{product.category}</p>
                  <p className="font-bold">Rp {product.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 50+ Beautiful Rooms */}
        <section className="px-6 mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">50+ Beautiful Rooms Inspiration</h2>
            <a href="#" className="text-yellow-600">View More</a>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {roomInspirations.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`Room ${index + 1}`} 
                className="w-full h-64 object-cover rounded-lg"
              />
            ))}
          </div>
        </section>

        {/* Instagram */}
        <section className="px-6 mb-12">
          <div className="flex items-center justify-center mb-8">
            <Instagram size={32} className="mr-4" />
            <h2 className="text-3xl font-bold">#EshopFurniture</h2>
          </div>
          <div className="grid grid-cols-6 gap-4">
            {instagramPhotos.map((photo, index) => (
              <img 
                key={index} 
                src={photo} 
                alt={`Instagram ${index + 1}`} 
                className="w-full h-48 object-cover"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;