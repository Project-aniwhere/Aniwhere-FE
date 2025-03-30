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
    searchKeyword: '',
    year: new Date().getFullYear(),
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

interface TagHandleAction {
  type: 'TOGGLE' | 'CLEAR' | 'UNSELECT';
  payload: {
    filterType: AnimeFilterType;
    target: string | number;
  };
}

interface TagSearchAction {
  type: 'SEARCH';
  payload: string;
}

interface TagSelectYearAction {
  type: 'SELECT_YEAR';
  payload: number;
}

export type TagFilterAction =
  | TagHandleAction
  | TagSearchAction
  | TagSelectYearAction;

export interface TagFilterState {
  searchKeyword: string;
  year: number;
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

    case 'UNSELECT':
      return {
        ...state,
        [action.payload.filterType]: state[action.payload.filterType].map(
          (item) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const [_, curTarget] = item;

            if (action.payload.filterType === 'tag') {
              const { categoryId } = curTarget as AnimeTagType;
              if (categoryId !== action.payload.target) return item;
              return ['neutral', curTarget];
            }

            if (curTarget !== action.payload.target) return item;
            return ['neutral', curTarget];
          }
        ),
      };
    case 'SEARCH':
      return {
        ...state,
        searchKeyword: action.payload,
      };

    case 'SELECT_YEAR':
      return {
        ...state,
        year: action.payload,
      };

    default:
      return state;
  }
};
