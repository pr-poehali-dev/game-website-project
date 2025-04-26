import Navbar from "@/components/Navbar";
import GameCard from "@/components/GameCard";
import { Button } from "@/components/ui/button";

// Данные для демонстрации
const featuredGames = [
  {
    id: "racing-game",
    title: "Скоростной Форсаж",
    imageUrl: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?q=80&w=800&auto=format&fit=crop",
    category: "Гонки",
    rating: 9.2
  },
  {
    id: "adventure",
    title: "Затерянные Миры",
    imageUrl: "https://images.unsplash.com/photo-1640079421264-61f50d89a736?q=80&w=800&auto=format&fit=crop",
    category: "Приключения",
    rating: 8.7
  },
  {
    id: "shooter",
    title: "Тактический Штурм",
    imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop",
    category: "Шутер",
    rating: 8.9
  }
];

const popularGames = [
  {
    id: "rpg-1",
    title: "Хроники Драконов",
    imageUrl: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=800&auto=format&fit=crop",
    category: "RPG",
    rating: 9.5
  },
  {
    id: "strategy",
    title: "Империя: Новая Эра",
    imageUrl: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=800&auto=format&fit=crop",
    category: "Стратегия",
    rating: 8.8
  },
  {
    id: "simulator",
    title: "Городской Архитектор",
    imageUrl: "https://images.unsplash.com/photo-1628277613967-6abca504d0ac?q=80&w=800&auto=format&fit=crop",
    category: "Симулятор",
    rating: 8.3
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2000&auto=format&fit=crop" 
          alt="Игровой баннер" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-game-dark/80 to-transparent flex flex-col justify-end">
          <div className="container mx-auto px-6 pb-20">
            <h1 className="text-5xl font-bold text-white mb-4">Скоростной Форсаж</h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8">
              Почувствуй адреналин от скорости в новой гоночной игре с реалистичной физикой и захватывающими трассами
            </p>
            <div className="flex gap-4">
              <Button className="bg-game-accent hover:bg-game-accent/90 text-white px-8 py-6">
                Играть сейчас
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6">
                Подробнее
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Games Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Популярные игры</h2>
          <Button variant="outline" className="border-game-primary text-game-primary hover:bg-game-primary/10">
            Смотреть все
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredGames.map((game) => (
            <GameCard 
              key={game.id}
              id={game.id}
              title={game.title}
              imageUrl={game.imageUrl}
              category={game.category}
              rating={game.rating}
            />
          ))}
        </div>
      </section>
      
      {/* New Releases */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Новые релизы</h2>
            <Button variant="outline" className="border-game-primary text-game-primary hover:bg-game-primary/10">
              Смотреть все
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularGames.map((game) => (
              <GameCard 
                key={game.id}
                id={game.id}
                title={game.title}
                imageUrl={game.imageUrl}
                category={game.category}
                rating={game.rating}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-game-dark text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-game-accent">🎮</span> ИгроМания
              </h3>
              <p className="text-gray-400">Лучший портал о видеоиграх с обзорами, новостями и гайдами.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Разделы</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-game-accent">Популярные игры</a></li>
                <li><a href="#" className="text-gray-400 hover:text-game-accent">Новинки</a></li>
                <li><a href="#" className="text-gray-400 hover:text-game-accent">Обзоры</a></li>
                <li><a href="#" className="text-gray-400 hover:text-game-accent">Гайды</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Подписка</h3>
              <p className="text-gray-400 mb-4">Получайте новости и обновления на почту</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="bg-gray-800 px-4 py-2 rounded-l-md focus:outline-none"
                />
                <button className="bg-game-accent px-4 py-2 rounded-r-md">
                  →
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            &copy; 2025 ИгроМания. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
