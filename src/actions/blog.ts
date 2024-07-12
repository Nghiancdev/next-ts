import type { IPostItem, IPodcast } from 'src/types/blog';

import useSWR from 'swr';
import { useMemo } from 'react';

import { fetcher, endpoints } from 'src/utils/axios';
import { fetcher1, endpoints1 } from 'src/utils/axioss';
// ----------------------------------------------------------------------

const swrOptions = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

// ----------------------------------------------------------------------

type PostsData = {
  posts: IPostItem[];
};

type PostsData1 = IPodcast[];
// {
//   podcasts: IPodcast[];
// };

export function useGetPodCast() {
  const url = endpoints1.post.list;

  const { data, isLoading, error, isValidating } = useSWR<PostsData1>(url, fetcher1, swrOptions);

  const memoizedValue = useMemo(
    () => ({
      podcasts: data || [],
      podcastsLoading: isLoading,
      podcastsError: error,
      podcastsValidating: isValidating,
      podcastsEmpty: !isLoading && !data?.length,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export function useGetPosts() {
  const url = endpoints.post.list;

  const { data, isLoading, error, isValidating } = useSWR<PostsData>(url, fetcher, swrOptions);

  const memoizedValue = useMemo(
    () => ({
      posts: data?.posts || [],
      postsLoading: isLoading,
      postsError: error,
      postsValidating: isValidating,
      postsEmpty: !isLoading && !data?.posts.length,
    }),
    [data?.posts, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

type PostData = {
  post: IPostItem;
};

export function useGetPost(title: string) {
  const url = title ? [endpoints.post.details, { params: { title } }] : '';

  const { data, isLoading, error, isValidating } = useSWR<PostData>(url, fetcher, swrOptions);

  const memoizedValue = useMemo(
    () => ({
      post: data?.post,
      postLoading: isLoading,
      postError: error,
      postValidating: isValidating,
    }),
    [data?.post, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

type LatestPostsData = {
  latestPosts: IPostItem[];
};

export function useGetLatestPosts(title: string) {
  const url = title ? [endpoints.post.latest, { params: { title } }] : '';

  const { data, isLoading, error, isValidating } = useSWR<LatestPostsData>(
    url,
    fetcher,
    swrOptions
  );

  const memoizedValue = useMemo(
    () => ({
      latestPosts: data?.latestPosts || [],
      latestPostsLoading: isLoading,
      latestPostsError: error,
      latestPostsValidating: isValidating,
      latestPostsEmpty: !isLoading && !data?.latestPosts.length,
    }),
    [data?.latestPosts, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

type SearchResultsData = {
  results: IPostItem[];
};

export function useSearchPosts(query: string) {
  const url = query ? [endpoints.post.search, { params: { query } }] : '';

  const { data, isLoading, error, isValidating } = useSWR<SearchResultsData>(url, fetcher, {
    ...swrOptions,
    keepPreviousData: true,
  });

  const memoizedValue = useMemo(
    () => ({
      searchResults: data?.results || [],
      searchLoading: isLoading,
      searchError: error,
      searchValidating: isValidating,
      searchEmpty: !isLoading && !data?.results.length,
    }),
    [data?.results, error, isLoading, isValidating]
  );

  return memoizedValue;
}
