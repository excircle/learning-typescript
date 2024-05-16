// Subtitle component
import React from 'react';

interface SubtitleProps {
    subtitle: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ subtitle }) => {
    return (
        <h2 className="text-2xl font-semibold mb-4">{subtitle}</h2>
    );
};

export default Subtitle;