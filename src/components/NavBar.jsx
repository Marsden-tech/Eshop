import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  User, 
  ShoppingCart, 
  Heart, 
  LogOut, 
  ShoppingCartIcon
} from 'lucide-react';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';

const NavItem = ({ to, children, setIsOpen, icon: Icon }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center space-x-2 py-2 px-4 ${
        isActive ? 'text-yellow-600 font-bold' : 'text-gray-700 hover:text-yellow-600'
      } transition-colors duration-200`
    }
    onClick={() => setIsOpen(false)}
  >
    {Icon && <Icon strokeWidth={2.5} size={20} />}
    <span>{children}</span>
  </NavLink>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  icon: PropTypes.elementType
};

const Logo = () => (
  <div className="text-2xl font-bold">
    <span className="text-yellow-600">E</span>shop
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { logout, isAuthenticated } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsOpen(false);
    }
  };

  const navLinks = [
    { to: '/', label: 'Home'},
    { to: '/shop', label: 'Shop' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-white shadow-sm p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="hover:opacity-80 transition-opacity duration-200">
            <Logo />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-6 flex-grow font-bold">
            {navLinks.map((link) => (
              <NavItem 
                key={link.to} 
                to={link.to} 
                setIsOpen={setIsOpen} 
                icon={link.icon}
              >
                {link.label}
              </NavItem>
            ))}
          </div>
          
          {/* Auth and Actions */}
          <div className="hidden md:flex items-center space-x-4 font-bold">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <NavLink 
                  to="/profile" 
                  className="text-gray-700 hover:text-yellow-600 transition-colors duration-200"
                >
                  <User strokeWidth={2.5} size={20} />
                </NavLink>
                <NavLink 
                  to="/cart" 
                  className="text-gray-700 hover:text-yellow-600 transition-colors duration-200"
                >
                  <ShoppingCartIcon strokeWidth={2.5} size={20} />
                </NavLink>
                <NavLink 
                  to="/wishList" 
                  className="text-gray-700 hover:text-yellow-600 transition-colors duration-200"
                >
                  <Heart strokeWidth={2.5} size={20} />
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-gray-700 hover:text-red-500 transition-colors duration-200"
                >
                  <LogOut strokeWidth={2.5} size={20} />
                </button>
              </div>
            ) : (
              <> 
                <NavLink 
                  to="/cart" 
                  className="text-gray-700 hover:text-yellow-600 transition-colors duration-200"
                >
                  <ShoppingCart strokeWidth={2.5} size={20} />
                </NavLink>
                <NavLink to="/login">
                  <button className="border px-4 py-2 rounded hover:bg-gray-100 transition-colors">
                    Login
                  </button>
                </NavLink>
                <NavLink to="/signup">
                  <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-amber-600 transition-colors">
                    Sign Up
                  </button>
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-yellow-600 transition-colors duration-200"
            >
              {isOpen ? <X strokeWidth={2.5} size={24} /> : <Menu strokeWidth={2.5} size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 bg-white shadow-lg rounded-lg font-bold">
            {navLinks.map((link) => (
              <NavItem 
                key={link.to} 
                to={link.to} 
                setIsOpen={setIsOpen} 
                icon={link.icon}
              >
                {link.label}
              </NavItem>
            ))}
            
            {isAuthenticated ? (
              <>
                <NavItem to="/profile" setIsOpen={setIsOpen} icon={User}>
                  Profile
                </NavItem>
                <NavItem to="/cart" setIsOpen={setIsOpen} icon={ShoppingCartIcon}>
                  Cart
                </NavItem>
                <NavItem to="/wishList" setIsOpen={setIsOpen} icon={Heart}>
                  Wish List
                </NavItem>
                <button
                  onClick={handleLogout}
                  className="w-full text-left flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-red-500 transition-colors duration-200"
                >
                  <LogOut strokeWidth={2.5} size={20} />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <div className="px-4 py-2 space-y-2">
                <NavLink 
                  to="/cart" 
                  className="flex items-center space-x-2 text-gray-700 hover:text-yellow-600 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <ShoppingCart strokeWidth={2.5} size={20} />
                  <span>Cart</span>
                </NavLink>
                <NavLink to="/login" className="block" onClick={() => setIsOpen(false)}>
                  <button className="w-full border px-4 py-2 rounded hover:bg-gray-100 transition-colors">
                    Login
                  </button>
                </NavLink>
                <NavLink to="/signup" className="block" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-yellow-600 text-white px-4 py-2 rounded hover:bg-amber-600 transition-colors">
                    Sign Up
                  </button>
                </NavLink>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;