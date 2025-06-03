import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
  Button,
  Grow,
} from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";

const NewPostForm = ({ onSubmit }) => {
  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (!newPost.trim()) return;
    onSubmit(newPost);
    setNewPost("");
  };

  return (
    <Grow in timeout={1200}>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            What's on your mind?
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            placeholder="Share something interesting..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
          />
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="secondary"
              onClick={handlePost}
              disabled={!newPost.trim()}
              startIcon={<SendIcon />}
              sx={{
                borderRadius: 3,
                px: 3,
                py: 1,
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Post
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grow>
  );
};

export default NewPostForm;