import { useState } from 'react';

function Form({setTableProps}) {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [radio, setRadio] = useState('1');
    const [select, setSelect] = useState('1');
    const [check, setCheck] = useState(false);

    function _onChange(setter) {
        return e => {
            const target = e.target;
            setter(target.type === 'checkbox' ? target.checked : target.value);
        }
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="Input 1" value={input1} onChange={_onChange(setInput1)}/>
            </div>
            <div>
                <input type="text" placeholder="Input 2" value={input2} onChange={_onChange(setInput2)}/>
            </div>
            <div onChange={_onChange(setRadio)}>
                1
                <input type="radio" value="1" checked={radio === "1"}/>
                2
                <input type="radio" value="2" checked={radio === "2"}/>
            </div>
            <div>
                <select onChange={_onChange(setSelect)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <div>
                <input type="checkbox" onChange={_onChange(setCheck)}/>
            </div>
            <div>
                <button onClick={() => setTableProps({
                    input1, input2, radio, select, check
                })
                }>OK
                </button>
            </div>
            <button onClick={() => setTableProps({})}>Reset</button>
        </div>
    )
}

export default Form;