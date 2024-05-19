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
import { ThreeCircles } from 'react-loader-spinner';
import style from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={style.loaderStyle}>
      <ThreeCircles
  visible={true}
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  );
};

export default Loader;
