interface AnimeCardProps {
  title: string;
  tag: string[];
  season: 'spring' | 'summer' | 'autumn' | 'winter';
  revealType: 'ova' | 'tva' | 'movie';
  isBroadcasting: boolean;
  thumbnail?: string;
}

const AnimeCard = ({
  title,
  tag,
  season,
  revealType,
  isBroadcasting,
  thumbnail,
}: AnimeCardProps) => {};
