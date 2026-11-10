import { blogPosts, type BlogPost } from "@/data/blog";

// The data file isn't in date order, so sort it once here. Dates look like
// "Sep 03, 2020"; a post whose date can't be read sorts last.
const time = (post: BlogPost) => {
  const t = Date.parse(post.date);
  return Number.isNaN(t) ? 0 : t;
};

// Journal posts, newest first.
export const postsByDate: BlogPost[] = [...blogPosts].sort((a, b) => time(b) - time(a));
