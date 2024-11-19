import Footer from '@/component/common/footer/footer';
import Header from '@/component/common/header/header';
import MainLayout from '@/component/common/layout/main-layout';
import DetailBanner from '@/component/detail/banner';
import CastProductList from '@/component/detail/cast-production-list';
import CommentContainer from '@/component/detail/comment-container';
import EpisodeList from '@/component/detail/episode-list';

const DetailPage = () => {
  return (
    <div>
      <Header />
      <DetailBanner />
      <MainLayout>
        <div className='p-8 flex flex-col gap-8'>
          <div className='flex gap-2'>
            <div>에피소드</div>
            <div>출연/제작</div>
            <div>코멘트 200+</div>
            <div>비슷한 작품</div>
          </div>
          <EpisodeList />
          <CastProductList />
          <CommentContainer />
        </div>
      </MainLayout>
      {/* <Footer /> */}
    </div>
  );
};

export default DetailPage;
