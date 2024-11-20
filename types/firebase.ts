export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  specifications: Record<string, string>;
  images: string[];
  image?: string; // For backwards compatibility
  upvotes: string[];
  affiliateLink: string;
  createdAt: Date;
  updatedAt: Date;
}