import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { FetchfromApi } from "../utils/FetchfromApi";
import  Videos  from "./Video";

const SearchFeed = () => {
  const [video, setVideo] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    FetchfromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideo(data.items))
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos video={video} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;
