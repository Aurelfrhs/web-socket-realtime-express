import React from "react";
import { Stack } from "@mui/material";
import PostItem from "./PostItem";

const PostsFeed = ({ posts, onComment }) => {
  return (
    <Stack spacing={2}>
      {posts.map((post, index) => (
        <PostItem
          key={post.id}
          post={post}
          index={index}
          onComment={onComment}
        />
      ))}
    </Stack>
  );
};

export default PostsFeed;