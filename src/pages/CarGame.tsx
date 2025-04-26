import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Star, MessageCircle, Share2, Award, Clock, Activity, Users, Gamepad2, PlayCircle, Download, Car, Settings, Gauge, Map } from "lucide-react";

const CarGame = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  
  const gameImages = [
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left section - Game Info */}
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-bold mb-4">Автомобильный Симулятор</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-game-accent" fill={star <= 4.7 ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="text-lg font-semibold">9.4/10</span>
              <span className="text-muted-foreground">(178 отзывов)</span>
            </div>
            
            {/* Main image or video */}
            <div className="relative rounded-lg overflow-hidden mb-4">
              {showVideo ? (
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Gameplay video" 
                  className="w-full aspect-video"
                  allowFullScreen
                ></iframe>
              ) : (
                <img 
                  src={gameImages[activeImage]} 
                  alt="Скриншот из игры" 
                  className="w-full aspect-video object-cover"
                />
              )}
              
              {!showVideo && (
                <button 
                  onClick={() => setShowVideo(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition-colors"
                >
                  <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </div>
                </button>
              )}
            </div>
            
            {/* Controls */}
            <div className="flex justify-between mb-4">
              <button 
                onClick={() => setShowVideo(false)} 
                className={`px-4 py-2 rounded-lg border ${!showVideo ? 'bg-game-primary text-white' : 'border-game-primary text-game-primary'}`}
              >
                Скриншоты
              </button>
              <button 
                onClick={() => setShowVideo(true)}
                className={`px-4 py-2 rounded-lg border ${showVideo ? 'bg-game-primary text-white' : 'border-game-primary text-game-primary'}`}
              >
                Gameplay видео
              </button>
            </div>
            
            {/* Thumbnails - Only show when in screenshot mode */}
            {!showVideo && (
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
            )}
            
            {/* Video Tutorial */}
            <div className="bg-muted p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <PlayCircle className="text-game-accent" />
                Обучающее видео
              </h3>
              <p className="mb-4">
                Научитесь управлять различными типами автомобилей от городских седанов до внедорожников! Наше обучающее видео поможет вам освоить все тонкости.
              </p>
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="Обучающее видео" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            {/* Tabs */}
            <Tabs defaultValue="description" className="mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Описание</TabsTrigger>
                <TabsTrigger value="specs">Системные требования</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <h3 className="text-2xl font-bold mb-4">Ультра-реалистичный автосимулятор</h3>
                <p className="text-lg mb-4">
                  «Автомобильный Симулятор» — это передовая игра, воссоздающая реалистичное вождение в различных условиях и локациях по всему миру. От городских улиц до горных серпантинов, от идеальной погоды до экстремальных условий.
                </p>
                <p className="text-lg mb-4">
                  Игра предлагает более 200 точно воссозданных автомобилей разных классов с детализированным интерьером и уникальными характеристиками. Каждая машина имеет свои особенности управления, звучания двигателя и физики.
                </p>
                <p className="text-lg mb-4">
                  Исследуйте открытый мир с разнообразными локациями, выполняйте задания, улучшайте навыки вождения и коллекционируйте редкие автомобили.
                </p>
                
                <h3 className="text-2xl font-bold mt-8 mb-4">Особенности игры</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Более 200 детально воссозданных автомобилей от экономкласса до суперкаров</li>
                  <li>10 уникальных локаций с общей протяженностью дорог более 1000 км</li>
                  <li>Система динамической погоды и времени суток с влиянием на физику вождения</li>
                  <li>Детализированные повреждения автомобилей с визуальным и физическим отображением</li>
                  <li>Реалистичный звук двигателей, записанный с реальных прототипов</li>
                  <li>Поддержка руля и педалей для максимального погружения</li>
                  <li>Мультиплеер с возможностью свободного вождения и различными соревнованиями</li>
                </ul>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Car className="text-game-accent" />
                      <h4 className="font-bold">200+ автомобилей</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">От городских седанов до экзотических суперкаров</p>
                  </div>
                  
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Map className="text-game-accent" />
                      <h4 className="font-bold">10 локаций</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Города, сельская местность, горные дороги</p>
                  </div>
                  
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Settings className="text-game-accent" />
                      <h4 className="font-bold">Настройка автомобилей</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Тюнинг внешнего вида и технических характеристик</p>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-game-accent/10 rounded-lg border border-game-accent">
                  <h4 className="font-bold text-lg mb-2 text-game-accent flex items-center gap-2">
                    <Download size={20} />
                    Бесплатный пробный контент
                  </h4>
                  <p>
                    Загрузите бесплатную демо-версию с доступом к трем автомобилям и одной локации. Испытайте реалистичную физику вождения прежде чем приобрести полную версию.
                  </p>
                  <Button className="mt-4 bg-game-accent hover:bg-game-accent/90">Скачать демо-версию</Button>
                </div>
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
                        <span>Intel Core i5-4590 / AMD FX-8350</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold w-36">Оперативная память:</span>
                        <span>8 GB ОЗУ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold w-36">Видеокарта:</span>
                        <span>NVIDIA GTX 970 / AMD Radeon R9 290</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold w-36">DirectX:</span>
                        <span>Версии 11</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold w-36">Сеть:</span>
                        <span>Широкополосное подключение к интернету</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold w-36">Место на диске:</span>
                        <span>70 GB</span>
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
                        <span>Intel Core i7-9700K / AMD Ryzen 7 3700X</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold w-36">Оперативная память:</span>
                        <span>16 GB ОЗУ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold w-36">Видеокарта:</span>
                        <span>NVIDIA RTX 3070 / AMD RX 6800</span>
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
                        <span>70 GB SSD</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold w-36">Дополнительно:</span>
                        <span>Руль с педалями (рекомендуется)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Gauge className="text-game-accent" />
                    Поддерживаемые устройства
                  </h3>
                  <p className="mb-4">
                    Для максимального погружения игра поддерживает следующие игровые устройства:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-card p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Гоночные рули:</h4>
                      <ul className="text-sm space-y-1">
                        <li>Logitech G29/G920/G923</li>
                        <li>Thrustmaster T300/T150/TX</li>
                        <li>Fanatec CSL Elite/Clubsport</li>
                      </ul>
                    </div>
                    <div className="bg-card p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Другие устройства:</h4>
                      <ul className="text-sm space-y-1">
                        <li>Педали с аналоговым сцеплением</li>
                        <li>H-образные коробки передач</li>
                        <li>Ручные тормоза</li>
                        <li>VR-гарнитуры</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  <div className="bg-card rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-game-primary flex items-center justify-center text-white font-bold">
                          А
                        </div>
                        <div>
                          <h4 className="font-semibold">Алексей</h4>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-4 h-4 text-game-accent" fill={star <= 5 ? "currentColor" : "none"} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-muted-foreground text-sm">21 апреля 2025</span>
                    </div>
                    <p>
                      Лучший автосимулятор, который я когда-либо видел! Физика вождения просто потрясающая, особенно с рулем Logitech G923. Каждая машина ощущается по-разному, меняется поведение на разных поверхностях и в разных погодных условиях. Графика великолепная!
                    </p>
                  </div>
                  
                  <div className="bg-card rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-game-primary flex items-center justify-center text-white font-bold">
                          Е
                        </div>
                        <div>
                          <h4 className="font-semibold">Елена</h4>
                          <div className="flex">
                            {[1, 2, 3, 4].map((star) => (
                              <Star key={star} className="w-4 h-4 text-game-accent" fill={star <= 4 ? "currentColor" : "none"} />
                            ))}
                            <Star className="w-4 h-4 text-game-accent" />
                          </div>
                        </div>
                      </div>
                      <span className="text-muted-foreground text-sm">15 апреля 2025</span>
                    </div>
                    <p>
                      Очень впечатляющая игра! Я не большой фанат автосимуляторов, но этот действительно затягивает. Огромный открытый мир, множество автомобилей и заданий. Единственный минус — для действительно комфортной игры нужен руль, на геймпаде некоторые манёвры делать сложнее.
                    </p>
                  </div>
                  
                  <div className="bg-card rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-game-primary flex items-center justify-center text-white font-bold">
                          С
                        </div>
                        <div>
                          <h4 className="font-semibold">Сергей</h4>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-4 h-4 text-game-accent" fill={star <= 5 ? "currentColor" : "none"} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-muted-foreground text-sm">7 апреля 2025</span>
                    </div>
                    <p>
                      Потрясающе детализированные автомобили и интерьеры! Каждый автомобиль воссоздан с невероятной точностью, вплоть до работы каждого переключателя в салоне. VR-режим — это отдельный восторг, полное погружение в процесс вождения. Обязательно к покупке для всех любителей автомобилей!
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
              <div className="text-3xl font-bold mb-4">1 999 ₽</div>
              
              <Button className="w-full bg-game-accent hover:bg-game-accent/90 text-white mb-3 py-6">
                Купить игру
              </Button>
              
              <Button variant="outline" className="w-full mb-4 py-6">
                Добавить в корзину
              </Button>
              
              <Button variant="secondary" className="w-full mb-6 flex items-center justify-center gap-2 py-6">
                <Download size={18} />
                Скачать демо-версию
              </Button>
              
              <Separator className="mb-4" />
              
              <div className="flex justify-between mb-4">
                <span className="text-muted-foreground">Разработчик:</span>
                <span className="font-semibold">Car Sim Studios</span>
              </div>
              
              <div className="flex justify-between mb-4">
                <span className="text-muted-foreground">Издатель:</span>
                <span className="font-semibold">Fire Game</span>
              </div>
              
              <div className="flex justify-between mb-4">
                <span className="text-muted-foreground">Дата выхода:</span>
                <span className="font-semibold">2 февраля 2025</span>
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
                    <Car className="w-5 h-5 text-game-primary" />
                  </div>
                  <div>
                    <span className="font-semibold">Коллекция автомобилей</span>
                    <p className="text-sm text-muted-foreground">Более 200 лицензированных моделей</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-game-primary/10 p-2 rounded-full">
                    <Map className="w-5 h-5 text-game-primary" />
                  </div>
                  <div>
                    <span className="font-semibold">Открытый мир</span>
                    <p className="text-sm text-muted-foreground">1000+ км дорог в разных локациях</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-game-primary/10 p-2 rounded-full">
                    <Activity className="w-5 h-5 text-game-primary" />
                  </div>
                  <div>
                    <span className="font-semibold">Режимы игры</span>
                    <p className="text-sm text-muted-foreground">Карьера, свободная езда, испытания</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-game-primary/10 p-2 rounded-full">
                    <Settings className="w-5 h-5 text-game-primary" />
                  </div>
                  <div>
                    <span className="font-semibold">Настройка автомобилей</span>
                    <p className="text-sm text-muted-foreground">Визуальный и технический тюнинг</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-game-primary/10 p-2 rounded-full">
                    <Gamepad2 className="w-5 h-5 text-game-primary" />
                  </div>
                  <div>
                    <span className="font-semibold">Поддержка устройств</span>
                    <p className="text-sm text-muted-foreground">Рули, педали, VR-гарнитуры</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-game-accent/10 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-game-accent">Сезонный пропуск</h3>
              <p className="mb-4">Приобретите сезонный пропуск и получите доступ ко всем будущим DLC в течение года:</p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-game-accent">✓</span>
                  <div>
                    <span className="font-semibold">Европейская коллекция</span>
                    <p className="text-sm text-muted-foreground">30 европейских автомобилей и новая локация</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-game-accent">✓</span>
                  <div>
                    <span className="font-semibold">Пакет внедорожников</span>
                    <p className="text-sm text-muted-foreground">Полный привод и бездорожье</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-game-accent">✓</span>
                  <div>
                    <span className="font-semibold">Классические автомобили</span>
                    <p className="text-sm text-muted-foreground">Легендарные модели 1950-1980-х годов</p>
                  </div>
                </li>
                
                <li className="pt-2">
                  <Button className="w-full bg-game-accent hover:bg-game-accent/90">
                    Купить сезонный пропуск за 1499 ₽
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-game-dark text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Fire Game. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default CarGame;