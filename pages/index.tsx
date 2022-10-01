import { Button, Link, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Image from 'next/image'
import LandingBg from "../public/images/lpbgnight.jpg"
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
   <Layout>
      <div className={styles.nightLandingPage}>
        <Image className={styles.bg} objectPosition="center" layout="fill" src={LandingBg} alt='quote' objectFit='cover' />
        <Typography className={styles.quote} variant='h2'>Jobs fill your pocket, but adventures fill your soul.</Typography>
        <Link href='./registration' underline='none'>
        <Button className={styles.startBtn} variant="contained">Let’s explore the world </Button>
        </Link>
      </div>
   </Layout>
  )
}

export default Home
