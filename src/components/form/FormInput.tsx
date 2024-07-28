import React from 'react';

interface formInputProps {
    labelName:string,
    type:string,
    value?: any,
    onChange: any
}

function FormInput(inputProps: formInputProps) {
    return (
        <div>
            <label>
                {inputProps.labelName}
                <input
                    className="border border-gray-300 rounded p-2 w-full text-black"
                    type={inputProps.type}
                    value={inputProps.value}
                    onChange={inputProps.onChange}
                    required
                />
            </label>
        </div>
    );
}

export default FormInput;