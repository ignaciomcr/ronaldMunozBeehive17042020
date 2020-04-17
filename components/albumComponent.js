class AlbumComponent {
    constructor(albumRecibido, albumsContainerRecibido, callback) {

        //Aquí se va añadiendo cada album enviado desde albumesComponents. 
        this.album = albumRecibido;

        //Div que agrupa el div de info y el div de botones de cada post.
        this.DivAgrupaDivsAlbum = document.createElement('div');
        this.DivAgrupaDivsAlbum.id = 'DivAgrupaDivsAlbum';
        this.DivAgrupaDivsAlbum.classList.add('DivAgrupaDivsAlbum');

        
        /////////////////////////////////////////////////////////////////////
        //Div que almacena sólo la info del post.
        var DivInfoAlbum = document.createElement('div');
        DivInfoAlbum.id = 'DivInfoAlbum';//beeRecibido.name;
        DivInfoAlbum.classList.add('DivInfoAlbum');
        
        this.titleP = document.createElement('p');
        this.titleP.innerHTML = 'TITLE ' + albumRecibido.title;
        this.titleP.classList.add('albumP');
        
        this.renglonP = document.createElement('br');

        DivInfoAlbum.appendChild(this.titleP);
        DivInfoAlbum.appendChild(this.renglonP);
        //-----------Aquí estaba el botón pero quedaba antes del DivNameBodyPost.
        
        /////////////////////////////////////////////////////////////////////
        
        
        /////////////////////////////////////////////////////////////////////
        //Este Div está almacenado dentro del DivInfoPost Y ALMACENA el Name y Body (que no sé de dónde salen). Este div .
        var DivImagen = document.createElement('div');
        DivImagen.id='DivImagen'+ albumRecibido.userId ;
        DivImagen.classList.add('DivImagen');

        this.namePost = document.createElement('p');
        this.namePost.innerHTML = 'USER ID ' + albumRecibido.userId;
        this.namePost.classList.add('beeContainerP');
        
        DivImagen.appendChild(this.namePost);

        

        /* var btnAlbum = document.createElement('button');
        btnAlbum.innerHTML='Album';
        btnAlbum.classList.add('beeContainerButton');

        var btnToDo = document.createElement('button');
        btnToDo.innerHTML='ToDo';
        btnToDo.classList.add('beeContainerButton');      */ 


        
        //DivBotonesPost.appendChild(btnAlbum);
        //DivBotonesPost.appendChild(btnToDo);


        DivInfoAlbum.appendChild(DivImagen);

        this.DivAgrupaDivsAlbum.appendChild(DivInfoAlbum);
        

        //El valor de beesContainerRecibido sería divBees.
        albumsContainerRecibido.appendChild(this.DivAgrupaDivsAlbum);
        

        this.callback = callback;
        
        
        //this.DivAgrupaDivsBee.onclick = this.showUserDetails.bind(this);     
        //btnPost.onclick = this.showUserDetails.bind(this);

    }

    showUserDetails(e) {
        //console.log( this);
        this.callback(this.album);
    }
}