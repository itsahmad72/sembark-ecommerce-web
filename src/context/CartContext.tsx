import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export interface CartItem {
    id: number;
    title: string;
    image: string;
    price: number;
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    totalItems: number;
    totalPrice: number;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item: CartItem) => {
        setCart((prev) => {
            const existing = prev.find((i) => i.id === item.id);
            // console.log('existing', existing)
            if (existing) {
                return prev.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (id: number) => {
        setCart((prev) => prev.filter((i) => i.id !== id));
    };

    const totalItems = cart?.reduce((acc, i) => acc + i.quantity, 0);
    const totalPrice = cart.reduce((acc, i) => acc + i.price * i.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalItems, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
