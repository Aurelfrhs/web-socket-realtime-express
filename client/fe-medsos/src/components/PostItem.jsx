import React from "react";
import {
  Card,
  CardContent,
  Box,
  Avatar,
  Typography,
  Divider,
  Stack,
  Paper,
  Grow,
} from "@mui/material";
import { PersonOutline as PersonIcon } from "@mui/icons-material";
import CommentInput from "./CommentInput";

const PostItem = ({ post, index, onComment }) => {
  const handleComment = (text) => {
    onComment(post.id, text);
  };

  return (
    <Grow in timeout={1400 + index * 200}>
      <Card>
        <CardContent>
          {/* Post Header */}
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar
              sx={{
                bgcolor: post.author === "you_user" ? "secondary.main" : "primary.main",
                mr: 2,
              }}
            >
              <PersonIcon />
            </Avatar>
            <Box>
              <Typography variant="subtitle1" fontWeight={600}>
                @{post.author}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {post.timestamp}
              </Typography>
            </Box>
          </Box>

          {/* Post Content */}
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              lineHeight: 1.6,
              fontSize: "1.1rem",
            }}
          >
            {post.content}
          </Typography>

          {/* Comments Section */}
          {post.comments.length > 0 && (
            <>
              <Divider sx={{ my: 2 }} />
              <Stack spacing={1}>
                {post.comments.map((comment) => (
                  <Paper
                    key={comment.id}
                    elevation={0}
                    sx={{
                      p: 2,
                      bgcolor: "grey.50",
                      borderRadius: 2,
                      border: "1px solid",
                      borderColor: "grey.200",
                    }}
                  >
                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                      💬 {comment.text}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {comment.timestamp}
                    </Typography>
                  </Paper>
                ))}
              </Stack>
            </>
          )}

          {/* Comment Input */}
          <Box mt={2}>
            <CommentInput onSubmit={handleComment} />
          </Box>
        </CardContent>
      </Card>
    </Grow>
  );
};

export default PostItem;