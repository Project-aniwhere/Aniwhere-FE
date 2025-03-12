import { ChangeEvent, useCallback, useMemo, useRef, useState } from 'react';
import DefaultInput from '../common/input/default-input';
import { useQuery } from '@tanstack/react-query';
import tagQuery from '@/hook/query/tag';
import { debounce } from '@/util/throttle';
import TextHighlight from '../common/text-highlight/text-highlight';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import CrossSvg from '@/asset/svg/cross/cross-svg';

const SearchInput = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { data } = useQuery({
    ...tagQuery.query.search({ searchKeyword }),
    enabled: searchKeyword.length > 0,
  });

  const handleSearch = useMemo(
    () =>
      debounce(
        (e: ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value),
        500
      ),
    [setSearchKeyword]
  );

  const handleDialogOpen = useCallback(() => {
    setDialogOpen(true);
  }, [setDialogOpen]);

  const handleDialogClose = useCallback(() => {
    setDialogOpen(false);
  }, [setDialogOpen]);

  return (
    <div className='relative' ref={modalRef}>
      <div className='relative'>
        <AnimatePresence>
          {!dialogOpen && (
            <motion.button
              className='absolute right-0 top-[50%] -translate-y-1/2 z-50'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleDialogOpen}
            >
              검색
            </motion.button>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: dialogOpen ? 1 : 0,
            zIndex: dialogOpen ? 50 : -1,
            position: 'relative',
          }}
          exit={{ opacity: 0 }}
          transition={{
            x: { duration: 0.1 },
            opacity: { duration: 0.1 },
          }}
        >
          <DefaultInput
            className='w-full h-full outline-none text-black'
            placeholder='검색어를 입력하세요.'
            onChange={handleSearch}
          />
          <button
            onClick={handleDialogClose}
            className='absolute right-4 text-black top-1/2 -translate-y-1/2'
          >
            <CrossSvg />
          </button>
        </motion.div>
      </div>
      {dialogOpen && data && data.content.length > 0 && (
        <div className='absolute translate-y-2 drop-shadow-lg rounded bg-white w-full flex flex-col gap-2 p-2 items-start font-medium text-sm text-black'>
          {data.content.map((anime) => (
            <Link
              key={anime.animeId}
              href={`/detail/${anime.animeId}`}
              className='w-full truncate'
            >
              <TextHighlight
                text={anime.title}
                highlight={searchKeyword}
                color='#613DC1'
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
