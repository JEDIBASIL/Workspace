import React, { createContext, useState } from "react";

const initialValue ={
    username:""
}

type UserAuthType = {
    userDetails:typeof initialValue,
    setUserDetails:React.Dispatch<React.SetStateAction<typeof initialValue>>
}


const UserAuth = createContext<UserAuthType>({} as UserAuthType);

export const UserAuthProvider= ({children}:any) => {
    const [userDetails, setUserDetails] = useState(initialValue)
    return (
        <UserAuth.Provider value={{userDetails, setUserDetails}}>
            {children}
        </UserAuth.Provider>
    )
};