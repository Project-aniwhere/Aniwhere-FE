import MainImageSlider from '@/component/home/main-image-slider';
import { ContentSliderProps } from '@/type/content-slider';

import sample1 from '@/asset/img/subslider/sample1.jpg';
import sample2 from '@/asset/img/subslider/sample2.jpg';
import sample3 from '@/asset/img/subslider/sample3.jpg';
import sample4 from '@/asset/img/subslider/sample4.jpg';
import ContentSlider from '@/component/home/content-slider';
import MainLayout from '@/component/common/layout/main-layout';
import Footer from '@/component/common/footer/footer';

export default function Home() {
  const dummyData: ContentSliderProps = {
    mainTitle: '인기 작품 모음',
    subTitle: '요즘 인기있는 작품을 소개해드려요.',
    contentList: [
      { imageSrc: sample1.src, title: '스파이 패밀리', tag: ['일상', '힐링'] },
      { imageSrc: sample2.src, title: '스파이 패밀리', tag: ['일상', '힐링'] },
      { imageSrc: sample3.src, title: '스파이 패밀리', tag: ['일상', '힐링'] },
      { imageSrc: sample4.src, title: '스파이 패밀리', tag: ['일상', '힐링'] },
      { imageSrc: sample1.src, title: '스파이 패밀리', tag: ['일상', '힐링'] },
      { imageSrc: sample2.src, title: '스파이 패밀리', tag: ['일상', '힐링'] },
      { imageSrc: sample3.src, title: '스파이 패밀리', tag: ['일상', '힐링'] },
      { imageSrc: sample4.src, title: '스파이 패밀리', tag: ['일상', '힐링'] },
      { imageSrc: sample1.src, title: '스파이 패밀리', tag: ['일상', '힐링'] },
      { imageSrc: sample2.src, title: '스파이 패밀리', tag: ['일상', '힐링'] },
    ],
  };

  return (
    <div className='w-full flex flex-col items-center justify-center gap-4'>
      <MainImageSlider {...dummyData} />
      <MainLayout>
        <ContentSlider {...dummyData} />
        <ContentSlider {...dummyData} />
        <ContentSlider {...dummyData} />
        <ContentSlider {...dummyData} />
        <ContentSlider {...dummyData} />
        <ContentSlider {...dummyData} />
      </MainLayout>
      <Footer />
    </div>
  );
}
