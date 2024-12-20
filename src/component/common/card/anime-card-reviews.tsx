'use client';

import { Review } from '@/type/api/anime-recommend-api';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import StarRate from '../comment/star-rate';
interface AnimeCardReviewsProps {
  reviews: Review[];
}

const AnimeCardReviews = ({ reviews }: AnimeCardReviewsProps) => {
  const [reviewIdx, setReviewIdx] = useState(0);

  const curReview = reviews[reviewIdx];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setReviewIdx((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [reviews]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <StarRate rate={curReview.rating} />
      </motion.div>
      <p>{curReview.content}</p>
    </AnimatePresence>
  );
};

export default AnimeCardReviews;
