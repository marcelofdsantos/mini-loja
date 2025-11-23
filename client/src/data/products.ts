export interface Product {
  id: string;
  title: string;
  price: number;
  rating: number;
  tag: "Novo" | "Promo" | null;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Fone de Ouvido Bluetooth Premium com Cancelamento de Ruído",
    price: 299.99,
    rating: 4.5,
    tag: "Novo",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
  },
  {
    id: "2",
    title: "Smartwatch Fitness Tracker com Monitoramento de Saúde",
    price: 199.99,
    rating: 4.2,
    tag: "Promo",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
  },
  {
    id: "3",
    title: "Câmera Digital Mirrorless 4K com Lente Profissional",
    price: 1299.99,
    rating: 4.8,
    tag: null,
    image: "https://images.unsplash.com/photo-1606986601547-a4d886b671b2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    title: "Teclado Mecânico RGB Gaming com Switches Customizáveis",
    price: 149.99,
    rating: 4.6,
    tag: "Novo",
    image: "https://images.pexels.com/photos/34877294/pexels-photo-34877294.jpeg",
  },
  {
    id: "5",
    title: "Monitor Ultrawide Curvo 34 polegadas 144Hz para Gaming",
    price: 599.99,
    rating: 4.4,
    tag: "Promo",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
  },
  {
    id: "6",
    title: "Webcam 4K com Microfone Estéreo para Streaming Profissional",
    price: 249.99,
    rating: 4.3,
    tag: null,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop",
  },
];
