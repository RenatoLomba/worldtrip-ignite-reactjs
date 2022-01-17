import { useBreakpointValue } from '@chakra-ui/react';

function useIsWideVersion() {
  return useBreakpointValue({
    base: false,
    lg: true,
  });
}

export { useIsWideVersion };
