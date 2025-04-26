import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Info, AlertTriangle, BookOpen, Car, Trophy, Download, ArrowRight } from "lucide-react";

const GameRules = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Правила и руководства игр</h1>
            <p className="text-muted-foreground">
              Узнайте все правила наших игр, чтобы улучшить свой игровой опыт
            </p>
          </div>
          
          <Tabs defaultValue="racing">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="racing">Гонки</TabsTrigger>
              <TabsTrigger value="driving">Симулятор вождения</TabsTrigger>
              <TabsTrigger value="general">Общие правила</TabsTrigger>
            </TabsList>
            
            {/* Правила гоночной игры */}
            <TabsContent value="racing">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-2 bg-game-primary/20 rounded-lg">
                    <Trophy className="h-8 w-8 text-game-primary" />
                  </div>
                  <div>
                    <CardTitle>Скоростной Форсаж: Правила игры</CardTitle>
                    <CardDescription>
                      Узнайте все правила соревнований, механику и особенности гоночной игры
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Alert className="mb-8">
                    <Info className="h-4 w-4" />
                    <AlertTitle>Важная информация</AlertTitle>
                    <AlertDescription>
                      Заезды проводятся по официальным правилам. Использование читов и эксплойтов запрещено!
                    </AlertDescription>
                  </Alert>
                  
                  <Accordion type="single" collapsible className="mb-8">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Основные правила гонок</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pl-4">
                          <p>
                            <strong>Подготовка к гонке:</strong> Перед стартом у вас есть 60 секунд на настройку автомобиля. 
                            Вы можете изменить характеристики трансмиссии, подвески, аэродинамики и другие параметры.
                          </p>
                          <p>
                            <strong>Старт гонки:</strong> Все автомобили стартуют одновременно по сигналу светофора. 
                            Фальстарт наказывается 5-секундным штрафом.
                          </p>
                          <p>
                            <strong>Правила обгона:</strong> Запрещены намеренные столкновения с другими автомобилями. 
                            Блокировка более трех раз на одном участке также запрещена.
                          </p>
                          <p>
                            <strong>Срезание трассы:</strong> Выезд за пределы трассы для получения преимущества 
                            наказывается штрафным временем или дисквалификацией.
                          </p>
                          <p>
                            <strong>Повреждения:</strong> Автомобиль может получить повреждения при столкновениях, 
                            что влияет на его производительность. При критических повреждениях автомобиль выбывает из гонки.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Режимы игры</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pl-4">
                          <div>
                            <strong className="block mb-1">Чемпионат</strong>
                            <p>Серия гонок, где вы соревнуетесь за наибольшее количество очков. 
                              Гонщик с наибольшим количеством очков в конце серии становится чемпионом.</p>
                          </div>
                          <div>
                            <strong className="block mb-1">Быстрая гонка</strong>
                            <p>Одиночная гонка с выбранным автомобилем на выбранной трассе.</p>
                          </div>
                          <div>
                            <strong className="block mb-1">Дрифт</strong>
                            <p>Режим, где вы должны набрать очки, выполняя дрифт на специальных участках трассы.</p>
                          </div>
                          <div>
                            <strong className="block mb-1">Гонка на время</strong>
                            <p>Соревнование, где вы должны завершить трассу за минимальное время.</p>
                          </div>
                          <div>
                            <strong className="block mb-1">Многопользовательский режим</strong>
                            <p>Соревнуйтесь с другими игроками онлайн в различных режимах.</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Система наград и прогресс</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pl-4">
                          <p>
                            <strong>Опыт (XP):</strong> За каждую гонку вы получаете опыт в зависимости от сложности трассы, 
                            позиции на финише и других факторов. Накопление опыта повышает ваш уровень водителя.
                          </p>
                          <p>
                            <strong>Кредиты:</strong> Валюта игры, которую можно потратить на новые автомобили, улучшения и 
                            визуальные модификации. Кредиты зарабатываются за участие в гонках.
                          </p>
                          <p>
                            <strong>Репутация:</strong> Влияет на доступность определенных гонок и событий. 
                            Репутация растет при победах в гонках и выполнении особых заданий.
                          </p>
                          <p>
                            <strong>Автомобили:</strong> С повышением уровня и репутации вы получаете доступ к более 
                            мощным и редким автомобилям. Всего в игре более 100 лицензированных моделей.
                          </p>
                          <p>
                            <strong>Достижения:</strong> Особые награды за выполнение конкретных целей, например, 
                            победа в 10 дрифт-соревнованиях или набор определенного количества очков.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Руководство по управлению</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Клавиатура</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex justify-between">
                            <span>Газ</span>
                            <span className="font-mono bg-background px-2 rounded">W</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Тормоз</span>
                            <span className="font-mono bg-background px-2 rounded">S</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Влево</span>
                            <span className="font-mono bg-background px-2 rounded">A</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Вправо</span>
                            <span className="font-mono bg-background px-2 rounded">D</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Ручной тормоз</span>
                            <span className="font-mono bg-background px-2 rounded">Space</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Нитро</span>
                            <span className="font-mono bg-background px-2 rounded">Shift</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Геймпад</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex justify-between">
                            <span>Газ</span>
                            <span className="font-mono bg-background px-2 rounded">RT</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Тормоз</span>
                            <span className="font-mono bg-background px-2 rounded">LT</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Поворот</span>
                            <span className="font-mono bg-background px-2 rounded">LS</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Ручной тормоз</span>
                            <span className="font-mono bg-background px-2 rounded">A</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Нитро</span>
                            <span className="font-mono bg-background px-2 rounded">B</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Камера</span>
                            <span className="font-mono bg-background px-2 rounded">Y</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-center">
                    <Button className="bg-game-primary hover:bg-game-primary/90">
                      <Download className="mr-2 h-4 w-4" />
                      Скачать полное руководство по игре
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Правила симулятора вождения */}
            <TabsContent value="driving">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-2 bg-game-primary/20 rounded-lg">
                    <Car className="h-8 w-8 text-game-primary" />
                  </div>
                  <div>
                    <CardTitle>Автомобильный Симулятор: Правила игры</CardTitle>
                    <CardDescription>
                      Правила реалистичного симулятора вождения с открытым миром
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Alert variant="destructive" className="mb-8">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Внимание!</AlertTitle>
                    <AlertDescription>
                      В режиме реализма нарушение правил дорожного движения приведет к штрафам и санкциям.
                    </AlertDescription>
                  </Alert>
                  
                  <Accordion type="single" collapsible className="mb-8">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Режимы симуляции</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pl-4">
                          <div>
                            <strong className="block mb-1">Режим реализма</strong>
                            <p>Максимально приближенный к реальности режим с физикой автомобиля, 
                              правилами дорожного движения и последствиями их нарушения.</p>
                          </div>
                          <div>
                            <strong className="block mb-1">Режим свободной езды</strong>
                            <p>Свободное исследование открытого мира без строгих правил и ограничений.</p>
                          </div>
                          <div>
                            <strong className="block mb-1">Карьера водителя</strong>
                            <p>Проходите путь от начинающего водителя до профессионала, выполняя различные задания.</p>
                          </div>
                          <div>
                            <strong className="block mb-1">Испытания</strong>
                            <p>Специальные задания на проверку навыков вождения в различных условиях.</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Правила дорожного движения</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pl-4">
                          <p>
                            <strong>Скоростной режим:</strong> В городе максимальная скорость - 60 км/ч, 
                            на трассе - 90-120 км/ч в зависимости от типа дороги.
                          </p>
                          <p>
                            <strong>Светофоры и знаки:</strong> Необходимо соблюдать сигналы светофоров и 
                            требования дорожных знаков.
                          </p>
                          <p>
                            <strong>Парковка:</strong> Разрешена только в специально отведенных местах. 
                            За неправильную парковку налагается штраф.
                          </p>
                          <p>
                            <strong>Обгон:</strong> Обгон разрешен только при хорошей видимости и 
                            отсутствии сплошной линии разметки.
                          </p>
                          <p>
                            <strong>Штрафы:</strong> За нарушение правил начисляются штрафные баллы, 
                            которые влияют на рейтинг водителя и доступность некоторых заданий.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Вождение и физика автомобиля</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pl-4">
                          <p>
                            <strong>Реалистичная физика:</strong> Поведение автомобиля зависит от его характеристик, 
                            состояния дороги, погодных условий и даже давления в шинах.
                          </p>
                          <p>
                            <strong>Повреждения:</strong> Автомобиль может получить повреждения при столкновениях, 
                            которые влияют на его управляемость и требуют ремонта.
                          </p>
                          <p>
                            <strong>Топливо:</strong> Необходимо следить за уровнем топлива и заправляться на АЗС.
                          </p>
                          <p>
                            <strong>Трансмиссия:</strong> Доступны как автоматическая, так и ручная трансмиссия с 
                            необходимостью переключения передач.
                          </p>
                          <p>
                            <strong>Погодные условия:</strong> Дождь, снег, туман и другие погодные явления влияют на 
                            управляемость автомобиля и видимость.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Система прогресса</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pl-4">
                          <p>
                            <strong>Уровни навыков:</strong> По мере вождения улучшаются различные навыки: 
                            экономичное вождение, парковка, вождение на высоких скоростях и др.
                          </p>
                          <p>
                            <strong>Лицензии:</strong> Можно получить различные категории водительских прав, 
                            открывающие доступ к новым типам транспортных средств.
                          </p>
                          <p>
                            <strong>Репутация:</strong> Хорошая репутация открывает доступ к престижным работам 
                            и заданиям, а также к эксклюзивным автомобилям.
                          </p>
                          <p>
                            <strong>Коллекция автомобилей:</strong> Расширяйте свою коллекцию, покупая, 
                            восстанавливая и модифицируя различные автомобили.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Советы по управлению</h3>
                    <ol className="space-y-3 ml-5 list-decimal">
                      <li>
                        <strong>Плавное торможение:</strong> В симуляторе работает реалистичная система ABS. 
                        Начинайте торможение заранее и постепенно увеличивайте давление на педаль тормоза.
                      </li>
                      <li>
                        <strong>Прохождение поворотов:</strong> Снижайте скорость перед поворотом, 
                        а не во время него. После прохождения апекса постепенно ускоряйтесь.
                      </li>
                      <li>
                        <strong>Экономичное вождение:</strong> Для экономии топлива поддерживайте постоянную 
                        скорость и избегайте резких ускорений и торможений.
                      </li>
                      <li>
                        <strong>Парковка:</strong> Используйте камеры заднего вида и парковочные датчики. 
                        Не забывайте включать сигналы поворота при маневрировании.
                      </li>
                      <li>
                        <strong>Сложные погодные условия:</strong> На мокрой или обледенелой дороге увеличивайте 
                        дистанцию до впереди идущего автомобиля и снижайте скорость.
                      </li>
                    </ol>
                  </div>
                  
                  <div className="mt-8 flex justify-center">
                    <Button className="bg-game-primary hover:bg-game-primary/90">
                      <Download className="mr-2 h-4 w-4" />
                      Скачать полное руководство по симулятору
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Общие правила */}
            <TabsContent value="general">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-2 bg-game-primary/20 rounded-lg">
                    <BookOpen className="h-8 w-8 text-game-primary" />
                  </div>
                  <div>
                    <CardTitle>Общие правила платформы</CardTitle>
                    <CardDescription>
                      Правила поведения на платформе и взаимодействия с другими игроками
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Учетная запись и безопасность</h3>
                      <ul className="space-y-2 list-disc ml-5">
                        <li>
                          <strong>Защита аккаунта:</strong> Используйте надежный пароль и двухфакторную аутентификацию.
                        </li>
                        <li>
                          <strong>Персональные данные:</strong> Не разглашайте личную информацию другим пользователям.
                        </li>
                        <li>
                          <strong>Одна учетная запись:</strong> Создание множественных аккаунтов для обхода 
                          ограничений запрещено.
                        </li>
                        <li>
                          <strong>Передача аккаунта:</strong> Продажа, обмен или передача аккаунтов строго запрещены.
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Игровой процесс и честная игра</h3>
                      <ul className="space-y-2 list-disc ml-5">
                        <li>
                          <strong>Честная игра:</strong> Использование читов, ботов, скриптов или эксплойтов 
                          строго запрещено.
                        </li>
                        <li>
                          <strong>Модификации:</strong> Разрешены только официальные моды, не дающие преимущества 
                          в многопользовательских режимах.
                        </li>
                        <li>
                          <strong>Сторонние программы:</strong> Использование программ, влияющих на игровой процесс, 
                          может привести к бану.
                        </li>
                        <li>
                          <strong>Намеренное ухудшение игрового опыта:</strong> Саботаж команды, намеренные 
                          проигрыши и прочие действия, ухудшающие игровой опыт других игроков, запрещены.
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Коммуникация и поведение</h3>
                      <ul className="space-y-2 list-disc ml-5">
                        <li>
                          <strong>Уважение:</strong> Относитесь с уважением ко всем игрокам независимо от их 
                          навыков, опыта или происхождения.
                        </li>
                        <li>
                          <strong>Запрещенный контент:</strong> Запрещено публиковать или распространять 
                          оскорбительный, незаконный или вредоносный контент.
                        </li>
                        <li>
                          <strong>Спам:</strong> Запрещено отправлять спам, рекламу или повторяющиеся сообщения.
                        </li>
                        <li>
                          <strong>Угрозы и преследование:</strong> Любые формы угроз, преследования или агрессивного 
                          поведения строго запрещены.
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Платежи и покупки</h3>
                      <ul className="space-y-2 list-disc ml-5">
                        <li>
                          <strong>Внутриигровые покупки:</strong> Все транзакции являются окончательными, 
                          возврат средств производится только в исключительных случаях.
                        </li>
                        <li>
                          <strong>Торговля:</strong> Продажа или обмен внутриигровых предметов за реальные деньги 
                          вне платформы запрещены.
                        </li>
                        <li>
                          <strong>Подписки:</strong> Вы можете отменить автоматическое продление подписки 
                          в любое время через настройки аккаунта.
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Нарушения и санкции</h3>
                      <p className="mb-4">За нарушение правил могут быть применены различные санкции:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <p className="font-medium mb-2">Легкие нарушения</p>
                          <ul className="space-y-1 text-sm list-disc ml-5">
                            <li>Предупреждение</li>
                            <li>Временное ограничение чата</li>
                            <li>Временное ограничение функций</li>
                          </ul>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <p className="font-medium mb-2">Серьезные нарушения</p>
                          <ul className="space-y-1 text-sm list-disc ml-5">
                            <li>Временная блокировка аккаунта</li>
                            <li>Сброс игрового прогресса</li>
                            <li>Постоянная блокировка аккаунта</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <Button variant="outline">
                      Политика конфиденциальности
                    </Button>
                    <Button className="bg-game-primary hover:bg-game-primary/90 flex items-center gap-2">
                      Принять правила
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default GameRules;