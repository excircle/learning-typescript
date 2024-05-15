import type { ReactElement } from 'react';
import Layout from '@/components/layout/layout';
import NestedLayout from '@/components/layout/nested-layout';
import type { NextPageWithLayout } from '@/pages/_app';

const DataTypesPage: NextPageWithLayout = () => {
    return (
        <div className="py-4 items-center text-center">
            <h1>This is the data types page</h1>
        </div>
    );
};

DataTypesPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    );
};

export default DataTypesPage;
