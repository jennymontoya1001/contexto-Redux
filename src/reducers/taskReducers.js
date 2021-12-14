import {types} from '../types/types';

const initialState = {
    tarea: []
}

export const taskReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.task:
            return{
            tarea: action.payload
            }

            default:
                return state;
    }
}