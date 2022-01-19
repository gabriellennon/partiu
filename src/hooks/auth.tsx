import React, { createContext, ReactNode, useContext, useState } from 'react';
import * as AuthSession from 'expo-auth-session';

interface AuthProviderProps {
    children: ReactNode
}

interface User {
    id: string;
    name: string;
    email: string;
    //Não tem como puxar com o login da apple, entao vamos colocar outra foto quando for apple
    photo?: string;
}

interface IAuthContextData {
    user: User;
    signInWithGoogle(): Promise<void>;
    // signInWithApple(): Promise<void>
    // signOut(): Promise<void>;
    // userStorageLoading: boolean;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps){
    // const [user, setUser] = useState<User>({} as User);
    const user = {
        id: '123',
        name: 'gabriel',
        email: 'asdasd@gmail.com'
    }

    async function signInWithGoogle(){
        try {
            const CLIENT_ID = '1046876587992-navvlpvqae1e3qn7hkbbd3o2s2vmbl51.apps.googleusercontent.com';
            const REDIRECT_URI = 'https://auth.expo.io/@gabriellennon/partiu';
            const RESPONSE_TYPE = 'token';
            const SCOPE = encodeURI('profile email');

            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
            // console.log(authUrl)
            const response = await AuthSession.startAsync({ authUrl });
            console.log(response);

        } catch (error) {
            // throw new Error(error);
        }
    }
    
    return(
        <AuthContext.Provider value={{ 
            user, 
            signInWithGoogle
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

export {AuthProvider,  useAuth}