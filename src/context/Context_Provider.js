// ** React Imports
import {createContext, useEffect, useState} from 'react'


// ** Defaults
const defaultProvider = {
    user: null,
    loading: true,
    setUser: () => null,
    setLoading: () => Boolean,
    isInitialized: false,
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    setIsInitialized: () => Boolean,
    register: () => Promise.resolve()
}
const AuthContext = createContext(defaultProvider)

const ContextProvider = ({children}) => {
    // ** States
    const [user, setUser] = useState(defaultProvider.user)
    const [loading, setLoading] = useState(defaultProvider.loading)
    const [isInitialized, setIsInitialized] = useState(defaultProvider.isInitialized)

    useEffect(() => {
        const initAuth = () => {
            setIsInitialized(true)
            const storedToken = localStorage.getItem("")
            if (storedToken) {
                setLoading(true)
                const userData = localStorage.getItem('userData')
                if (userData) {
                    setLoading(false)
                    setUser(JSON.parse(userData))
                } else {
                    console.log('Remove Stroage Data')
                    localStorage.removeItem('userData')
                    localStorage.removeItem('refreshToken')
                    localStorage.removeItem('accessToken')
                    setUser(null)
                    setLoading(false)
                }
            } else {
                setLoading(false)
            }
        }
        initAuth()
    }, [])

    const handleLogin = async () => {}

    const handleLogout = async () => {}

    const handleRegister = async () => {}

    const values = {
        user,
        loading,
        setUser,
        setLoading,
        isInitialized,
        setIsInitialized,
        login: handleLogin,
        logout: handleLogout,
        register: handleRegister
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export default ContextProvider;


