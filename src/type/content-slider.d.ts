export interface ContentSliderProps {
  mainTitle?: string;
  subTitle?: string;
  contentList: {
    imageSrc: string;
    title: string;
    tag: string[];
  }[];
}
