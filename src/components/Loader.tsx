// import { RotatingLines } from 'react-loader-spinner'
// import style from './Loader.module.css'


// const Loader = () => {
 
//       return (
//         <div className={style.loaderStyle}>
//             <RotatingLines
//                 visible={true}
//                 height={50}
//                 width={50}
//                 color="gray"
//                 strokeWidth={5}
//                 animationDuration={0.75}
//                 ariaLabel="rotating-lines-loading"
//             />
//         </div>
//     )
// }
// export default Loader;





import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import style from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={style.loaderStyle}>
      <RotatingLines
        visible={true}
        height={50}
        width={50}
        color="gray"
        strokeWidth={5}
        animationDuration={0.75}
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;
