export const AnimeReleaseTypeObject = {
  tva: 'TVA',
  ova: 'OVA',
  movie: '극장판',
} as const;

export const AnimeSeasonTypeObject = {
  1: '1분기',
  2: '2분기',
  3: '3분기',
  4: '4분기',
} as const;

export const AnimeBroadCastTypeObject = {
  broadcasting: '방영중',
  finish: '완결',
} as const;

export const AnimeFilterObject = {
  release: AnimeReleaseTypeObject,
  season: AnimeSeasonTypeObject,
  broadcasting: AnimeBroadCastTypeObject,
} as const;

export const AnimeFilterNameObject = {
  tag: '태그',
  release: '출시 종류',
  season: '분기',
  broadcasting: '방영 유무',
} as const;

export type AnimeReleaseType = keyof typeof AnimeReleaseTypeObject;
export type AnimeFilterType = keyof typeof AnimeFilterObject | 'tag';
export type AnimeSeasonType = keyof typeof AnimeSeasonTypeObject;
export type AnimeBroadCastType = keyof typeof AnimeBroadCastTypeObject;
