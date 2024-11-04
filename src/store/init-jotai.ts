import { isMobile } from '@/util/detect-device';
import { InitialJotaiState } from '@/type/jotai';

const InitJotai: InitialJotaiState = {
  isMobile: isMobile(),
};

export default InitJotai;
