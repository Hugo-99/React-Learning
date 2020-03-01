import React from 'react';

function FunctionClick(props) {

        function clickHandler(){
            console.log('Button clicked')
        }
    return (
        <div>
            {/* clickHandler should not be clickHandler()
             it should be a function not a function clickHandler,
             otherwise it will keep calling it forever */}
            <button onClick={clickHandler}>Click</button>
        </div>
    );
}

export default FunctionClick