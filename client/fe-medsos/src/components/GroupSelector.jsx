import React from "react";
import { Typography, Paper, Stack, Chip, Grow } from "@mui/material";

const GroupSelector = ({ groups, selectedGroup, onGroupSelect }) => {
  return (
    <Grow in timeout={1000}>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          mb: 3,
          borderRadius: 3,
          bgcolor: "white",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Communities
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {groups.map((group) => (
            <Chip
              key={group}
              label={`#${group}`}
              onClick={() => onGroupSelect(group)}
              color={selectedGroup === group ? "primary" : "default"}
              variant={selectedGroup === group ? "filled" : "outlined"}
              sx={{
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "transform 0.2s",
                },
              }}
            />
          ))}
        </Stack>
      </Paper>
    </Grow>
  );
};

export default GroupSelector;