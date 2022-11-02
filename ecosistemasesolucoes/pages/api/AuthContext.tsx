import { createContext, useContext, ReactNode, useState } from "react";
import { useRouter } from 'next/router';

type authContextType = {
    user: boolean;
    login: (usuario: string, password: string) => boolean;
    logout: () => void;
};

const authContextDefaultValues: authContextType = {
    user: false,
    login: (usuario, password) => { return false},
    logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

type Props = {
    children: ReactNode;
};

export function AuthProvider({ children }: Props) {
    const [user, setUser] = useState<boolean>(false);

    const router = useRouter();

    const login = async (usuario: string, password: string) => {
        const apiUrlEndpoint = 'http://localhost:3000/api/auth/login';
        const postData = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                usuario: usuario,
                password: password
            })
        }

        const response = await fetch(apiUrlEndpoint, postData);

        const res = await response.json();

        if(res.results){
            router.push('/admin');
        }else{
            console.log('usuário não encontrado');
            return false;
        }
    };

    const logout = async () => {
        const apiUrlEndpoint = 'http://localhost:3000/api/auth/logout';
        const postData = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                sign: 'out'
            })
        }

        const response = await fetch(apiUrlEndpoint, postData);

        console.log(response);

        setUser(false);

        router.push('/login');
    };

    const value = {
        user,
        login,
        logout,
    };

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}