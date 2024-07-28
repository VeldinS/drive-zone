import React from 'react';

interface FormSelectProps{
    labelName:string,
    value: any,
    onChange: any,
    selectType: any,
}

function FormSelect( selectProps: FormSelectProps ) {
    return (
        <div>
            <label>
                {selectProps.labelName}
                <select
                    className="border border-gray-300 rounded p-2 w-full text-black"
                    value={selectProps.value}
                    onChange={selectProps.onChange}
                    required
                >
                    {selectProps.selectType.map((item:any) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
}

export default FormSelect;