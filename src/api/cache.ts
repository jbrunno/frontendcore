import { InMemoryCache, InMemoryCacheConfig } from '@apollo/client';

export const cache = (config: InMemoryCacheConfig) => new InMemoryCache(config);
