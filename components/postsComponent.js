function PostsComponent(posts, callback) {
    //Se llama a toda la estructura.
    AppComponent.call(this);
     
    //Se añade el contenedorPricipal al documento actual.
    //this.contenedorPrincipal ES UN OBJETO DEFINIDO EL appComponent, 
    //cuya inicialización se da con AppComponent.call(this).
    document.body.appendChild(this.contenedorPrincipal);

    var divPosts = document.getElementById('divPosts');
        
   
    
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        var postComponent = new PostComponent(post, divPosts, callback);
    } 

}

PostsComponent.prototype = Object.create(AppComponent.prototype);
PostsComponent.prototype.constructor = PostsComponent;



