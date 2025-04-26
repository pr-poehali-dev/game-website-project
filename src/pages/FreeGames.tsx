import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Определение типов для машины и препятствий
interface Car {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Obstacle {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
}

const FreeGames = () => {
  const [selectedGame, setSelectedGame] = useState("carRace");
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gameLoopRef = useRef<number | null>(null);
  
  // Игровые объекты
  const carRef = useRef<Car>({
    x: 50,
    y: 300,
    width: 50,
    height: 30
  });
  const obstaclesRef = useRef<Obstacle[]>([]);
  const keysRef = useRef<{ [key: string]: boolean }>({});

  // Инициализация игры
  const initGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    
    carRef.current = {
      x: 50,
      y: 300,
      width: 50,
      height: 30
    };
    
    obstaclesRef.current = [];
    
    if (gameLoopRef.current) {
      cancelAnimationFrame(gameLoopRef.current);
    }
    
    gameLoop();
  };

  // Главный игровой цикл
  const gameLoop = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Очистка канваса
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Обновление позиции машины
    updateCarPosition();
    
    // Генерация препятствий
    if (Math.random() < 0.02) {
      obstaclesRef.current.push({
        x: canvas.width,
        y: Math.random() * (canvas.height - 40),
        width: 30,
        height: 30,
        speed: 2 + Math.random() * 3
      });
    }
    
    // Обновление и отрисовка препятствий
    updateAndDrawObstacles(ctx);
    
    // Отрисовка машины
    drawCar(ctx);
    
    // Проверка столкновений
    checkCollisions();
    
    // Отображение счета
    ctx.fillStyle = "#ffffff";
    ctx.font = "20px Arial";
    ctx.fillText(`Счёт: ${score}`, 10, 30);
    
    // Дорожная разметка
    drawRoad(ctx, canvas);
    
    if (!gameOver) {
      // Увеличиваем счет
      setScore(prev => prev + 1);
      
      // Продолжаем игровой цикл
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    } else {
      // Отображение экрана Game Over
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = "#ffffff";
      ctx.font = "36px Arial";
      ctx.fillText("GAME OVER", canvas.width / 2 - 100, canvas.height / 2 - 20);
      
      ctx.font = "24px Arial";
      ctx.fillText(`Ваш счёт: ${score}`, canvas.width / 2 - 70, canvas.height / 2 + 20);
      
      ctx.font = "18px Arial";
      ctx.fillText("Нажмите 'Начать игру', чтобы играть снова", canvas.width / 2 - 170, canvas.height / 2 + 60);
    }
  };

  // Отрисовка дороги
  const drawRoad = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.fillStyle = "#333";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Дорожная разметка
    ctx.strokeStyle = "#ffffff";
    ctx.setLineDash([20, 20]);
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    
    // Обочины
    ctx.strokeStyle = "#ffff00";
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(20, 0);
    ctx.lineTo(20, canvas.height);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(canvas.width - 20, 0);
    ctx.lineTo(canvas.width - 20, canvas.height);
    ctx.stroke();
  };

  // Обновление позиции машины
  const updateCarPosition = () => {
    const car = carRef.current;
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Управление машиной с клавиатуры
    if (keysRef.current["ArrowUp"] || keysRef.current["w"]) {
      car.y -= 5;
    }
    if (keysRef.current["ArrowDown"] || keysRef.current["s"]) {
      car.y += 5;
    }
    if (keysRef.current["ArrowLeft"] || keysRef.current["a"]) {
      car.x -= 5;
    }
    if (keysRef.current["ArrowRight"] || keysRef.current["d"]) {
      car.x += 5;
    }
    
    // Границы для машины
    car.x = Math.max(30, Math.min(canvas.width - car.width - 30, car.x));
    car.y = Math.max(10, Math.min(canvas.height - car.height - 10, car.y));
  };

  // Обновление и отрисовка препятствий
  const updateAndDrawObstacles = (ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    obstaclesRef.current = obstaclesRef.current.filter(obstacle => {
      // Движение препятствия
      obstacle.x -= obstacle.speed;
      
      // Отрисовка препятствия
      ctx.fillStyle = "#ff0000";
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      
      // Убираем препятствия, которые вышли за пределы экрана
      return obstacle.x + obstacle.width > 0;
    });
  };

  // Отрисовка машины
  const drawCar = (ctx: CanvasRenderingContext2D) => {
    const car = carRef.current;
    
    // Машина (кузов)
    ctx.fillStyle = "#0088ff";
    ctx.fillRect(car.x, car.y, car.width, car.height);
    
    // Кабина
    ctx.fillStyle = "#87cefa";
    ctx.fillRect(car.x + 10, car.y - 10, car.width - 20, 15);
    
    // Колеса
    ctx.fillStyle = "#000000";
    ctx.fillRect(car.x + 5, car.y - 5, 10, 5); // Переднее левое
    ctx.fillRect(car.x + car.width - 15, car.y - 5, 10, 5); // Переднее правое
    ctx.fillRect(car.x + 5, car.y + car.height, 10, 5); // Заднее левое
    ctx.fillRect(car.x + car.width - 15, car.y + car.height, 10, 5); // Заднее правое
  };

  // Проверка столкновений
  const checkCollisions = () => {
    const car = carRef.current;
    
    for (const obstacle of obstaclesRef.current) {
      if (
        car.x < obstacle.x + obstacle.width &&
        car.x + car.width > obstacle.x &&
        car.y < obstacle.y + obstacle.height &&
        car.y + car.height > obstacle.y
      ) {
        setGameOver(true);
        return;
      }
    }
  };

  // Обработчики событий клавиатуры
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysRef.current[e.key] = true;
    };
    
    const handleKeyUp = (e: KeyboardEvent) => {
      keysRef.current[e.key] = false;
    };
    
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-game-dark text-white">
      <Navbar />
      
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-6 flex items-center">
          <span className="text-game-accent mr-2">🎮</span> Бесплатные Игры
        </h1>
        
        <Tabs defaultValue="carRace" className="w-full" onValueChange={setSelectedGame}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="carRace">Гонки на Выживание</TabsTrigger>
            <TabsTrigger value="comingSoon">Скоро появятся</TabsTrigger>
          </TabsList>
          
          <TabsContent value="carRace" className="space-y-6">
            <Card className="bg-game-card/30 p-6 rounded-xl border-game-accent/30">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4 text-game-accent">Гонки на Выживание</h2>
                  
                  <p className="mb-4">
                    Управляйте машиной и уклоняйтесь от препятствий как можно дольше. Чем дольше продержитесь, тем больше очков наберёте!
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Управление:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Стрелки или WASD для движения машины</li>
                      <li>Избегайте красных препятствий</li>
                      <li>Старайтесь продержаться как можно дольше</li>
                    </ul>
                  </div>
                  
                  <Button 
                    onClick={initGame} 
                    className="bg-game-primary hover:bg-game-secondary text-white px-6 py-3 rounded-md transition-colors"
                  >
                    {gameStarted ? "Начать заново" : "Начать игру"}
                  </Button>
                </div>
                
                <div className="flex-1 flex flex-col items-center">
                  <div className="relative">
                    <canvas 
                      ref={canvasRef} 
                      width={600} 
                      height={400} 
                      className="border-2 border-game-accent/50 rounded-md bg-gray-800 w-full max-w-[600px] aspect-[3/2]"
                    />
                    
                    {!gameStarted && !gameOver && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 rounded-md">
                        <h3 className="text-2xl font-bold mb-4 text-game-accent">Гонки на Выживание</h3>
                        <p className="text-center mb-4 max-w-md px-4">
                          Управляйте машиной и избегайте препятствий. Нажмите кнопку, чтобы начать!
                        </p>
                        <Button 
                          onClick={initGame} 
                          className="bg-game-primary hover:bg-game-secondary text-white px-6 py-3 rounded-md transition-colors"
                        >
                          Играть
                        </Button>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4 text-sm text-gray-400">
                    <p>* Для лучшего игрового опыта рекомендуется играть на компьютере</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <div className="bg-game-card/30 p-6 rounded-xl border-game-accent/30">
              <h3 className="text-xl font-bold mb-4">Таблица лидеров</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-gray-700">
                    <tr>
                      <th className="text-left py-3 px-4">#</th>
                      <th className="text-left py-3 px-4">Игрок</th>
                      <th className="text-left py-3 px-4">Счёт</th>
                      <th className="text-left py-3 px-4">Дата</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700/50">
                      <td className="py-3 px-4">1</td>
                      <td className="py-3 px-4">SpeedRacer</td>
                      <td className="py-3 px-4 text-game-accent">12,345</td>
                      <td className="py-3 px-4">25.04.2025</td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="py-3 px-4">2</td>
                      <td className="py-3 px-4">DriftKing</td>
                      <td className="py-3 px-4 text-game-accent">10,982</td>
                      <td className="py-3 px-4">24.04.2025</td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="py-3 px-4">3</td>
                      <td className="py-3 px-4">NitroBoost</td>
                      <td className="py-3 px-4 text-game-accent">9,876</td>
                      <td className="py-3 px-4">23.04.2025</td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="py-3 px-4">4</td>
                      <td className="py-3 px-4">RoadWarrior</td>
                      <td className="py-3 px-4 text-game-accent">8,721</td>
                      <td className="py-3 px-4">22.04.2025</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">5</td>
                      <td className="py-3 px-4">TurboRacer</td>
                      <td className="py-3 px-4 text-game-accent">7,654</td>
                      <td className="py-3 px-4">21.04.2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="comingSoon">
            <Card className="bg-game-card/30 p-6 rounded-xl border-game-accent/30">
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4 text-game-accent">
                  Новые игры в разработке!
                </h2>
                <p className="mb-6 max-w-2xl mx-auto">
                  Наша команда разработчиков работает над новыми захватывающими играми. 
                  Оставайтесь с нами, чтобы быть в курсе новинок. Подпишитесь на уведомления, 
                  чтобы узнать о выходе новых игр первыми!
                </p>
                <Button 
                  className="bg-game-primary hover:bg-game-secondary text-white px-6 py-3 rounded-md transition-colors"
                >
                  Подписаться на обновления
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="bg-game-dark border-t border-gray-700 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-bold flex items-center gap-2">
                <span className="text-game-accent">🔥</span> Fire Game
              </div>
              <p className="text-sm text-gray-400 mt-1">© 2025 Все права защищены</p>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                О нас
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Контакты
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FreeGames;
