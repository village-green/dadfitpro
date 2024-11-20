import { 
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  orderBy,
  writeBatch,
  serverTimestamp
} from 'firebase/firestore';
import { db } from './config';
import type { Product } from '@/types/firebase';

const INITIAL_PRODUCTS = [
  {
    id: 'powerblock-elite',
    name: "PowerBlock Elite Dumbbells",
    description: "Adjustable from 5-50 lbs per hand, replacing 16 pairs of dumbbells",
    price: 329.99,
    features: ["Quick-change weight system", "Compact design", "Durable construction"],
    specifications: {
      "Weight Range": "5-50 lbs per hand",
      "Increments": "2.5 lbs",
      "Replaces": "16 pairs of dumbbells"
    },
    images: ["https://images.unsplash.com/photo-1638536532686-d610adfc8e5c"],
    image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c",
    upvotes: [],
    affiliateLink: "https://example.com/powerblock",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  },
  {
    id: 'bowflex-552',
    name: "Bowflex SelectTech 552",
    description: "Quick-change weight system from 5-52.5 lbs, perfect for home gyms",
    price: 399.99,
    features: ["Dial adjustment system", "Premium grips", "Modern design"],
    specifications: {
      "Weight Range": "5-52.5 lbs per hand",
      "Increments": "2.5 lbs",
      "Replaces": "15 pairs of dumbbells"
    },
    images: ["https://images.unsplash.com/photo-1620188467120-5042ed1eb5da"],
    image: "https://images.unsplash.com/photo-1620188467120-5042ed1eb5da",
    upvotes: [],
    affiliateLink: "https://example.com/bowflex",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  }
];

export const initializeProducts = async (): Promise<void> => {
  try {
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef);
    
    // Only initialize if no products exist
    if (snapshot.empty) {
      const batch = writeBatch(db);
      
      for (const product of INITIAL_PRODUCTS) {
        const productRef = doc(db, 'products', product.id);
        batch.set(productRef, product);
      }
      
      await batch.commit();
    }
  } catch (error) {
    console.error('Error initializing products:', error);
    // Don't throw the error, just log it
  }
};

export const getProducts = async (): Promise<Product[]> => {
  try {
    const productsRef = collection(db, 'products');
    const q = query(productsRef, orderBy('updatedAt', 'desc'));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      return INITIAL_PRODUCTS;
    }

    return snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        description: data.description,
        price: data.price,
        features: data.features || [],
        specifications: data.specifications || {},
        images: data.images || [],
        image: data.image || data.images?.[0],
        upvotes: data.upvotes || [],
        affiliateLink: data.affiliateLink || '',
        createdAt: data.createdAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate() || new Date()
      } as Product;
    }).sort((a, b) => (b.upvotes?.length || 0) - (a.upvotes?.length || 0));
  } catch (error) {
    console.error('Error in getProducts:', error);
    // Return initial products as fallback
    return INITIAL_PRODUCTS.map(product => ({
      ...product,
      createdAt: new Date(),
      updatedAt: new Date()
    }));
  }
};

export const toggleUpvote = async (productId: string, userId: string): Promise<void> => {
  try {
    const productRef = doc(db, 'products', productId);
    const productDoc = await getDoc(productRef);
    
    if (!productDoc.exists()) {
      throw new Error('Product not found');
    }

    const currentUpvotes = productDoc.data()?.upvotes || [];
    
    await updateDoc(productRef, {
      upvotes: currentUpvotes.includes(userId) 
        ? arrayRemove(userId)
        : arrayUnion(userId),
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error toggling upvote:', error);
    throw error;
  }
};