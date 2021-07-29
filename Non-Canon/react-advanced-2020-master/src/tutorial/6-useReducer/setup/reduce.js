
export const reducer = (state,action) =>{
  if(action.type === 'ADD_ITEM'){
    const newPeople = [...state.people, action.payload];
    console.log(newPeople);
    return {
      ...state, 
      people: newPeople, 
      isModalOpen: true, 
      modalContent:'Item added'
    };
  }else if(action.type === 'NO_VALUE'){
    return {
      ...state,
      isModalOpen: true,
      modalContent:'A value is needed to proceed'
    }
  }else if(action.type === 'CLOSE_MODAL'){
    return{
      ...state,
      isModalOpen: false
    };
  }else if(action.type === 'REMOVE_ITEM'){
    const newPeople = state.people.filter((person) => person.id !== action.payload);
    return {...state,people: newPeople};
    
  
  }else{
  throw new Error ('No matching functionality');
  }
}

