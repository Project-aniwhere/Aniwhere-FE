import Carousel from '../common/carousel/carousel';
import Comment from '../common/comment/comment';
import sample2 from '@/asset/img/subslider/sample2.jpg';
const testComment = `Look, I was gonna go easy on you not to hurt your feelings
But I'm only going to get this one chance (six minutes-, six minutes-)
Something's wrong, I can feel it (six minutes, Slim Shady, you're on!)
Just a feeling I've got, like something's about to happen, but I don't know what
If that means what I think it means, we're in trouble, big trouble
And if he is as bananas as you say, I'm not taking any chances
You are just what the doc ordered
I'm beginnin' to feel like a Rap God, Rap God
All my people from the front to the back nod, back nod
Now, who thinks their arms are long enough to slap box, slap box?
They said I rap like a robot, so call me Rap-bot
But for me to rap like a computer, it must be in my genes
I got a laptop in my back pocket
My pen'll go off when I half-cock it
Got a fat knot from that rap profit
Made a livin' and a killin' off it
Ever since Bill Clinton was still in office
With Monica Lewinsky feelin' on his nutsack
I'm an MC still as honest
But as rude and as indecent as all hell
Syllables, skill-a-holic (kill 'em all with)
This flippity dippity-hippity hip-hop
You don't really wanna get into a pissin' match
With this rappity brat, packin' a MAC in the back of the Ac'
Backpack rap crap, yap-yap, yackety-yack
And at the exact same time, I attempt these lyrical acrobat stunts while I'm practicin' that
I'll still be able to break a motherfuckin' table
Over the back of a couple of faggots and crack it in half`;

const CommentSlider = () => {
  return (
    <Carousel>
      {Array(10)
        .fill(0)
        .map((_, idx) => (
          <div key={idx} className='p-2 h-full'>
            <Comment
              userIcon=''
              nickName='test'
              uploadedTime='2024.10.23'
              animeTitle='애니메이션 제목'
              rate={3.5}
              image={idx === 1 ? sample2.src : ''}
              comment={testComment}
              likeCount={10}
              isLikeClicked
            />
          </div>
        ))}
    </Carousel>
  );
};

export default CommentSlider;
