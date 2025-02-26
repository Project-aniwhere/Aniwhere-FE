import { getAnimeTagList } from '@/action/tag';
import {
  AnimeBroadCastType,
  AnimeFilterObject,
  AnimeFilterType,
  AnimeReleaseType,
  AnimeSeasonType,
} from '@/type/anime-tag';
import { AnimeTagType } from '@/type/api/tag-api';

// 필터 초기 상태
export const TagFilterInitState = async (): Promise<TagFilterState> => {
  const res = await getAnimeTagList();

  return {
    tag: res.map((tag) => ['neutral', tag]),
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
};

export type TagState = 'included' | 'excluded' | 'neutral';

export interface TagFilterAction {
  type: 'TOGGLE' | 'CLEAR';
  payload: {
    filterType: AnimeFilterType;
    target: string | number;
  };
}

export interface TagFilterState {
  tag: [TagState, AnimeTagType][];
  release: [TagState, AnimeReleaseType][];
  season: [TagState, AnimeSeasonType][];
  broadcasting: [TagState, AnimeBroadCastType][];
}

export const TagFilterReducer = (
  state: TagFilterState,
  action: TagFilterAction
): TagFilterState => {
  console.log(state, action);
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        [action.payload.filterType]: state[action.payload.filterType].map(
          (item) => {
            const [state, curTarget] = item;

            if (action.payload.filterType === 'tag') {
              const { categoryId } = curTarget as AnimeTagType;
              if (categoryId !== action.payload.target) return item;
              if (state === 'neutral') return ['included', curTarget];
              if (state === 'included') return ['excluded', curTarget];
              if (state === 'excluded') return ['included', curTarget];
            }

            if (curTarget !== action.payload.target) return item;
            if (state === 'neutral') return ['included', curTarget];
            if (state === 'included') return ['excluded', curTarget];
            if (state === 'excluded') return ['included', curTarget];
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
