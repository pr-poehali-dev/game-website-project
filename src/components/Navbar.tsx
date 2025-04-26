import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-game-dark text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <span className="text-game-accent">🔥</span> Fire Game
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-game-accent transition-colors">Главная</Link>
          <div className="relative">
            <button 
              className="flex items-center gap-1 hover:text-game-accent transition-colors"
              onClick={toggleDropdown}
            >
              Игры <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-game-dark border border-gray-700 rounded-md shadow-lg z-10">
                <div className="py-1">
                  <Link 
                    to="/racing-game" 
                    className="block px-4 py-2 hover:bg-game-primary/20 hover:text-game-accent transition-colors"
                  >
                    Гонки
                  </Link>
                  <Link 
                    to="/car-game" 
                    className="block px-4 py-2 hover:bg-game-primary/20 hover:text-game-accent transition-colors"
                  >
                    Симулятор Вождения
                  </Link>
                  <Link 
                    to="/free-games" 
                    className="block px-4 py-2 hover:bg-game-primary/20 hover:text-game-accent transition-colors"
                  >
                    Бесплатные игры
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link to="/free-games" className="hover:text-game-accent transition-colors">Бесплатные игры</Link>
          <a href="#" className="hover:text-game-accent transition-colors">Новинки</a>
          <a href="#" className="hover:text-game-accent transition-colors">Обзоры</a>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-game-primary hover:bg-game-secondary text-white px-4 py-2 rounded-md transition-colors">
            Войти
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 bg-game-dark border-t border-gray-700 z-10">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link to="/" className="hover:text-game-accent transition-colors">Главная</Link>
            <Link to="/racing-game" className="hover:text-game-accent transition-colors">Гонки</Link>
            <Link to="/car-game" className="hover:text-game-accent transition-colors">Симулятор Вождения</Link>
            <Link to="/free-games" className="hover:text-game-accent transition-colors">Бесплатные игры</Link>
            <a href="#" className="hover:text-game-accent transition-colors">Новинки</a>
            <a href="#" className="hover:text-game-accent transition-colors">Обзоры</a>
            <button className="bg-game-primary hover:bg-game-secondary text-white px-4 py-2 rounded-md transition-colors w-full">
              Войти
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;