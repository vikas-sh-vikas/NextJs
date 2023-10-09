import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/productCard'

export default function Home() {
  return (
    <main>
      <>
      <h1>
        Next Project
      </h1>
      <Link href='/users'>Routing</Link>
      <ProductCard />
      </>
    </main>
  )
}
