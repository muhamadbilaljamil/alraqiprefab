import { useContext } from 'react'
import { Context } from './Context_Provider'

export const useCtx = () => useContext(Context)