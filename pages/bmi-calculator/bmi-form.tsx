// BMI Form component
import React from 'react';

interface FormProps {
    title: string;
}

const BMIForm: React.FC<FormProps> = ({ title = 'default' }) => {
    return (
        <div className="py-6">
            <form className="max-w-md mx-auto">
              <div className="relative z-0 w-1/4 mb-5 group">
                  <input id="current weight" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Current Weight" required />
              </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    );
};

export default BMIForm;
