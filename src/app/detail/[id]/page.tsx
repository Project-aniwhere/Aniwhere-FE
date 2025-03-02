'use client';

import Header from '@/component/common/header/header';
import Tabs from '@/component/common/tab/tab-list';
import DetailBanner from '@/component/detail/banner';
import CastProductList from '@/component/detail/cast-production-list';
import CommentContainer from '@/component/detail/comment-container';
import EpisodeList from '@/component/detail/episode-list';
import { DETAIL_TABS } from '@/constant/common';
import { useState } from 'react';

const DetailPage = () => {
  const [selectedTab, setSelectedTab] = useState('episode');

  return (
    <div>
      <Header />
      <DetailBanner
        poster={'ANIME_DUMMY.poster'}
        title={'ANIME_DUMMY.title'}
        rating={4.3}
        runningTime={46}
        categories={['ANIME_DUMMY.categories']}
      />
      <div className='py-5 px-5 md:px-8 flex flex-col gap-5'>
        <Tabs
          list={Object.entries(DETAIL_TABS).map(([id, value]) => ({
            id,
            value,
          }))}
          value={selectedTab}
          setValue={setSelectedTab}
        />
        <div>
          {selectedTab === 'episode' && <EpisodeList />}
          {selectedTab === 'cast_production' && <CastProductList list={[]} />}
          {selectedTab === 'comment' && <CommentContainer list={[]} />}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
