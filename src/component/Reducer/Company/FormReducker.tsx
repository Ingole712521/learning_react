
interface FormState {
    name : string ;
    email : string ;
    password: string;
}

type Action = | {type : "Update_field" ; field : string ; value : string} | {type : "REST"}

export const FormReducker = (state : FormState , action : Action ): FormState  => {

    switch (action.type) {
        case "Update_field":
            return {
                ...state, 
                [action.field] : action.value,
            }
        case "REST": 
        return {
            name : "",
            email: "",
            password: "",
        }
            
            
    
        default:
            return state;
    }
}