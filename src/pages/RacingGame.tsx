import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Star, MessageCircle, Share2, Award, Clock, Activity, Users, Gamepad2 } from "lucide-react";

const RacingGame = () => {
  const [activeImage, setActiveImage] = useState(0);
  
  const gameImages = [
    "https://images.unsplash.com/photo-1590845947698-8924d7409b56?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop"
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left section - Game Info */}
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-bold mb-4">Скоростной Форсаж</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-game-accent" fill={star <= 4.5 ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="text-lg font-semibold">9.2/10</span>
              <span className="text-muted-foreground">(216 отзывов)</span>
            </div>
            
            {/* Main image */}
            <div className="relative rounded-lg overflow-hidden mb-4">
              <img 
                src={gameImages[activeImage]} 
                alt="Скриншот из игры" 
                className="w-full aspect-video object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2 mb-8">
              {gameImages.map((img, index) => (
                <div 
                  key={index} 
                  className={`cursor-pointer rounded-md overflow-hidden border-2 ${index === activeImage ? 'border-game-accent' : 'border-transparent'}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img 
                    src={img} 
                    alt={`Скриншот ${index + 1}`} 
                    className="w-full aspect-video object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Tabs */}
            <Tabs defaultValue="description" className="mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Описание</TabsTrigger>
                <TabsTrigger value="specs">Системные требования</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <h3 className="text-2xl font-bold mb-4">Почувствуй скорость</h3>
                <p className="text-lg mb-4">
                  «Скоростной Форсаж» — это захватывающая гоночная игра нового поколения, которая предлагает игрокам непревзойденный опыт вождения с реалистичной физикой и потрясающей графикой.
                </p>
                <p className="text-lg mb-4">
                  Участвуйте в уличных гонках, соревнуйтесь на легендарных трассах и станьте королем дорог. Выбирайте из более чем 100 лицензированных автомобилей, настраивайте их внешний вид и технические характеристики.
                </p>
                <p className="text-lg mb-4">
                  Игра предлагает обширную карьерную кампанию, режим мультиплеера и еженедельные испытания с уникальными наградами.
                </p>
                
                <h3 className="text-2xl font-bold mt-8 mb-4">Особенности игры</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Более 100 лицензированных автомобилей от известных мировых производителей</li>
                  <li>50+ трасс с динамической сменой погоды и времени суток</li>
                  <li>Реалистичная физика и система повреждений</li>
                  <li>Глубокая система тюнинга автомобилей</li>
                  <li>Карьерный режим с захватывающим сюжетом</li>
                  <li>Многопользовательские гонки до 16 игроков</li>
                  <li>Еженедельные испытания и сезонные события</li>
                </ul>
              </TabsContent>
              
              <TabsContent value="specs" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-card rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Минимальные требования</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="font-semibold w-36">ОС:</span>
                        <span>Windows 10 64-bit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold w-36">Процессор:</span>
                        <span>Intel Core i5-6600K / AMD Ryzen 3 1300X</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold w-36">Оперативная память:</span>
                        <span>8 GB ОЗУ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold w-36">Видеокарта:</span>
                        <span>NVIDIA GTX 1050 Ti / AMD Radeon RX 560</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold w-36">DirectX:</span>
                        <span>Версии 12</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold w-36">Сеть:</span>
                        <span>Широкополосное подключение к интернету</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold w-36">Место на диске:</span>
                        <span>60 GB</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-card rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Рекомендуемые требования</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="font-semibold w-36">ОС:</span>
                        <span>Windows 10/11 64-bit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold w-36">Процессор:</span>
                        <span>Intel Core i7-8700K / AMD Ryzen 5 3600X</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold w-36">Оперативная память:</span>
                        <span>16 GB ОЗУ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold w-36">Видеокарта:</span>
                        <span>NVIDIA RTX 3060 / AMD RX 6600 XT</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold w-36">DirectX:</span>
                        <span>Версии 12</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold w-36">Сеть:</span>
                        <span>Широкополосное подключение к интернету</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold w-36">Место на диске:</span>
                        <span>60 GB SSD</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  <div className="bg-card rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-game-primary flex items-center justify-center text-white font-bold">
                          М
                        </div>
                        <div>
                          <h4 className="font-semibold">Максим</h4>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-4 h-4 text-game-accent" fill={star <= 5 ? "currentColor" : "none"} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-muted-foreground text-sm">14 апреля 2025</span>
                    </div>
                    <p>
                      Одна из лучших гоночных игр, в которые я играл! Графика просто потрясающая, физика машин очень реалистичная. Особенно нравится система настройки автомобилей, можно действительно почувствовать разницу после тюнинга.
                    </p>
                  </div>
                  
                  <div className="bg-card rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-game-primary flex items-center justify-center text-white font-bold">
                          А
                        </div>
                        <div>
                          <h4 className="font-semibold">Анна</h4>
                          <div className="flex">
                            {[1, 2, 3, 4].map((star) => (
                              <Star key={star} className="w-4 h-4 text-game-accent" fill={star <= 4 ? "currentColor" : "none"} />
                            ))}
                            <Star className="w-4 h-4 text-game-accent" />
                          </div>
                        </div>
                      </div>
                      <span className="text-muted-foreground text-sm">2 апреля 2025</span>
                    </div>
                    <p>
                      Игра отличная, но есть несколько моментов, которые можно было бы улучшить. Иногда встречаются небольшие баги в физике, а сюжет местами предсказуемый. Но в целом — очень достойная гоночная игра!
                    </p>
                  </div>
                  
                  <Button variant="outline" className="w-full">Загрузить больше отзывов</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-card rounded-lg shadow-md p-6 mb-6 sticky top-4">
              <div className="text-3xl font-bold mb-4">2 499 ₽</div>
              
              <Button className="w-full bg-game-accent hover:bg-game-accent/90 text-white mb-3 py-6">
                Купить игру
              </Button>
              
              <Button variant="outline" className="w-full mb-6 py-6">
                Добавить в корзину
              </Button>
              
              <Separator className="mb-4" />
              
              <div className="flex justify-between mb-4">
                <span className="text-muted-foreground">Разработчик:</span>
                <span className="font-semibold">Racing Games Studio</span>
              </div>
              
              <div className="flex justify-between mb-4">
                <span className="text-muted-foreground">Издатель:</span>
                <span className="font-semibold">ИгроМания Games</span>
              </div>
              
              <div className="flex justify-between mb-4">
                <span className="text-muted-foreground">Дата выхода:</span>
                <span className="font-semibold">15 марта 2025</span>
              </div>
              
              <div className="flex justify-between mb-4">
                <span className="text-muted-foreground">Платформы:</span>
                <span className="font-semibold">PC, PS5, Xbox Series X/S</span>
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between gap-2 mb-4">
                <button className="flex-1 flex items-center justify-center gap-2 p-2 rounded-md border border-border hover:bg-muted transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>Обсудить</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 p-2 rounded-md border border-border hover:bg-muted transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Поделиться</span>
                </button>
              </div>
            </div>
            
            <div className="bg-card rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Особенности игры</h3>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-game-primary/10 p-2 rounded-full">
                    <Award className="w-5 h-5 text-game-primary" />
                  </div>
                  <div>
                    <span className="font-semibold">Награды</span>
                    <p className="text-sm text-muted-foreground">Лучшая гоночная игра 2025</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-game-primary/10 p-2 rounded-full">
                    <Clock className="w-5 h-5 text-game-primary" />
                  </div>
                  <div>
                    <span className="font-semibold">Время игры</span>
                    <p className="text-sm text-muted-foreground">30+ часов основной кампании</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-game-primary/10 p-2 rounded-full">
                    <Activity className="w-5 h-5 text-game-primary" />
                  </div>
                  <div>
                    <span className="font-semibold">Уровень сложности</span>
                    <p className="text-sm text-muted-foreground">Настраиваемый, от новичка до эксперта</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-game-primary/10 p-2 rounded-full">
                    <Users className="w-5 h-5 text-game-primary" />
                  </div>
                  <div>
                    <span className="font-semibold">Мультиплеер</span>
                    <p className="text-sm text-muted-foreground">До 16 игроков онлайн</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-game-primary/10 p-2 rounded-full">
                    <Gamepad2 className="w-5 h-5 text-game-primary" />
                  </div>
                  <div>
                    <span className="font-semibold">Поддержка контроллеров</span>
                    <p className="text-sm text-muted-foreground">Xbox, PlayStation, рулевые системы</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-game-dark text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 ИгроМания. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default RacingGame;
