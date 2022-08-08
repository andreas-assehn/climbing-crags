import Image from 'next/image';

type RatingProps = {
  rating: number;
  notBoxed: boolean;
  className: string;
};

function Rating({ rating, notBoxed, className }: RatingProps) {
  let cleanRating: number = 0;
  if (rating || rating === 0) {
    const rangedRating = +(rating > 5
      ? (rating = 5)
      : rating < 0
      ? (rating = 0)
      : rating);
    cleanRating = Math.round(rangedRating * 100) / 100;
  }
  return (
    <div
      className={
        'md:px-4 md:py-2 p-2 md:rounded-2xl w-max max-h-10 md:max-h-12 flex items-center gap-x-1 ' +
        (notBoxed === true ? '' : 'shadow-8 bg-[#474747] rounded-lg ') +
        className
      }
    >
      <Image
        src={`/star-${
          cleanRating >= 1 ? 'full' : cleanRating > 0.5 ? 'half' : 'empty'
        }.svg`}
        alt="star svg"
        width={32}
        height={32}
      />
      <Image
        src={`/star-${
          cleanRating >= 2 ? 'full' : cleanRating > 1.5 ? 'half' : 'empty'
        }.svg`}
        alt="star svg"
        width={32}
        height={32}
      />
      <Image
        src={`/star-${
          cleanRating >= 3 ? 'full' : cleanRating > 2.5 ? 'half' : 'empty'
        }.svg`}
        alt="star svg"
        width={32}
        height={32}
      />
      <Image
        src={`/star-${
          cleanRating >= 4 ? 'full' : cleanRating > 3.5 ? 'half' : 'empty'
        }.svg`}
        alt="star svg"
        width={32}
        height={32}
      />
      <Image
        src={`/star-${
          cleanRating >= 5 ? 'full' : cleanRating > 4.5 ? 'half' : 'empty'
        }.svg`}
        alt="star svg"
        width={32}
        height={32}
      />
    </div>
  );
}

export default Rating;
