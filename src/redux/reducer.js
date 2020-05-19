import { actionTypes } from './actions';

export const exampleInitialState = {
    count: 0,
    error: false,
    lastUpdate: 0,
    light: false,
    userData: null,
    // 测试数据
    loginInfo: { userId: '', userType: '', access_token: '', token_type: '' },
};

function reducer(state = exampleInitialState, action) {
    switch (action.type) {
        case actionTypes.FAILURE:
            return {
                ...state,
                ...{ error: action.error }
            };

        case actionTypes.INCREMENT:
            return {
                ...state,
                ...{ count: state.count + 1 }
            };

        case actionTypes.DECREMENT:
            return {
                ...state,
                ...{ count: state.count - 1 }
            };

        case actionTypes.RESET:
            return {
                ...state,
                ...{ count: exampleInitialState.count }
            };

        case actionTypes.LOAD_DATA_SUCCESS:
            return {
                ...state,
                ...{ userData: action.data }
            };

        case actionTypes.GET_LIST:
            let newState = JSON.parse(JSON.stringify(state)) // 深拷贝
            newState.loginInfo.userId = action.data.data.userId //复制新的测试数组进去
            return newState

        default:
            return state;
    }
}

export default reducer;