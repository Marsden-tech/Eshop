import { useState, useEffect } from "react";
import PropTypes from 'prop-types'; 
import useAuth from "../hooks/useAuth";
import CartContext from '../context/CartContext';
import {
  loadUserCart,
  loadGuestCart,
  saveUserCart,
  saveGuestCart,
  transferGuestCart as transferCart
} from '../services/cartService';

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const { user, isAuthenticated } = useAuth();
  
  // Load cart on initial render and when auth state changes
  useEffect(() => {
    const loadCart = async () => {
      setLoading(true);
      if (isAuthenticated && user?.access) {
        const { success, data, total } = await loadUserCart(user.access);
        if (success) {
          setItems(data);
          setCurrentItems(data);
          setTotal(total);
        } else {
          setItems([]);
          setCurrentItems([]);
          setTotal(0);
        }
      } else {
        const { items: guestItems, total: guestTotal } = loadGuestCart();
        setItems(guestItems);
        setCurrentItems(guestItems);
        setTotal(guestTotal);
      }
      setLoading(false);
    };
    
    loadCart();
  }, [isAuthenticated, user]);
  
  // Save cart changes
  const saveCart = async (newItems) => {
    if (!Array.isArray(newItems)) {
      console.error('Invalid cart items format');
      return false;
    }
    
    let result = { success: false, total: 0 };
    
    if (isAuthenticated && user?.access) {
      result = await saveUserCart(newItems, currentItems, user.access);
    } else {
      result = saveGuestCart(newItems);
    }
    
    if (result.success) {
      setItems(newItems);
      setCurrentItems(newItems);
      setTotal(result.total);
    }
    
    return result.success;
  };
  
  // Add item to cart
  const addItem = async (item) => {
    const existingItem = items.find(i => i.id === item.id);
    let newItems;
    
    if (existingItem) {
      newItems = items.map(i =>
        i.id === item.id
          ? { ...i, quantity: i.quantity + 1 }
          : i
      );
    } else {
      // Make sure we have all the necessary properties from the transform function
      const newItem = {
        id: item.id,
        name: item.name,
        price: parseFloat(item.price),
        image: item.image,
        quantity: 1,
        description: item.description,
        primary_material: item.primary_material,
        condition: item.condition,
        category: item.category,
      };
      
      newItems = [...items, newItem];
    }
    
    return await saveCart(newItems);
  };
  
  // Remove item from cart
  const removeItem = async (itemId) => {
    const newItems = items.filter(item => item.id !== itemId);
    return await saveCart(newItems);
  };
  
  // Update item quantity
  const updateQuantity = async (itemId, quantity) => {
    if (quantity < 1) {
      return removeItem(itemId);
    }
    
    const newItems = items.map(item =>
      item.id === itemId
        ? { ...item, quantity }
        : item
    );
    
    return await saveCart(newItems);
  };
  
  const clearCart = async () => {
    if (isAuthenticated && user?.access) {
      try {
        const response = await fetch('/api/cart/cart/', {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${user.access}`
          }
        });
        
        if (response.ok) {
          setItems([]);
          setCurrentItems([]);
          setTotal(0);
          return true;
        }
        return false;
      } catch (error) {
        console.error('Error clearing cart:', error);
        return false;
      }
    } else {
      // For guest users, just clear localStorage
      localStorage.removeItem('furnitureCart');
      setItems([]);
      setCurrentItems([]);
      setTotal(0);
      return true;
    }
  };
  
  // Transfer guest cart to user cart after login
  useEffect(() => {
    const handleTransferCart = async () => {
      if (isAuthenticated && user?.access) {
        const transferred = await transferCart(user.access);
        if (transferred) {
          const { success, data, total } = await loadUserCart(user.access);
          if (success) {
            setItems(data);
            setCurrentItems(data);
            setTotal(total);
          }
        }
      }
    };
    
    if (isAuthenticated && !loading) {
      handleTransferCart();
    }
  }, [isAuthenticated, user, loading]);
  
  const value = {
    items: items || [],
    total,
    loading,
    addItem,
    removeItem,
    updateQuantity,
    clearCart
  };
  
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default CartProvider;