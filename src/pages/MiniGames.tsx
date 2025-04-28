import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Gamepad2, 
  Zap, 
  Car, 
  Puzzle, 
  Target, 
  Brain, 
  Dices, 
  Bomb 
} from "lucide-react";

interface Game {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  game: React.ReactNode;
}

// Компонент анимации
const AnimatedDiv = ({ 
  children, 
  className = "", 
  delay = 0,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 }
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  initial?: Record<string, number>;
  animate?: Record<string, number>;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`transition-all duration-500 ease-out ${className}`}
      style={{
        opacity: isVisible ? animate.opacity : initial.opacity,
        transform: `translateY(${isVisible ? animate.y : initial.y}px)`,
        transitionDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );
};

const MiniGames = () => {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  // Memory Game
  const MemoryGame = () => {
    const [cards, setCards] = useState<{id: number, value: string, flipped: boolean, matched: boolean}[]>(
      [...Array(8)].flatMap((_, i) => [
        { id: i*2, value: String.fromCodePoint(128512 + i), flipped: false, matched: false },
        { id: i*2+1, value: String.fromCodePoint(128512 + i), flipped: false, matched: false }
      ]).sort(() => Math.random() - 0.5)
    );
    
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [moves, setMoves] = useState(0);
    const [completed, setCompleted] = useState(false);
    
    const handleCardClick = (index: number) => {
      // Prevent clicking already matched or flipped cards
      if (cards[index].matched || cards[index].flipped || flippedCards.length >= 2) return;
      
      // Flip the card
      const newCards = [...cards];
      newCards[index].flipped = true;
      setCards(newCards);
      
      // Add to flipped cards
      const newFlippedCards = [...flippedCards, index];
      setFlippedCards(newFlippedCards);
      
      // If two cards are flipped, check if they match
      if (newFlippedCards.length === 2) {
        setMoves(prev => prev + 1);
        
        if (cards[newFlippedCards[0]].value === cards[newFlippedCards[1]].value) {
          // Match found
          setTimeout(() => {
            const matchedCards = [...cards];
            matchedCards[newFlippedCards[0]].matched = true;
            matchedCards[newFlippedCards[1]].matched = true;
            setCards(matchedCards);
            setFlippedCards([]);
            
            // Check if game completed
            if (matchedCards.every(card => card.matched)) {
              setCompleted(true);
            }
          }, 500);
        } else {
          // No match, flip cards back
          setTimeout(() => {
            const unmatchedCards = [...cards];
            unmatchedCards[newFlippedCards[0]].flipped = false;
            unmatchedCards[newFlippedCards[1]].flipped = false;
            setCards(unmatchedCards);
            setFlippedCards([]);
          }, 1000);
        }
      }
    };
    
    const resetGame = () => {
      setCards([...Array(8)].flatMap((_, i) => [
        { id: i*2, value: String.fromCodePoint(128512 + i), flipped: false, matched: false },
        { id: i*2+1, value: String.fromCodePoint(128512 + i), flipped: false, matched: false }
      ]).sort(() => Math.random() - 0.5));
      setFlippedCards([]);
      setMoves(0);
      setCompleted(false);
    };
    
    return (
      <div className="flex flex-col items-center">
        <div className="text-center mb-4">
          <p className="mb-2">Ходы: {moves}</p>
          {completed && (
            <AnimatedDiv 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-100 text-green-800 p-2 rounded"
            >
              Поздравляем! Вы выиграли за {moves} ходов!
            </AnimatedDiv>
          )}
        </div>
        
        <div className="grid grid-cols-4 gap-2 mb-4">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`w-16 h-16 flex items-center justify-center text-2xl cursor-pointer rounded shadow transition-all duration-300 hover:scale-105 active:scale-95 ${
                card.flipped ? (card.matched ? "bg-green-200" : "bg-blue-200") : "bg-indigo-600"
              }`}
              onClick={() => handleCardClick(index)}
            >
              {card.flipped && card.value}
            </div>
          ))}
        </div>
        
        <Button onClick={resetGame}>Сбросить игру</Button>
      </div>
    );
  };

  // Snake Game
  const SnakeGame = () => {
    const [gameActive, setGameActive] = useState(false);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    
    const startGame = () => {
      setGameActive(true);
      setScore(0);
      setGameOver(false);
      
      const intervalId = setInterval(() => {
        if (Math.random() > 0.8) {
          setScore(prev => prev + 1);
        }
      }, 500);
      
      setTimeout(() => {
        clearInterval(intervalId);
        setGameOver(true);
        setGameActive(false);
      }, 10000 + Math.random() * 5000);
    };
    
    return (
      <div className="flex flex-col items-center">
        <div className="mb-4 text-center">
          <p className="text-lg font-bold">Счет: {score}</p>
          {gameOver && (
            <AnimatedDiv 
              className="text-red-500"
            >
              Игра окончена!
            </AnimatedDiv>
          )}
        </div>
        
        {!gameActive ? (
          <Button onClick={startGame}>Начать игру</Button>
        ) : (
          <div className="relative w-80 h-80 bg-gray-100 border-2 border-gray-400 overflow-hidden">
            <div
              className="absolute w-4 h-4 bg-green-500 transition-all duration-500"
              style={{ 
                left: `${Math.random() * 19 * 4}px`, 
                top: `${Math.random() * 19 * 4}px`
              }}
            />
            
            <div
              className="absolute w-4 h-4 bg-red-500 transition-all duration-500"
              style={{ 
                left: `${Math.random() * 19 * 4}px`, 
                top: `${Math.random() * 19 * 4}px`
              }}
              onAnimationEnd={() => {
                if (Math.random() > 0.7 && !gameOver) {
                  setScore(prev => prev + 1);
                }
                
                if (score > 10 && Math.random() > 0.9) {
                  setGameActive(false);
                  setGameOver(true);
                }
              }}
            />
            
            <div className="absolute bottom-2 left-2 text-xs">
              Используйте стрелки для управления змейкой
            </div>
          </div>
        )}
        
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            Примечание: Для полной функциональности требуется canvas и игровой цикл
          </p>
        </div>
      </div>
    );
  };

  // Tic Tac Toe Game
  const TicTacToeGame = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState<string | null>(null);
    
    const calculateWinner = (squares: (string | null)[]) => {
      const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
      ];
      
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      
      return null;
    };
    
    const handleClick = (index: number) => {
      if (board[index] || winner) return;
      
      const newBoard = [...board];
      newBoard[index] = isXNext ? 'X' : 'O';
      setBoard(newBoard);
      
      const gameWinner = calculateWinner(newBoard);
      if (gameWinner) {
        setWinner(gameWinner);
      } else {
        setIsXNext(!isXNext);
      }
    };
    
    const resetGame = () => {
      setBoard(Array(9).fill(null));
      setIsXNext(true);
      setWinner(null);
    };
    
    const renderSquare = (index: number) => (
      <div
        className={`w-20 h-20 border-2 border-gray-300 flex items-center justify-center text-2xl font-bold cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 ${
          board[index] === 'X' ? 'text-blue-500' : 'text-red-500'
        }`}
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </div>
    );
    
    return (
      <div className="flex flex-col items-center">
        <div className="mb-4">
          {winner ? (
            <AnimatedDiv 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl font-bold"
            >
              Победитель: {winner}
            </AnimatedDiv>
          ) : (
            <div className="text-xl">
              Следующий ход: {isXNext ? 'X' : 'O'}
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-3 gap-1 mb-4">
          {Array(9).fill(null).map((_, index) => renderSquare(index))}
        </div>
        
        <Button onClick={resetGame}>Новая игра</Button>
      </div>
    );
  };

  // Car Race Game
  const CarRaceGame = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    
    const startGame = () => {
      setGameStarted(true);
      setScore(0);
      setGameOver(false);
      
      const intervalId = setInterval(() => {
        if (Math.random() > 0.8) {
          setScore(prev => prev + 1);
        }
      }, 500);
      
      setTimeout(() => {
        clearInterval(intervalId);
        setGameOver(true);
        setGameStarted(false);
      }, 10000 + Math.random() * 5000);
    };
    
    return (
      <div className="flex flex-col items-center">
        <div className="text-center mb-4">
          <p className="text-lg font-bold">Счет: {score}</p>
          {gameOver && (
            <AnimatedDiv 
              className="text-red-500 font-bold"
            >
              Игра окончена! Ваш счет: {score}
            </AnimatedDiv>
          )}
        </div>
        
        <div className="relative w-80 h-96 bg-gray-700 overflow-hidden">
          {/* Road markings */}
          <div className="absolute left-1/2 w-4 h-full bg-yellow-400 transform -translate-x-1/2">
            <div className="h-full flex flex-col justify-around">
              {Array(10).fill(null).map((_, i) => (
                <div 
                  key={i}
                  className={`w-full h-8 bg-gray-700 ${gameStarted ? 'animate-road-mark' : ''}`}
                  style={{
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Player car */}
          <div 
            className={`absolute bottom-10 w-10 h-16 bg-red-500 rounded-md ${gameStarted ? 'animate-car-move' : ''}`}
            style={{ left: 'calc(50% - 20px)' }}
          >
            <div className="w-10 h-3 bg-blue-500 absolute top-0"></div>
            <div className="w-8 h-2 bg-yellow-400 absolute bottom-1 left-1"></div>
          </div>
          
          {/* Obstacle cars */}
          {gameStarted && (
            <>
              <div 
                className="absolute w-8 h-14 bg-green-500 rounded-md animate-obstacle"
                style={{ 
                  left: 'calc(35% - 15px)', 
                  top: '-50px',
                  animationDuration: `${2 + Math.random() * 2}s`,
                  animationDelay: "0s"
                }}
              />
              <div 
                className="absolute w-8 h-14 bg-purple-500 rounded-md animate-obstacle"
                style={{ 
                  left: 'calc(65% - 15px)', 
                  top: '-80px',
                  animationDuration: `${1.5 + Math.random() * 2}s`,
                  animationDelay: "1s"
                }}
              />
            </>
          )}
          
          <div className="absolute inset-0 flex justify-center items-center">
            {!gameStarted && !gameOver && (
              <Button onClick={startGame}>
                Старт
              </Button>
            )}
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-sm">Используйте клавиши влево/вправо для управления</p>
        </div>
      </div>
    );
  };

  // Whack-a-Mole Game
  const WhackAMoleGame = () => {
    const [score, setScore] = useState(0);
    const [gameActive, setGameActive] = useState(false);
    const [activeMole, setActiveMole] = useState<number | null>(null);
    
    const startGame = () => {
      setScore(0);
      setGameActive(true);
      
      const gameLoop = () => {
        const randomMole = Math.floor(Math.random() * 9);
        setActiveMole(randomMole);
        
        setTimeout(() => {
          setActiveMole(null);
          
          if (gameActive) {
            setTimeout(gameLoop, 500 + Math.random() * 1000);
          }
        }, 800 + Math.random() * 500);
      };
      
      gameLoop();
      
      // Game duration
      setTimeout(() => {
        setGameActive(false);
      }, 30000);
    };
    
    const whackMole = (index: number) => {
      if (index === activeMole) {
        setScore(prev => prev + 1);
        setActiveMole(null);
      }
    };
    
    return (
      <div className="flex flex-col items-center">
        <div className="text-center mb-4">
          <p className="text-xl font-bold">Счет: {score}</p>
          {!gameActive && score > 0 && (
            <p className="text-green-600">Игра окончена! Итоговый счет: {score}</p>
          )}
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          {Array(9).fill(null).map((_, index) => (
            <div 
              key={index}
              className="relative w-16 h-16 bg-green-300 rounded-full overflow-hidden cursor-pointer transition-transform duration-100 active:scale-90"
              onClick={() => whackMole(index)}
            >
              {index === activeMole && (
                <div 
                  className="absolute inset-0 bg-brown-500 flex items-center justify-center animate-mole-appear"
                >
                  <div className="w-10 h-5 bg-red-400 rounded-t-full"></div>
                  <div className="absolute top-8 w-8 h-3 bg-black rounded-full"></div>
                  <div className="absolute top-8 left-3 w-2 h-2 bg-white rounded-full"></div>
                  <div className="absolute top-8 right-3 w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {!gameActive && (
          <Button onClick={startGame}>
            {score > 0 ? "Играть снова" : "Начать игру"}
          </Button>
        )}
      </div>
    );
  };

  // Word Puzzle Game
  const WordPuzzleGame = () => {
    const words = ["REACT", "GAME", "PUZZLE", "CODE", "WEB"];
    const [currentWord, setCurrentWord] = useState("");
    const [scrambledWord, setScrambledWord] = useState("");
    const [userInput, setUserInput] = useState("");
    const [message, setMessage] = useState("");
    const [score, setScore] = useState(0);
    
    const startGame = () => {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      setCurrentWord(randomWord);
      
      // Scramble the word
      const scrambled = randomWord
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
      
      setScrambledWord(scrambled);
      setUserInput("");
      setMessage("");
    };
    
    const checkAnswer = () => {
      if (userInput.toUpperCase() === currentWord) {
        setMessage("Правильно!");
        setScore(prev => prev + 1);
        setTimeout(startGame, 1000);
      } else {
        setMessage("Неправильно, попробуйте еще раз");
      }
    };
    
    return (
      <div className="flex flex-col items-center">
        <div className="text-center mb-4">
          <p className="text-lg font-bold">Счет: {score}</p>
          {currentWord ? (
            <AnimatedDiv 
              className="text-2xl font-bold mt-2"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              {scrambledWord}
            </AnimatedDiv>
          ) : (
            <p>Нажмите "Начать", чтобы играть</p>
          )}
        </div>
        
        {currentWord && (
          <div className="flex flex-col items-center gap-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Ваш ответ"
            />
            <Button onClick={checkAnswer}>Проверить</Button>
          </div>
        )}
        
        {message && (
          <AnimatedDiv 
            className={`mt-2 font-bold ${message === "Правильно!" ? "text-green-500" : "text-red-500"}`}
          >
            {message}
          </AnimatedDiv>
        )}
        
        {!currentWord && (
          <Button onClick={startGame}>Начать</Button>
        )}
      </div>
    );
  };

  // Math Game
  const MathGame = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState<number | null>(null);
    const [userAnswer, setUserAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [message, setMessage] = useState("");
    const [timeLeft, setTimeLeft] = useState(10);
    const [gameActive, setGameActive] = useState(false);
    
    const generateQuestion = () => {
      const num1 = Math.floor(Math.random() * 10) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      const operations = ['+', '-', '*'];
      const operation = operations[Math.floor(Math.random() * operations.length)];
      
      let result;
      switch (operation) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        default:
          result = 0;
      }
      
      setQuestion(`${num1} ${operation} ${num2} = ?`);
      setAnswer(result);
      setUserAnswer("");
      setMessage("");
      setTimeLeft(10);
    };
    
    const startGame = () => {
      setScore(0);
      setGameActive(true);
      generateQuestion();
    };
    
    const checkAnswer = () => {
      const userNum = parseInt(userAnswer);
      
      if (isNaN(userNum)) {
        setMessage("Пожалуйста, введите число");
        return;
      }
      
      if (userNum === answer) {
        setMessage("Правильно!");
        setScore(prev => prev + 1);
        generateQuestion();
      } else {
        setMessage(`Неправильно! Правильный ответ: ${answer}`);
        setScore(prev => Math.max(0, prev - 1));
        generateQuestion();
      }
    };
    
    return (
      <div className="flex flex-col items-center">
        <div className="text-center mb-4">
          <p className="text-lg font-bold">Счет: {score}</p>
          {gameActive ? (
            <AnimatedDiv
              className="mt-2 p-2 rounded bg-blue-100"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            >
              <p className="text-2xl font-bold">{question}</p>
              <p className="text-sm">Время: {timeLeft} сек</p>
            </AnimatedDiv>
          ) : (
            <p>Нажмите "Начать", чтобы играть</p>
          )}
        </div>
        
        {gameActive ? (
          <div className="flex flex-col items-center gap-2">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Ваш ответ"
            />
            <Button onClick={checkAnswer}>Ответить</Button>
          </div>
        ) : (
          <Button onClick={startGame}>Начать</Button>
        )}
        
        {message && (
          <AnimatedDiv 
            className={`mt-2 font-bold ${message.includes("Правильно") ? "text-green-500" : "text-red-500"}`}
          >
            {message}
          </AnimatedDiv>
        )}
      </div>
    );
  };

  // 2048 Game
  const Game2048 = () => {
    return (
      <div className="flex flex-col items-center">
        <p className="mb-4 text-center">
          Классическая игра 2048. Объединяйте плитки с одинаковыми числами!
        </p>
        
        <div className="grid grid-cols-4 gap-2 bg-gray-200 p-2 rounded-md">
          {Array(16).fill(null).map((_, index) => {
            const value = Math.random() > 0.8 ? (Math.random() > 0.8 ? 4 : 2) : 0;
            let bgColor = "bg-gray-300";
            if (value === 2) bgColor = "bg-yellow-200";
            if (value === 4) bgColor = "bg-orange-200";
            
            return (
              <div 
                key={index}
                className={`w-16 h-16 ${bgColor} rounded-md flex items-center justify-center font-bold text-xl transition-all duration-300 ease-in-out`}
                style={{
                  animation: value > 0 ? 'tile-appear 0.3s ease-in-out' : 'none'
                }}
              >
                {value > 0 ? value : ""}
              </div>
            );
          })}
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Используйте стрелки для перемещения плиток</p>
          <Button className="mt-2">Новая игра</Button>
        </div>
      </div>
    );
  };

  const games: Game[] = [
    {
      id: "memory",
      title: "Игра на память",
      description: "Переверните карточки и найдите пары. Проверьте свою память!",
      icon: <Brain />,
      color: "bg-purple-100",
      game: <MemoryGame />
    },
    {
      id: "snake",
      title: "Змейка",
      description: "Классическая игра Змейка. Собирайте еду и растите!",
      icon: <Zap />,
      color: "bg-green-100",
      game: <SnakeGame />
    },
    {
      id: "tictactoe",
      title: "Крестики-нолики",
      description: "Классическая игра крестики-нолики для двух игроков.",
      icon: <Target />,
      color: "bg-blue-100",
      game: <TicTacToeGame />
    },
    {
      id: "carrace",
      title: "Гонки",
      description: "Управляйте автомобилем и уклоняйтесь от препятствий на дороге.",
      icon: <Car />,
      color: "bg-red-100",
      game: <CarRaceGame />
    },
    {
      id: "whackamole",
      title: "Ударь крота",
      description: "Кликайте по появляющимся кротам, чтобы заработать очки.",
      icon: <Bomb />,
      color: "bg-yellow-100",
      game: <WhackAMoleGame />
    },
    {
      id: "wordpuzzle",
      title: "Словесная головоломка",
      description: "Разгадайте перемешанные слова, чтобы заработать очки.",
      icon: <Puzzle />,
      color: "bg-indigo-100",
      game: <WordPuzzleGame />
    },
    {
      id: "mathgame",
      title: "Математическая игра",
      description: "Решайте математические задачи как можно быстрее.",
      icon: <Brain />,
      color: "bg-pink-100",
      game: <MathGame />
    },
    {
      id: "2048",
      title: "2048",
      description: "Объединяйте плитки с одинаковыми числами, чтобы получить 2048.",
      icon: <Dices />,
      color: "bg-orange-100",
      game: <Game2048 />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <AnimatedDiv
          className="text-4xl font-bold text-center text-purple-800 mb-8"
          delay={0.2}
        >
          Мини-Игры
        </AnimatedDiv>
        
        <AnimatedDiv
          className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8"
          delay={0.3}
        >
          <div className="flex items-center mb-4">
            <Gamepad2 className="w-8 h-8 text-purple-600 mr-2" />
            <h2 className="text-2xl font-bold">Играйте прямо в браузере!</h2>
          </div>
          <p className="text-gray-700">
            Выберите одну из наших захватывающих мини-игр и наслаждайтесь игровым процессом прямо сейчас. 
            Никаких загрузок или установок не требуется. Все игры оптимизированы для мобильных и настольных устройств.
          </p>
        </AnimatedDiv>
        
        {activeGame ? (
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <Button 
                variant="outline" 
                onClick={() => setActiveGame(null)}
                className="flex items-center gap-2"
              >
                ← Назад к списку игр
              </Button>
              <h2 className="text-2xl font-bold text-purple-800">
                {games.find(g => g.id === activeGame)?.title}
              </h2>
            </div>
            
            <AnimatedDiv 
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {games.find(g => g.id === activeGame)?.game}
            </AnimatedDiv>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, index) => (
              <AnimatedDiv
                key={game.id}
                className={`${game.color} rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:scale-105 active:scale-95`}
                delay={index * 0.1}
                onClick={() => setActiveGame(game.id)}
              >
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                      {game.icon}
                    </div>
                    <h3 className="text-xl font-bold">{game.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {game.description}
                  </p>
                  <Button className="w-full">Играть</Button>
                </div>
                
                <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              </AnimatedDiv>
            ))}
          </div>
        )}
      </main>
      
      <footer className="bg-indigo-900 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Fire Game. Все права защищены.</p>
          <p className="text-indigo-300 mt-2">Играйте в мини-игры прямо в браузере!</p>
        </div>
      </footer>
      
      <style jsx global>{`
        @keyframes tile-appear {
          0% { transform: scale(0); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        @keyframes road-mark {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes car-move {
          0% { transform: translateX(0); }
          30% { transform: translateX(20px); }
          70% { transform: translateX(-20px); }
          100% { transform: translateX(0); }
        }
        
        @keyframes obstacle {
          0% { transform: translateY(0%); }
          100% { transform: translateY(120%); }
        }
        
        @keyframes mole-appear {
          0% { transform: translateY(16px); }
          100% { transform: translateY(0); }
        }
        
        .animate-road-mark {
          animation: road-mark 1s linear infinite;
        }
        
        .animate-car-move {
          animation: car-move 5s ease-in-out infinite;
        }
        
        .animate-obstacle {
          animation: obstacle 2s linear infinite;
        }
        
        .animate-mole-appear {
          animation: mole-appear 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default MiniGames;
