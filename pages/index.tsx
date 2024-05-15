import type { ReactElement } from 'react'
import Layout from '../components/layout/layout'
import NestedLayout from '../components/layout/nested-layout'
import type { NextPageWithLayout } from './_app'


const Page: NextPageWithLayout = () => {
  return (
    <div className="py-4 items-center text-center">
      <p>Kaka de Nunes</p>
    </div>
  )
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}
 
export default Page