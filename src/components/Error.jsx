import React from 'react';

const Error = () => {
    return (
        <div className="w-full flex items-center justify-center flex-col">
            <h3 className="mt-5 text-red-300">Oops, ERROR</h3>
            <h1 className="font-bold text-2xl text-white mt-2">
                Something wrong.. please, try later..
            </h1>
        </div>
    );
}

export default Error;
