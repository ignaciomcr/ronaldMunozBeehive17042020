function TodosComponent(todos, callback) {
    //Se llama a toda la estructura.
    AppComponent.call(this);
     
    //Se añade el contenedorPricipal al documento actual.
    //this.contenedorPrincipal ES UN OBJETO DEFINIDO EL appComponent, 
    //cuya inicialización se da con AppComponent.call(this).
    document.body.appendChild(this.contenedorPrincipal);
   
     
    var divTodos = document.getElementById('divTodos');
  
   
    
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        var todoComponent = new TodoComponent(todo, divTodos, callback);
    }

}


TodosComponent.prototype = Object.create(AppComponent.prototype);
TodosComponent.prototype.constructor = TodosComponent;