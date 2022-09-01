import React from 'react'
import { useState,useEffect} from 'react'
import {Box} from '@mui/material'
import Video from './Video'
import ChannelCard from './ChannelCard'
import { useParams } from 'react-router-dom'
import {FetchfromApi} from '../utils/FetchfromApi'
const ChannelDetails = () => {
  const [channelDetail,setChannelDetail]=useState(null)
 const[video,setvideo]=useState([])
  const {id}=useParams();
  useEffect(()=>{
    FetchfromApi(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetail(data?.items[0])) 
    FetchfromApi(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setvideo(data?.items)) 
  },[id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, #1b0303 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Video video={video} />
      </Box>
    </Box>
  );
  
}

export default ChannelDetails