import { useContext } from "react";
// Context ke andar stored data ko access karna.

import { AuthContext } from "../auth.context";
import { login, register, logout, getMe } from "../services/auth.api";

export const useuth = () => {
    const context =  useContext(AuthContext)
    const { user, setUser, loading, setLoading}= context

    const handleLogin = async ({ email, password}) => {
         setLoading(true)
         const data = await login({ email,password })
         setUser(data.user)
         setLoading(false)
    }
}