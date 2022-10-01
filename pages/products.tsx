import React from 'react'
import Layout from '../components/Layout';
import ProductCard from "../components/ProductCard";


const Products = () => {
  return (
    <Layout>
        <ProductCard title='Jacket' image="/images/mammut_tour_hooded_jacket.jpg" desc='szuper jacket' price={3000} />
    </Layout>
  )
}

export default Products