interface QuestionsData {
    id: number;
    title: string;
    image_uri: string;
}

interface QuestionsState {
    questionsList: QuestionsData[];
}

const initialState: QuestionsState = {
    questionsList: [],
};

export const questionsReducer = (state = initialState, action: {type: string; payload: []}) => {
    switch (action.type) {
        case 'SET_QUESTIONS':
            return {
                ...state,
                questionsList: action.payload,
            };
        default:
            return state;
    }
};
