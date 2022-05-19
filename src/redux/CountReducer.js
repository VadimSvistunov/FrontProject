import { DECREASE, INCREASE } from './types';

export const initialState = {count:0}

export default function(state = initialState, action) {
    
    switch(action.type) {
        case INCREASE : 
        {
            return {...state,count:state.count + 1}
        }

        case DECREASE : 
        {
            return {...state,count:state.count - 1}
        }

        default: 
        return state;
    }
}