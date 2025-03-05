import { Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import discoverImage from '../assets/hero.jpg';
import Instagram1 from '../assets/instagram1.jpg';
import Instagram2 from '../assets/instagram2.jpg';
import Instagram3 from '../assets/instagram3.jpg';
import Instagram4 from '../assets/instagram4.jpg';
import Instagram5 from '../assets/instagram5.jpg';
import Instagram6 from '../assets/instagram6.jpg';
import sylhurme from '../assets/selyhuerme.jpg';
import kingBed from '../assets/kingBed.jpg';
import sideTable from '../assets/sideTable.jpg';
import dresser from '../assets/dresser.jpg';
import lamp from '../assets/lamp.jpg';
import queenBed from '../assets/queenBed.jpg';
import armChair from '../assets/armChair.jpg';
import sofa from '../assets/sofa.jpg';
import room1 from '../assets/room1.jpg';
import room2 from '../assets/room2.jpg';
import room3 from '../assets/room3.jpg';
import room4 from '../assets/room4.jpg';
import room5 from '../assets/room5.jpg';
import room6 from '../assets/room6.jpg';

const categories = [
  { name: 'Dining', image: Instagram4 },
  { name: 'Living', image: sofa },
  { name: 'Bedroom', image: kingBed },
];

const products = [
  { name: 'Sylhuerme', category: 'Chair', price: 20000, image: sylhurme, tag: 'New' },
  { name: 'King Bed', category: 'Beds', price: 350000, image: kingBed, tag: 'Sale' },
  { name: 'Lofito', category: 'Bed', price: 55000, image: queenBed, tag: 'New' },
  { name: 'Reagrifo', category: 'Armchair', price: 32000, image: armChair, tag: 'Sale' },
  { name: 'Grilla', category: 'Lamp', price: 15000, image: lamp, tag: 'New' },
  { name: 'Mugges', category: 'Side Table', price: 20000, image: sideTable, tag: 'Sale' },
  { name: 'Pirgogy', category: 'Dresser', price: 70000, image: dresser, tag: 'Sale' },
  { name: 'Petty', category: 'Sofa', price: 52000, image: sofa, tag: 'New' },
];

const roomInspirations = [room1, room2, room3, room4, room5, room6];
const instagramPhotos = [Instagram1, Instagram2, Instagram3, Instagram4, Instagram5, Instagram6];

const Home = () => {
  const navigate = useNavigate();
  const handleshopNow = () => navigate('/shop');

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex">
        <img 
          src={discoverImage} 
          alt="New Collection" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-1/2 right-10 md:right-32 lg:right-48 transform -translate-y-1/2 bg-white p-12 shadow-xl max-w-md flex flex-col justify-between">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Browse Range */}
        <section className="text-center my-12">
          <h2 className="text-2xl sm:text-3xl font-bold">Browse The Range</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {categories.map((category) => (
              <div key={category.name} className="text-center">
                <img src={category.image} alt={category.name} className="w-full h-40 sm:h-60 object-cover rounded-lg" />
                <p className="text-lg font-medium mt-2">{category.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section className="text-center my-12">
          <h2 className="text-2xl sm:text-3xl font-bold">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {products.map((product) => (
              <div key={product.name} className="relative group">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
                {product.tag && (
                  <div className={`absolute top-2 left-2 px-3 py-1 rounded text-white ${product.tag === 'New' ? 'bg-green-500' : 'bg-red-500'}`}>{product.tag}</div>
                )}
                <div className="mt-4 text-left">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-gray-500 text-sm">{product.category}</p>
                  <p className="font-bold text-lg">Ksh {product.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Room Inspirations */}
        <section className="text-center my-12">
          <h2 className="text-2xl sm:text-3xl font-bold">Beautiful Rooms Inspiration</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {roomInspirations.map((image, index) => (
              <img key={index} src={image} alt={`Room ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
            ))}
          </div>
        </section>

        {/* Instagram */}
        <section className="text-center my-12">
          <div className="flex items-center justify-center mb-6">
            <Instagram size={32} className="mr-4" />
            <h2 className="text-2xl sm:text-3xl font-bold">#EshopFurniture</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {instagramPhotos.map((photo, index) => (
              <img key={index} src={photo} alt={`Instagram ${index + 1}`} className="w-full h-40 object-cover" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
