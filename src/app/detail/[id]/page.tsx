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
        poster={ANIME_DUMMY.poster}
        title={ANIME_DUMMY.title}
        rating={4.3}
        runningTime={46}
        categories={ANIME_DUMMY.categories}
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
          {selectedTab === 'cast_production' && (
            <CastProductList list={ANIME_DUMMY.castings} />
          )}
          {selectedTab === 'comment' && (
            <CommentContainer list={ANIME_DUMMY.reviews} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

export const ANIME_DUMMY = {
  animeId: 13,
  title: '월요일의 타와와 2기',
  director: '이시히라 신지',
  characterDesign: '유키에 스즈키',
  musicDirector: '타카나시 야스하루',
  animationDirector: '나카노 료타로',
  script: '이하라 켄타',
  producer: '무카이토게 카즈키',
  studio: 'J.C. Staff, Mainichi Broadcasting System, Nippon Television Network',
  releaseDate: '2024-01-08',
  endDate: '2024-06-24',
  episodes: 25,
  runningTime: null,
  status: '방영종료',
  trailer: 'https://www.youtube.com/watch?v=bJaTrqUGXXU',
  description:
    'Tsuki ga Michibiku Isekai Douchuu 2기에서는 마코토 미스미가 미츠루기와 소피아 불가를 물리쳐 인간 세계를 공격하는 마군을 일시적으로 막아내는 이야기입니다. 여신은 마코토의 점점 커져가는 힘을 인식하고 그를 단순한 귀찮은 존재가 아닌 경쟁자로 보기 시작합니다. 마코토는 그의 아웃사이더 공동체를 확장하고 더 많은 인간들과 연결하기 위한 여정을 계속합니다. 하지만 그는 다가오는 폭풍을 막아낼 수 있을 만큼 강해질 수 있을까요?',
  poster:
    'https://media.kitsu.app/anime/45235/poster_image/4da67595b4035e763dec7324e715d8a6.png',
  airingQuarter: 1,
  isAdult: false,
  duration: '24',
  weekday: '월요일',
  anilistId: '139518',
  categories: ['코미디', '판타지', '이세계', '모험', '액션'],
  castings: [
    {
      castingId: 2368,
      characterName: '토모에',
      characterDescription:
        '토모에는 여신의 세계에 존재하는 상급 드래곤 중 한 명이다. 현재 미스미 마코토를 섬기고 있다.\n\n그녀는 여유로운 성격을 가지고 있으며, 새로운 도전을 받아들이고 일본의 에도 시대와 관련된 흥미로운 것을 배우는 것을 좋아한다. 이전의 게으르고 세상에 무관심했던 태도와는 다르다. \n\n때때로 심각하지 않아서 위험할 정도다.\n\n그녀는 마코토로부터 어떤 변화가 일어날지 보는 것과 특히 그의 기억에서 배우는 것에서 큰 즐거움을 찾는다.',
      voiceActorName: '아야네 사쿠라',
    },
    {
      castingId: 2369,
      characterName: '미오',
      characterDescription:
        '그녀는 이전에 재앙의 검은 거미로 불렸으며 여신의 세계에서 독특한 존재입니다. 현재 마코토의 종속 상태에 있습니다. 그녀는 마코토에 대한 충성심에서 단독적이고 직설적일 수 있으며, 이는 위험한 수준에 도달할 정도입니다. 마코토에게 해를 끼칠 의도가 있는 사람을 파괴하는 것에 대해 어떠한 거리낌도 없습니다.',
      voiceActorName: '기토 아카리',
    },
    {
      castingId: 2370,
      characterName: 'Shiki',
      characterDescription:
        '시키는 리치이며 현재 미스미 마코토에게 충성을 다하고 있다. 그의 기원과 원래 이름은 알려져 있지 않다. 쉽게 알 수 있는 것은 그가 마법 지식에서 뛰어난 연구자였다는 점이다. 사망하기 전에 리치로 되살아났거나 스스로 리치가 되었을 가능성이 있다; 언제, 어디서인지는 알 수 없다. 알려진 것은 그가 매우 오랫동안 리치였으며 상당한 명성을 가지고 있다는 것이다.',
      voiceActorName: '츠다 켄지로',
    },
    {
      castingId: 2371,
      characterName: '마코토 미스미',
      characterDescription:
        '미스미 마코토는 이 시리즈의 주요 주인공이다. 그는 여신의 세계로 보내진 세 명의 세계 여행자 중 한 명이다.\n\n원래는 그의 부모와 여신 사이의 계약에 따라 다른 세계로 보내질 유일한 인물로 예정되어 있었으나, 여신이 자신의 미적 기준에 따라 마코토를 버리고 그녀의 세계의 가장자리에 있는 황야로 던져버린다. 그리고 비밀리에 지구에서 다른 두 사람을 납치하여 그녀의 세계로 영웅으로 보내게 된다. 계약 완성을 위한 중개인으로 일했던 지구의 달신, 츠쿠요미는 마코토를 도와 축복을 주고 자유롭게 원하는 대로 살라고 조언한다.\n\n여신의 세계에서 그는 "레이도 쿠즈노하" (WN/LN) 또는 "마코토 쿠즈노하" (만화)라는 가명으로 알려져 있으며, 강력한 상인 및 숙련된 교사로 활동한다.',
      voiceActorName: '하나에 나츠키',
    },
    {
      castingId: 2372,
      characterName: '에마',
      characterDescription:
        '에마는 마코토 미스미의 비서이며 아소라의 감독관 역할을 합니다.',
      voiceActorName: '하야미 사오리',
    },
  ],
  reviews: [],
};
