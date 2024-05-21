import type { ReactElement } from 'react'
import Layout from '@/components/layout/layout';
import NestedLayout from '@/components/layout/nested-layout';
import type { NextPageWithLayout } from '../_app';
import BMIForm from './bmi-form';
import BMIStats from './bmi-stats';
import { useState } from 'react';

const BmiCalculator: NextPageWithLayout = () => {
    const [weight, setWeight] = useState(null)

    return (
      <div className="py-4 items-center text-center">
          <p>BMI Calculator</p>
          <BMIStats weight={weight} />
          <BMIForm title="BMI Calculator Form" />        
      </div>
    )
}
 
BmiCalculator.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}
 
export default BmiCalculator