import { ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, CLEAR_ERRORS,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL } from "../constants/productConstants";


const productReducer = ( state = { product: [] }, action) => {
      switch (action.type) {
        case ALL_PRODUCT_REQUEST:
         return {
            loading: true,
            products: [],
         }; 

        case ALL_PRODUCT_SUCCESS:
         return {
            loading: false,
            products: action.payload.products,
         }; 

        case ALL_PRODUCT_FAIL:
         return {
            loading: false,
            error: action.payload,
         }; 

        case CLEAR_ERRORS:
         return {
            ...state,
            error: null,
         }; 
        
      
        default:
            return state;
      }
};

const productDetailsReducer = ( state = { product: {} }, action) => {
      switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
         return {
            loading: true,
            ...state,
         }; 

        case PRODUCT_DETAILS_SUCCESS:
         return {
            loading: false,
            product: action.payload,
         }; 

        case PRODUCT_DETAILS_FAIL:
         return {
            loading: false,
            error: action.payload,
         }; 

        case CLEAR_ERRORS:
         return {
            ...state,
            error: null,
         }; 
        
      
        default:
            return state;
      }
};

export {productReducer,productDetailsReducer} ;