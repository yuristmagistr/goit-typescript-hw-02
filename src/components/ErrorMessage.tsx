// const ErrorMessage = ({ message }) => {
//     const errorStyle = {
//         margin:"auto",
//     };
//     return ( 
//         <div className={errorStyle}>
//             <p>{ message}</p>
//     </div>
// )
// }
// export default ErrorMessage;



import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  const errorStyle: React.CSSProperties = {
    margin: "auto",
  };

  return (
    <div style={errorStyle}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
