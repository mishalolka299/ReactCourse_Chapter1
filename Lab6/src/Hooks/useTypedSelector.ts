import { useSelector } from 'react-redux'
import type { RootState } from './../Store/Store'


export const useTypedSelector = useSelector.withTypes<RootState>()