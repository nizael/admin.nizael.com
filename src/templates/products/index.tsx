'use client'
import { Layout } from "@components/components/layout"
import { apisFetch } from "@components/services/apis"
import { useMemo } from "react"
import { useProductStore } from "./store/useProductStore"
import { Main } from "./partials/Main"

export const Products = () => {
  useMemo(async () => {
    const { listAll } = apisFetch()
    const products = await listAll()
    useProductStore.setState({products: products})
  }, [])
  return (
    <Layout>
      <Main/>
    </Layout>
  )
}