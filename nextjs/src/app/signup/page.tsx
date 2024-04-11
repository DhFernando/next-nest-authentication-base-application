'use client'
import { Backend_URL } from '@/lib/Constants'
import { Box, Button, TextField } from '@mui/material' 
import Link from 'next/link'
import React, { useRef } from 'react'

type FormInputs = {
    name: string,
    email: string
    password: string
}

const Signup = () => {

    const data = useRef<FormInputs>({
        name: '',
        email: '',
        password: '',
    })

    const register = async () => {
        const res = await fetch(Backend_URL + "/auth/register", {
            method: "POST",
            body: JSON.stringify({
                name: data.current.name,
                email: data.current.email,
                password: data.current.password,
            }),
            headers: { "Content-Type": "application/json" },
        });

         

        const accessControlAllowOrigin = res.headers.get("Access-Control-Allow-Origin");
        console.log("Access-Control-Allow-Origin:", accessControlAllowOrigin);

        if(!res.ok){
            alert(res.statusText);
            return;
        }
        const response = await res.json();
        alert("user registered")
        console.log(response);
    }

  return (
    <div>
        <Box sx={{ display: 'flex', flexDirection:'column', px: '20%' }}>
            <TextField id="standard-basic" label="Name" name='name' variant="standard" onChange={(e) => data.current.name = e.target.value} />
            <TextField id="standard-basic" label="Email" name='email' variant="standard" onChange={(e) => data.current.email = e.target.value}/>
            <TextField id="standard-basic" type='password' label="Password" name='password' variant="standard" onChange={(e) => data.current.password = e.target.value}/>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Button onClick={register}>Register</Button>
                <Link href={"/"}>Cancel</Link>
            </Box>
        </Box>
    </div>
  )
}

export default Signup