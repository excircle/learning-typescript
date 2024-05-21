// BMI Stats component
import React from 'react';

interface StatsProps {
    weight: number;
}

const BMIStats: React.FC<StatsProps> = ({ weight }) => {
    return (
        <div className="bg-white border border-black rounded-lg p-4 max-w-sm mx-auto">
            <h5 className="text-lg leading-6 font-medium text-gray-900">Stats</h5>
            <div className="mt-2">
                <div className="flex justify-between">
                    <dd className="text-gray-500 dark:text-gray-400">Current BMI</dd>
                    <dt className="text-lg font-semibold text-gray-900">31.37 %</dt>
                </div>
                <div className="flex justify-between">
                    <dd className="text-gray-500 dark:text-gray-400">Current Body Weight</dd>
                    <dt className="text-lg font-semibold text-gray-900">{weight} Lbs</dt>
                </div>
                <div className="flex justify-between">
                    <dd className="text-gray-500 dark:text-gray-400">Suggested Calories</dd>
                    <dt className="text-lg font-semibold text-gray-900">2350</dt>
                </div>
            </div>
        </div>
    );
};

export default BMIStats;
