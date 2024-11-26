import {
  AnimeBroadCastType,
  AnimeFilterObject,
  AnimeFilterType,
  AnimeGenreType,
  AnimeReleaseType,
  AnimeSeasonType,
  AnimeTagType,
} from '@/type/anime-tag';

// 필터 초기 상태
export const TagFilterInitState: TagFilterState = {
  genre: Object.keys(AnimeFilterObject.genre).map((key) => [
    'neutral',
    key as AnimeGenreType,
  ]),
  tag: Object.keys(AnimeFilterObject.tag).map((key) => [
    'neutral',
    key as AnimeTagType,
  ]),
  release: Object.keys(AnimeFilterObject.release).map((key) => [
    'neutral',
    key as AnimeReleaseType,
  ]),
  season: Object.keys(AnimeFilterObject.season).map((key) => [
    'neutral',
    Number(key) as AnimeSeasonType,
  ]),
  broadcasting: Object.keys(AnimeFilterObject.broadcasting).map((key) => [
    'neutral',
    key as AnimeBroadCastType,
  ]),
};

type TagState = 'included' | 'excluded' | 'neutral';

export interface TagFilterAction {
  type: 'TOGGLE' | 'CLEAR';
  payload: {
    filterType: AnimeFilterType;
    target: keyof (typeof AnimeFilterObject)[AnimeFilterType];
  };
}

export interface TagFilterState {
  genre: [TagState, AnimeGenreType][];
  tag: [TagState, AnimeTagType][];
  release: [TagState, AnimeReleaseType][];
  season: [TagState, AnimeSeasonType][];
  broadcasting: [TagState, AnimeBroadCastType][];
}

export const TagFilterReducer = (
  state: TagFilterState,
  action: TagFilterAction
): TagFilterState => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        [action.payload.filterType]: state[action.payload.filterType].map(
          (item) => {
            const [state, curTarget] = item;
            if (curTarget !== action.payload.target) return item;
            if (state === 'neutral') return ['included', curTarget];
            if (state === 'included') return ['excluded', curTarget];
            if (state === 'excluded') return ['neutral', curTarget];
          }
        ),
      };
    case 'CLEAR':
      return {
        ...state,
        [action.payload.filterType]: state[action.payload.filterType].map(
          (item) => ['neutral', item[1]]
        ),
      };
    default:
      return state;
  }
};
