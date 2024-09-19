import {useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionsCreators from '../Store/ActionCreator/index';

const useActions = () => {
    const disptach = useDispatch();
    return bindActionCreators(ActionsCreators, disptach);
}

export default useActions;