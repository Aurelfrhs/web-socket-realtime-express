import { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import Header from "../components/Header";
import GroupSelector from "../components/GroupSelector";
import NewPostForm from "../components/NewPostForm";
import PostsFeed from "../components/PostsFeed";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/action/authAction";
import { fetchPosting } from "../redux/action/postAction";


const WEBSOCKET_URL = 'ws://127.0.0.1:3002'

const Home = () => {
    const profile = useSelector(root => root?.path)
    const posting = useSelector(root => root?.post)
    const dispatch = useDispatch()

    const [isConnected, setIsConnected] = useState(false)
    const [websocket, setWebsocket] = useState(null)

    // const ws = useRef(null)
    
    useEffect(() => {
        
    })
    
    useEffect(() => {
        dispatch(fetchProfile(profile?.token))
        dispatch(fetchPosting(posting?.token))
    })
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "alex_dev",
      content: "First post on Threads Clone! 🚀 Excited to share my thoughts here!",
      comments: [],
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  
  const [groups] = useState(["React Devs", "Gamers", "Designers"]);
  const [selectedGroup, setSelectedGroup] = useState("React Devs");

  const handleNewPost = (content) => {
    const newEntry = {
      id: Date.now(),
      author: "you_user",
      content,
      comments: [],
      timestamp: new Date().toLocaleTimeString(),
    };
    setPosts([newEntry, ...posts]);
  };

  const handleComment = (postId, text) => {
    if (!text.trim()) return;
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                { 
                  id: Date.now(), 
                  text,
                  timestamp: new Date().toLocaleTimeString(),
                }
              ],
            }
          : post
      )
    );
  };

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh", py: 3 }}>
        <Container maxWidth="md">
          <Header />
          
          <GroupSelector
            groups={groups}
            selectedGroup={selectedGroup}
            onGroupSelect={handleGroupSelect}
          />

          <NewPostForm onSubmit={handleNewPost} />

          <PostsFeed posts={posts} onComment={handleComment} />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Home;