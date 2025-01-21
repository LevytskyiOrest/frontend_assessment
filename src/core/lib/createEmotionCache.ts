import { EmotionCache } from "@emotion/react";
import createCache from "@emotion/cache";

const createEmotionCache = (): EmotionCache => {
  return createCache({
    key: "test",
    nonce: "nonce",
    prepend: true,
  });
};

export default createEmotionCache;
