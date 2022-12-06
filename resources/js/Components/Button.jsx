import React from 'react';
import PropTypes from "prop-types"

Button.PropTypes ={
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    variant : PropTypes.oneOf(["primary", "warning", "danger", "light-outline", "white-outline"]),
    processing: PropTypes.bool,
    children: PropTypes.node
}

export default function Button({ 
    type = 'submit',
    className = '',
    variant = 'primary',
    processing,
    children
 }) {
    return (
        <button
            type={type}
            // className={
            //     `inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 ${
            //         processing && 'opacity-25'
            //     } ` + className
            // }
            className={`rounded-2xl py-[13px] text-center w-full ${processing && "opacity-30"} btn-${variant} ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
