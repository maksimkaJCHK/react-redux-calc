import { TypedUseSelectorHook, useSelector} from 'react-redux';
import { TypeAppReducer } from '../store/reducers';

export const useTypeSelector: TypedUseSelectorHook<TypeAppReducer> = useSelector;