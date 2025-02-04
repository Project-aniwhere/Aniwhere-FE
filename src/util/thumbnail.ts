const imageFiles = [
  '08a724776de4ee310fd2ddd49570aab3_high.webp',
  '09e6e924c7fae0242041435c22afc5ad_high.webp',
  '0c088fc5a8eddbe84661fddb2292d313_high.webp',
  '123b6ab84084da9cb7ac6af94a60f47c_high.webp',
  '1613d37800698fe02c05be6d3c994603_high.webp',
  '176ec365a3f15bfc85a06ef93f69e536_high.webp',
  '17f593faf4f9976eaa1ee645e639b341_high.webp',
  '2207064d97df515ad241ece5272e648e_high.webp',
  '26318b9bdcdb43ed40194620fb090773_high.webp',
  '275f91323c06c8b8a8cb4519c2b3ce57_high.webp',
  '30b6fa1e365594ef61c28ac243d7e885_high.webp',
  '3570dac976866c269dade4b7abe790eb_high.webp',
  '44867d8fc5a801fdc93fe3eb1d8a758e_high.webp',
  '458faa8e9810d1660fa5cab8c6011d94_high.webp',
  '534add5395eacde9b4d3807e621ae7c4_high.webp',
  '5a4efa9b9476841b2ee798546736d0a0_high.webp',
  '66a6520f901f268362a9160d11e4ac19_high.webp',
  '67f506aaeac0cec6b9f155efa879d83b_high.webp',
  '7076f840ba05f0f41040c88cd7eafb6e_high.webp',
  '71b2dc00accfb5602c0b531b1e5d8f5e_high.webp',
  '875278ca5e187fbd3f9112962fd9c18c_high.webp',
  '92023ad21f65836d1756a65de01eed93_high.webp',
  '9b1372def7edbb968a7e0be197ebcf8a_high.webp',
  'a76e320046d6ca555af6affddd915898_high.webp',
  'ae9e76f1fa9896d00ae285d083455f6b_high.webp',
  'b17bb64661a104fbd45334fb7ba79d26_high.webp',
  'b1e433c5166702444efa6dda0918c089_high.webp',
  'c558dd40f32371b4bdcbe50de0bd8ff9_high.webp',
  'c757cce27fe5af4544ca1972b76f0968_high.webp',
  'fb2ae844565a8a0f75f4041d80c57d84_high.webp',
  'ff11a9f528cfa2b20f10ddc473f8f959_high.webp',
];

export const getThumbnail = (userId?: number) => {
  if (userId) {
    return imageFiles[userId % imageFiles.length];
  }
  return imageFiles[Math.floor(Math.random() * 5)];
};
