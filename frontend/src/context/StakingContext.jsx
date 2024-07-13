import { createContext,useState } from "react";

const StakingContext = createContext();

// eslint-disable-next-line react/prop-types
export const StakingProvider =({children})=>{
    const [isReload,setIsReload]=useState(false);

    return(
        <StakingContext.Provider value={{isReload,setIsReload}}>
            {children}
        </StakingContext.Provider>
    )
}
export default StakingContext;