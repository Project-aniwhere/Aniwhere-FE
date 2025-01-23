'use client';

// import { isMobileAtom } from '@/store/device-detect-atom';
import { InitialJotaiState } from '@/type/jotai';
import { Provider } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';

interface JotaiProviderProps {
  children: React.ReactNode;
  initialState: InitialJotaiState;
}

const InitJotaiWrapper = ({ children, initialState }: JotaiProviderProps) => {
  useHydrateAtoms([
    // [isMobileAtom, initialState.isMobile],
  ]);
  return children;
};

const JotaiProvider = ({ children, initialState }: JotaiProviderProps) => {
  return (
    <Provider>
      <InitJotaiWrapper initialState={initialState}>
        {children}
      </InitJotaiWrapper>
    </Provider>
  );
};

export default JotaiProvider;
