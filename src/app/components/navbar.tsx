'use client'
import SearchIcon from '@mui/icons-material/Search';
import { Input } from "@/components/ui/input"
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import PublicIcon from '@mui/icons-material/Public';
import { useSelectedLink } from '../selectedlinkprovider';
import LoginIcon from '@mui/icons-material/Login';

import Login from '../Login/page';
import Link from 'next/link';
const navbar = () => {
  const {selectedLink}= useSelectedLink();
  return (
    <div className="flex justify-between items-center sticky p-2 bg-[#4c4c4c] my-4 mr-2 rounded">
      <div>
       {selectedLink}
      </div>
      <div className='flex items-center gap-4'>
        <div className='flex items-center bg-[#2e374a] rounded'>
        <SearchIcon/>
        <Input placeholder='search...' className='bg-transparent border-none focus-0 focus:outline-none focus:ring-0 !important'/>
        </div>
      <SpeakerNotesIcon/>
        <Link  href="/Login">
        <LoginIcon/>
        </Link>
      
      <PublicIcon/>
      </div>
      </div>
  )
}

export default navbar