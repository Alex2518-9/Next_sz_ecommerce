import { Box, Button, FormControl, Input, InputLabel, Link, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import styles from "../styles/Registration.module.css"
import LogRegBg from "../public/images/logregbg.jpg"
import {ThemeProvider} from "@mui/material"
import theme from '../utils/colorTheme'
import axios from 'axios'
import { useRouter } from 'next/router'

const Registration = () => {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useRouter();


const onCreateNewUser = () => {
  axios.post("./api/addUser", {
   userName,
   email,
   password
  });
  setUserName("");
  setEmail("");
  setPassword("");
  
}
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <div className={styles.formContainer}>
        <Typography variant='h6' color="#fff">Registration</Typography>
          <FormControl className={styles.formInput} color="primary">
            <InputLabel sx={{color: "#fff"}}>User Name</InputLabel>
            <Input onChange={(e)=> setUserName(e.target.value)} sx={{color: "#fff"}}/>
          </FormControl>

          <FormControl className={styles.formInput} color="primary">
            <InputLabel sx={{color: "#fff"}}>Email address</InputLabel>
            <Input onChange={(e)=> setEmail(e.target.value)} sx={{color: "#fff"}}/>
          </FormControl>

          <FormControl className={styles.formInput} color="primary">
            <InputLabel sx={{color: "#fff"}}>Password</InputLabel>
            <Input onChange={(e)=> setPassword(e.target.value)} sx={{color: "#fff"}}/>
          </FormControl>
          <Link href="/products" underline='none'>
          <Button onClick={onCreateNewUser} className={styles.regBtn} variant='outlined' >Sign Up</Button>
          </Link>

          <Box component="div" sx={{p:2, width: "90%", display: "flex", justifyContent: "center", zIndex: 2}}>
          <Typography variant='subtitle2' color="#fff">Already have an Account?</Typography>
          <Link href='/login' underline='none'>
            <Typography className={styles.loginLink} sx={{paddingLeft: 1, cursor: "pointer"}} color="primary">Login</Typography>
          </Link>
          </Box>
        </div>
        <Image
          className={styles.backGraund}
          src={LogRegBg}
          alt=""
          objectPosition="center"
          layout="fill"
          width={100}
          height={100}
        />
      </ThemeProvider>
    </Layout>
  );
}

export default Registration