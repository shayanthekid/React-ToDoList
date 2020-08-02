import React from 'react';
function Alert() {
    return (

            <div style={alert_style}>
            <h3>Danger!</h3>
            <p>Red often indicates a dangerous or negative situation.</p>
                </div>
               
    );
}

// const headerStyle = {
//     background: '#333',
//     color: '#fff',
//     textAlign: 'center',
//     padding: '10px'

// }
// const linkStyle = {
//     color: 'white'
// }

const alert_style ={
    color: 'red'
}

export default Alert;