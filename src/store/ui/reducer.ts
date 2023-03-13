const initialState = {
    switchNavigate: 'onboarding',
};

export const uiReducer = (state = initialState, action: {type: string; payload: string}) => {
    switch (action.type) {
        case 'SWITCH_NAVIGATE':
            return {
                switchNavigate: action.payload,
            };
        default:
            return state;
    }
};
