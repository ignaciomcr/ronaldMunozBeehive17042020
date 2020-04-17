function AlbumesComponent(albumes, callback) {
    //Se llama a toda la estructura.
    AppComponent.call(this);
     
    //Se añade el contenedorPricipal al documento actual.
    //this.contenedorPrincipal ES UN OBJETO DEFINIDO EL appComponent, 
    //cuya inicialización se da con AppComponent.call(this).
    document.body.appendChild(this.contenedorPrincipal);

    var divAlbumes = document.getElementById('divAlbumes');
        
   
    
    for (let i = 0; i < albumes.length; i++) {
        const album = albumes[i];
        var albumComponent = new AlbumComponent(album, divAlbumes, callback);
    }

}


AlbumesComponent.prototype = Object.create(AppComponent.prototype);
AlbumesComponent.prototype.constructor = AlbumesComponent;


