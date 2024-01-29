// import React,{ createContext, useState,useEffect} from "react";
// import { useLocation } from "react-router-dom";
// export const ActiveNavBrContext = createContext({})



// export default function activeNavBarProvider({children}) {
//     const location = useLocation();
//     const [path, setPath] = useState('/');
//     useEffect(() => {
//       setPath(location.pathname);
//       console.log(location);
//   }
//   ,[path])
// const shared= {path, setPath}
//   return (
//     <ActiveNavBrContext.Provider value={shared}>
//         {children}
//     </ActiveNavBrContext.Provider>    
//   )
// }
