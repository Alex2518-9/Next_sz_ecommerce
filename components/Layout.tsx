import { AppBar, Container,  Toolbar, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import styles from '../styles/Layout.module.css'
import Link from "next/link"



interface LayoutProps{
    children: JSX.Element,
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>旅行</title>
      </Head>
      <AppBar
        sx={{ backgroundColor: "#00001a", zIndex: 3 }}
        position="static"
      >
        <Toolbar className={styles.header} sx={{zIndex: 3}}>
          <Link href='/'>
            <Typography  className={styles.title}>Ryouko</Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Container className={styles.container}>{children}</Container>
      <footer className={styles.footer}>
        <Typography  color="#fff">Created by Alex</Typography>
      </footer>
    </div>
  );
}

export default Layout