'use client'
import Box from '@mui/material/Box';
import { useSession } from 'next-auth/react'
import Link from 'next/link' 

const SigningButton = () => {
    const { data: session} = useSession()
    if(session && session.user){
        return (
            <div>
                <p>{session.user.name}</p>
                <Link href={"/api/auth/signout"}>signout</Link>
            </div>
        )
    }

    return (
        <Box sx={{ display: 'flex'}} >
            <Box sx={{ marginRight: 5 }}>
                <Link href={"/api/auth/signin"}>signin</Link>     
            </Box> 
            <Box sx={{ marginRight: 5 }}>
                <Link href={"/signup"}>signup</Link>      
            </Box> 
            
            
        </Box>
    )
        
}

export default SigningButton
