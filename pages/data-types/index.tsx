import type { ReactElement } from 'react';
import Layout from '@/components/layout/layout';
import NestedLayout from '@/components/layout/nested-layout';
import type { NextPageWithLayout } from '@/pages/_app';
import Title from '@/components/my-typography/title';
import Subtitle from '@/components/my-typography/subtitle';
import List from '@/components/my-typography/list';
import { Table, TableData } from '@/components/my-typography/table';

const DataTypesPage: NextPageWithLayout = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <Title title="Data Types in TypeScript" />
            {/* Text */}
            <p className="text-lg text-gray-700 mb-4">
                Understanding data types is crucial for effective TypeScript programming.
                Here we discuss the basic data types available in <b>TypeScript</b>. This is some additional text that
                is simply populating the page. From here, we're going to say whatever we want because we are
                trying to determine if this text field looks okay. I think it looks pretty good, but I'm not
                entirely sure. I think we should add a little bit more text just to be sure. I think that should
                be enough text to determine if the text field looks okay.
            </p>
            <Subtitle subtitle='Basic Types' />
            <List items={["Number", "String", "Boolean", "Null", "Undefined", "BigInt", "Symbol"]} />
            
            <Subtitle subtitle='Summary Table' />
            <Table columns={["Type", "Description", "Example"]}>
                <TableData data={["String", "A generic string type", "Hello World!"]} />
                <TableData data={["Number", "A generic int type", "1, 2, 3"]} />
            </Table>
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
