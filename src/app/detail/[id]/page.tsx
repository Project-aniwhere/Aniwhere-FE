'use client';

import Footer from '@/component/common/footer/footer';
import Header from '@/component/common/header/header';
import MainLayout from '@/component/common/layout/main-layout';
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
      <DetailBanner />
      <MainLayout>
        <div className='p-8 flex flex-col gap-8'>
          <Tabs
            list={Object.entries(DETAIL_TABS).map(([id, value]) => ({
              id,
              value,
            }))}
            value={selectedTab}
            setValue={setSelectedTab}
          />
          <div className='px-5'>
            {selectedTab === 'episode' && <EpisodeList />}
            {selectedTab === 'cast_production' && <CastProductList />}
            {selectedTab === 'comment' && <CommentContainer />}
          </div>
        </div>
      </MainLayout>
      {/* <Footer /> */}
    </div>
  );
};

export default DetailPage;
