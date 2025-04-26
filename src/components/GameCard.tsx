import { Link } from "react-router-dom";

interface GameCardProps {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  rating: number;
}

const GameCard = ({ id, title, imageUrl, category, rating }: GameCardProps) => {
  return (
    <Link to={`/${id}`} className="group">
      <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {category}
          </div>
          <div className="absolute top-2 right-2 bg-game-accent text-white font-bold text-sm px-2 py-1 rounded-full">
            {rating}/10
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 group-hover:text-game-primary transition-colors">
            {title}
          </h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-muted-foreground text-sm">Подробнее →</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
