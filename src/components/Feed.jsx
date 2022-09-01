import { Box,Stack,Typography } from '@mui/material'
import React from 'react'
import { useState} from 'react'
import { useEffect } from 'react'
import Sidebar from './Sidebar'
import Video from './Video'
import {FetchfromApi} from '../utils/FetchfromApi'

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState('New')
  const [video,setvideo]=useState([]);
  useEffect(() => {
  FetchfromApi(`search?part=snippet&q=${selectedCategory}`).then((data)=>setvideo(data.items))
  }, [selectedCategory])
  
  return (
    <Stack sx={{flexDirection:{sx:'column',md:"row"}}}>
      <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
     <Sidebar
     selectedCategory={selectedCategory}
     setselectedCategory={setselectedCategory}
     
     
     
     />
      <Typography className='copyright' variant='body2' sx={{mt:1.5,color:"#fff"}}>
      CopyRight 2022 CodeCoder
      </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}} >
         {selectedCategory} <span style={{color:'#F31503'}}>Video</span>
        </Typography>
        <Video video={video}/>
      </Box>
    </Stack>
  )
}

export default Feed