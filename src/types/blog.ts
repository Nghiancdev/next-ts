import type { IDateValue } from './common';

// ----------------------------------------------------------------------

export type IPostFilters = {
  publish: string;
};

export type IPostHero = {
  title: string;
  coverUrl: string;
  createdAt?: IDateValue;
  author?: { name: string; avatarUrl: string };
};

export type IPostComment = {
  id: string;
  name: string;
  avatarUrl: string;
  message: string;
  postedAt: IDateValue;
  users: { id: string; name: string; avatarUrl: string }[];
  replyComment: {
    id: string;
    userId: string;
    message: string;
    tagUser?: string;
    postedAt: IDateValue;
  }[];
};

export type IPostItem = {
  id: string;
  title: string;
  tags: string[];
  publish: string;
  content: string;
  coverUrl: string;
  metaTitle: string;
  totalViews: number;
  totalShares: number;
  description: string;
  totalComments: number;
  totalFavorites: number;
  metaKeywords: string[];
  metaDescription: string;
  comments: IPostComment[];
  createdAt: IDateValue;
  favoritePerson: { name: string; avatarUrl: string }[];
  author: { name: string; avatarUrl: string };
};

export type IUser = {
  _id: string;
  user_login: string;
  user_avatar: string;
  user_avatar_thumbnail: string;
  display_name: string;
  user_role: string;
  user_status: number;
  official_status: boolean;
  last_active: string;
};

export type ICategory = {
  category_content: string;
  category_excerpt: string;
  category_parent: string;
  category_slug: string;
  category_avatar: string | null;
  _id: string;
  category_title: string;
  category_language: string;
  category_status: string;
  category_type: string;
  category_view: number;
  version: number;
  public_status: number;
};

export type IMedia = {
  _id: string;
  media_url: string;
  media_url_presign: string;
  media_type: string;
  media_thumbnail: string;
  media_content: string;
  media_square: string;
  media_mime_type: string;
  media_file_name: string;
  media_status: number;
  media_meta: any[];
  createBy: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type IAttachFile = {
  _id: string;
  media_url: string;
  media_url_presign: string;
  media_type: string;
  media_thumbnail: string;
  media_content: string;
  media_square: string;
  media_mime_type: string;
  media_file_name: string;
  media_status: number;
  media_meta: any[];
  createBy: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type IPodcast = {
  podcast_categories: any[];
  is_premium: boolean;
  _id: string;
  user_id: IUser;
  podcast_language: string;
  podcast_category: ICategory;
  title: string;
  content: string;
  excerpt: string;
  podcast_slug: string;
  country: string;
  podcast_status: string;
  post_avatar: IMedia;
  attach_files: IAttachFile[];
  podcast_type: string;
  view_number: number;
  comment_number: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  lang: string;
};
