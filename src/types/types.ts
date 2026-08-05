import type { IconType } from "react-icons";

export interface navItem {
  id: number;
  title: string;
  icon: IconType;
  path: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "active" | "draft" | "archived";
  rating: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "manager" | "mijoz";
  online: boolean;
  orders: number;
  initials: string;
  color: string;
}

export interface Order {
  id: string;
  customer: string;
  initials: string;
  product: string;
  amount: number;
  status: "yakunlandi" | "kutilmoqda" | "bekor qilindi";
  date: string;
}
