// import React from 'react'
// import Link from '../link';

// type Props = {
//     selectedPage: string;
//     setSelectedPage: (value: string) => void; 
//     }
// const arrayNavbar : string[] = ['Home', 'Benefits', 'Our Classes', 'Contact Us'];

// const Nav = ({selectedPage, setSelectedPage}: Props) => {
//   const flexBetween = "flex justify-between items-center";

//   return (
//     <nav className={`${flexBetween} w-full`}>
//         <ul className={`${flexBetween} gap-8 text-sm`}>
//             {
//                 arrayNavbar.map((item, i)=>(
//                     <Link key={i} page={item} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
//                 ))
//             }

//         </ul>

//         <div className={`${flexBetween} gap-8`}>
//             <p>Sign In</p>
//             <button>Become a Member</button>
//         </div>
//     </nav>
//   )
// }

// export default Nav