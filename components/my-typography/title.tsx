// Title component
import React from 'react';

interface TitleProps {
    title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
    return (
        <h1 className="text-3xl font-bold text-center mb-6">{title}</h1>
    );
};

export default Title;