import React, {useState} from 'react';
import Logo from "../Header/Logo";

function Content(props) {
    const [calcResult, setCalcResult] = useState(0);
    const [minRange, setRangeMin] = useState(0);
    const [maxRange, setRangeMax] = useState(0);
    const [range, setRange] = useState([]);

    const ButtonClickCalc = (e) => {
        setCalcResult(+calcResult + +e) ;
    }

    function createArr(min,max) {
        let CalcArr = [];
        // alert(`min = ${min}, max= ${max}`);
        if (+min <= +max && +min > 0 && +max > 0 && +max <= 100 && +min <= 100) {
            CalcArr = [];
            // alert('if');
            for (let i = +min; i <= +max; i++) {
                // alert('for');
                CalcArr.push(i) ;
            }
        }
        return CalcArr ;
    }
    // const onChangeRangeMax = (e) => {
    //     setRange([minRange,e.target.value]);
    // }
    const onChangeRange = (e) => {
        if (e.target.name === "lower") {//alert(e.target.name);
            setRangeMin(e.target.value);
            setRange (createArr (e.target.value, maxRange));
        }
        if (e.target.name === 'upper') { //alert(e.target.name);
            setRangeMax(e.target.value);
            setRange (createArr (minRange, e.target.value));
        }
        // setRange (createArr (minRange, e.target.value));
    }

    return (
        <div className='row'>
            <div className='col-12' align='center'>
                <p>Enter your name:</p>
                <p><input type='text' id='name' color='red' placeholder='write here...'/></p>
                <p> <button className="btn btn-info" onClick={() => {
                        props.onButtonClick(document.getElementById('name').value)
                    }}>OK
                    </button>
                    &nbsp;&nbsp;
                    <button className="btn btn-info" onClick={() => {
                        document.getElementById('name').value = '';
                    }}>CANCEL
                    </button>
                </p>
            </div>

                    <div className='col-12'>
                        <h2 align='center'>Calculator</h2>
                    </div>
                    <div className='col-12'>
                        <p align='center'>(Values have to be between 1 and 100)</p>
                    </div>
                    <div className='col-6'>
                        <p align='right'><input type='text' size='4' name='lower' placeholder='From' onChange={onChangeRange}/>
                        </p>
                    </div>
                    <div className='col-6'>
                        <p align='left'><input type='text' size = '3' name='upper' placeholder='To' onChange={onChangeRange}/></p>
                    </div>
                    <div align='right' className='col-4'>
                        <p>{range.reverse().map(el => <button key={-el} onClick={() => {
                            ButtonClickCalc(-el)
                        }}>-{el}</button>)}</p>
                    </div>
                    <div align='center' className='col-4'>
                        <h1 id='calcResult'>{calcResult}</h1>
                        <p>
                            <button className="btn btn-success" onClick={() => {
                                document.getElementById('calcResult').textContent = '0';
                            }}>RESET
                            </button>
                        </p>
                    </div>
                    <div align='left' className='col-4'>
                        <p>{range.reverse().map(el => <button key={el} onClick={() => {
                            ButtonClickCalc(el)
                        }}>+{el}</button>)}</p>
                    </div>
        </div>
    )
}

export default Content;
