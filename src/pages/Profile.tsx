import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import { Edit, Save, Trophy, Clock, BarChart2, GameController, Heart, Calendar } from "lucide-react";

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    username: "FireGamer99",
    email: "firegamer99@example.com",
    bio: "Увлеченный геймер с 10-летним стажем. Люблю гонки и экшены.",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=250&auto=format&fit=crop"
  });

  const handleEditToggle = () => {
    if (editing) {
      // Сохранение изменений
      console.log("Сохранено:", profileData);
    }
    setEditing(!editing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  // Мок данных для статистики и игровой активности
  const userStats = {
    gamesPlayed: 214,
    hoursPlayed: 578,
    achievements: 86,
    rank: "Золото II"
  };

  const recentlyPlayed = [
    {
      id: "1",
      title: "Скоростной Форсаж",
      lastPlayed: "Сегодня",
      hoursPlayed: 12.5,
      image: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?q=80&w=250&auto=format&fit=crop"
    },
    {
      id: "2",
      title: "Автомобильный Симулятор",
      lastPlayed: "Вчера",
      hoursPlayed: 8.2,
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=250&auto=format&fit=crop"
    },
    {
      id: "3",
      title: "Тактический Штурм",
      lastPlayed: "3 дня назад",
      hoursPlayed: 5.7,
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=250&auto=format&fit=crop"
    }
  ];

  const favoriteGames = [
    {
      id: "1",
      title: "Скоростной Форсаж",
      totalHours: 156.3,
      image: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?q=80&w=250&auto=format&fit=crop"
    },
    {
      id: "4",
      title: "Хроники Драконов",
      totalHours: 98.7,
      image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=250&auto=format&fit=crop"
    },
    {
      id: "2",
      title: "Автомобильный Симулятор",
      totalHours: 45.8,
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=250&auto=format&fit=crop"
    }
  ];

  const achievements = [
    {
      id: "a1",
      title: "Гонщик Элиты",
      description: "Выиграть 50 гонок в Скоростном Форсаже",
      date: "15 апреля 2025",
      icon: "🏆"
    },
    {
      id: "a2",
      title: "Мастер Дрифта",
      description: "Выполнить дрифт на 1000 очков в Автомобильном Симуляторе",
      date: "10 апреля 2025",
      icon: "🚗"
    },
    {
      id: "a3",
      title: "Коллекционер",
      description: "Собрать все автомобили в игре",
      date: "2 апреля 2025",
      icon: "🏎️"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Профиль и настройки */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="relative pb-0">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-4 right-4"
                  onClick={handleEditToggle}
                >
                  {editing ? <Save size={18} /> : <Edit size={18} />}
                </Button>
                <div className="flex flex-col items-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={profileData.avatar} alt={profileData.username} />
                    <AvatarFallback>FG</AvatarFallback>
                  </Avatar>
                  
                  {editing ? (
                    <Input 
                      name="username"
                      value={profileData.username}
                      onChange={handleInputChange}
                      className="text-xl font-bold text-center mb-2"
                    />
                  ) : (
                    <CardTitle className="text-2xl">{profileData.username}</CardTitle>
                  )}
                  
                  <div className="flex gap-2 mb-4">
                    <Badge variant="secondary">{userStats.rank}</Badge>
                    <Badge className="bg-game-accent">{userStats.achievements} достижений</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    {editing ? (
                      <Input 
                        id="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">{profileData.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="bio">О себе</Label>
                    {editing ? (
                      <textarea
                        id="bio"
                        name="bio"
                        value={profileData.bio}
                        onChange={handleInputChange}
                        className="w-full min-h-[100px] p-2 rounded-md border border-input bg-transparent text-sm"
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">{profileData.bio}</p>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex-col space-y-4">
                <div className="w-full grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold">{userStats.gamesPlayed}</p>
                    <p className="text-xs text-muted-foreground">Игр сыграно</p>
                  </div>
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold">{userStats.hoursPlayed}</p>
                    <p className="text-xs text-muted-foreground">Часов в игре</p>
                  </div>
                </div>
                
                {editing && (
                  <Button className="w-full bg-game-primary hover:bg-game-primary/90" onClick={handleEditToggle}>
                    Сохранить изменения
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>
          
          {/* Основная секция с вкладками */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="activity">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="activity">Активность</TabsTrigger>
                <TabsTrigger value="favorites">Избранное</TabsTrigger>
                <TabsTrigger value="achievements">Достижения</TabsTrigger>
              </TabsList>
              
              {/* Вкладка активности */}
              <TabsContent value="activity">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <BarChart2 size={20} className="text-game-accent" />
                        Игровая активность
                      </CardTitle>
                    </div>
                    <CardDescription>
                      Последние игры и статистика активности
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Clock size={18} /> Недавно играли
                        </h3>
                        <div className="space-y-4">
                          {recentlyPlayed.map(game => (
                            <div key={game.id} className="flex items-center space-x-4">
                              <img 
                                src={game.image} 
                                alt={game.title}
                                className="h-16 w-16 rounded-md object-cover"
                              />
                              <div className="flex-1 min-w-0">
                                <p className="font-medium truncate">{game.title}</p>
                                <p className="text-sm text-muted-foreground">
                                  {game.hoursPlayed} часов • {game.lastPlayed}
                                </p>
                              </div>
                              <Button variant="outline" size="sm">
                                Играть
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Calendar size={18} /> Игровая активность
                        </h3>
                        <div className="bg-muted h-40 rounded-lg flex items-center justify-center">
                          <p className="text-muted-foreground">График активности за последний месяц</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Вкладка избранного */}
              <TabsContent value="favorites">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Heart size={20} className="text-game-accent" />
                        Избранные игры
                      </CardTitle>
                    </div>
                    <CardDescription>
                      Ваши любимые игры и часы, проведенные в них
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {favoriteGames.map(game => (
                        <div key={game.id} className="bg-muted rounded-lg overflow-hidden">
                          <div className="h-32 overflow-hidden">
                            <img 
                              src={game.image} 
                              alt={game.title}
                              className="w-full h-full object-cover transition-transform hover:scale-105"
                            />
                          </div>
                          <div className="p-4">
                            <h4 className="font-semibold mb-1">{game.title}</h4>
                            <p className="text-sm text-muted-foreground mb-3">
                              {game.totalHours} часов всего
                            </p>
                            <Button variant="outline" size="sm" className="w-full">
                              Играть
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Вкладка достижений */}
              <TabsContent value="achievements">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Trophy size={20} className="text-game-accent" />
                        Достижения
                      </CardTitle>
                      <Badge variant="outline">{achievements.length} из 125</Badge>
                    </div>
                    <CardDescription>
                      Ваши недавно полученные достижения
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {achievements.map(achievement => (
                        <div key={achievement.id} className="flex items-center space-x-4 bg-muted/50 p-4 rounded-lg">
                          <div className="flex-shrink-0 h-12 w-12 bg-game-primary/20 rounded-full flex items-center justify-center text-2xl">
                            {achievement.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium">{achievement.title}</p>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                            <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Показать все достижения
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;