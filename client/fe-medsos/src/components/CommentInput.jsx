import React, { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import { Reply as ReplyIcon } from "@mui/icons-material";

const CommentInput = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim()) {
      onSubmit(text);
      setText("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <Box display="flex" gap={1} alignItems="flex-end">
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        placeholder="Add a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 3,
          },
        }}
      />
      <IconButton
        color="primary"
        onClick={handleSubmit}
        disabled={!text.trim()}
        sx={{
          bgcolor: text.trim() ? "primary.main" : "grey.300",
          color: "white",
          "&:hover": {
            bgcolor: text.trim() ? "primary.dark" : "grey.400",
          },
          "&:disabled": {
            color: "white",
          },
        }}
      >
        <ReplyIcon />
      </IconButton>
    </Box>
  );
};

export default CommentInput;