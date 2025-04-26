import Navbar from "@/components/Navbar";
import GameCard from "@/components/GameCard";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

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

const freeGames = [
  {
    id: "free-battle",
    title: "Легенды Арены",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    category: "Батл-рояль",
    rating: 8.6
  },
  {
    id: "free-mmo",
    title: "Мир Фантазий",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    category: "MMO",
    rating: 8.2
  },
  {
    id: "free-racing",
    title: "Уличные Гонки",
    imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop",
    category: "Гонки",
    rating: 7.9
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
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 flex items-center gap-2">
                <PlayCircle size={20} />
                Смотреть трейлер
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Tutorial Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Как играть</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Видео урок по игре" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full object-cover"
              ></iframe>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Освойте основы за 10 минут</h3>
              <p className="text-lg mb-6">
                Наше обучающее видео покажет вам, как быстро освоить управление, настроить машину для лучшей производительности и выигрывать гонки с первых попыток.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-game-accent">✓</span> 
                  <span>Управление и базовые приемы</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-game-accent">✓</span> 
                  <span>Тюнинг и модификации автомобиля</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-game-accent">✓</span> 
                  <span>Тактики для победы в различных режимах</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-game-accent">✓</span> 
                  <span>Секретные трассы и сокращения</span>
                </li>
              </ul>
              <Button className="mt-6 bg-game-primary hover:bg-game-primary/90">Больше обучающих видео</Button>
            </div>
          </div>
        </div>
      </section>
      
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
      
      {/* Free Games Section */}
      <section className="py-16 bg-game-dark text-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Бесплатные игры</h2>
            <Button variant="outline" className="border-game-accent text-game-accent hover:bg-game-accent/10">
              Смотреть все
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freeGames.map((game) => (
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
          
          <div className="mt-12 bg-gradient-to-r from-game-primary to-game-accent p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Играйте бесплатно прямо сейчас!</h3>
                <p className="text-white/80">Более 50 бесплатных игр доступно без регистрации</p>
              </div>
              <Button className="bg-white text-game-primary hover:bg-white/90 px-8 py-6">
                Начать играть
              </Button>
            </div>
          </div>
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
                <span className="text-game-accent">🔥</span> Fire Game
              </h3>
              <p className="text-gray-400">Лучший портал о видеоиграх с обзорами, новостями и гайдами.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Разделы</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-game-accent">Популярные игры</a></li>
                <li><a href="#" className="text-gray-400 hover:text-game-accent">Бесплатные игры</a></li>
                <li><a href="#" className="text-gray-400 hover:text-game-accent">Новинки</a></li>
                <li><a href="#" className="text-gray-400 hover:text-game-accent">Обзоры</a></li>
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
            &copy; 2025 Fire Game. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
