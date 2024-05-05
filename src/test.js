//todo:[]
function reducer(state,action){
    if(useActionData.type == "add"){
      return  {...state,action,payload}//Spread operrator it wont modified object it creates duplicate the object.
    }

}


//Action is nothing but passing input to dispatch
Dispatch({type:"add",payload:""})
