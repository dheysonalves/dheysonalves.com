import { useReducer } from 'react';
import storage from 'local-storage-fallback';

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOOGLE_DARK_MODE':
            storage.setItem('isDark', !state.isDark);
            return {
                isDark: !state.isDark,
            };
        default: {
            return state;
        }
    }
};

const useGlobalState = () => {
    const [state, dispatch] = useReducer(reducer, {
        isDark: JSON.parse(storage.getItem('isDark')),
    });

    return { state, dispatch };
};

export default useGlobalState;
