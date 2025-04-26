import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-game-dark text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <span className="text-game-accent">🎮</span> ИгроМания
        </Link>
        
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-game-accent transition-colors">Главная</Link>
          <Link to="/racing-game" className="hover:text-game-accent transition-colors">Гонки</Link>
          <a href="#" className="hover:text-game-accent transition-colors">Новинки</a>
          <a href="#" className="hover:text-game-accent transition-colors">Обзоры</a>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="bg-game-primary hover:bg-game-secondary text-white px-4 py-2 rounded-md transition-colors">
            Войти
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
