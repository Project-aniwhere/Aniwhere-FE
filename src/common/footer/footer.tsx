import EmailSvg from '@public/asset/svg/email/email';
import InstagramSvg from '@public/asset/svg/instagram/instagram';
import MessageSvg from '@public/asset/svg/message/message';
import PhoneSvg from '@public/asset/svg/phone/phone';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full relative flex flex-col items-center py-4 bg-aniviolet3 text-white'>
      <h2 className='font-bold text-2xl mb-4'>ANIWHERE</h2>
      <div className='flex space-x-14 mb-4'>
        <div className='w-6 h-6'>
          <EmailSvg></EmailSvg>
        </div>
        <div className='w-6 h-6'>
          <InstagramSvg></InstagramSvg>
        </div>
        <div className='w-6 h-6'>
          <MessageSvg></MessageSvg>
        </div>
        <div className='w-6 h-6'>
          <PhoneSvg></PhoneSvg>
        </div>
      </div>
      <div className='flex space-x-8'>
        <Link href='/'>팀원 정보</Link>
        <Link href='/'>팀 깃허브</Link>
        <Link href='/'>정보수집</Link>
        <Link href='/'>신고하기</Link>
        <Link href='/'>공지사항</Link>
        <Link href='/'>개인정보 처리방침</Link>
      </div>
    </footer>
  );
};

export default Footer;
