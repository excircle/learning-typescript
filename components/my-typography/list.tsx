// List component
import React from 'react';

interface ListProps {
    items: Array<string>;
}

const List: React.FC<ListProps> = ({ items }) => {
    return (
        <div>
            <ul className="list-disc list-inside mb-4">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;
