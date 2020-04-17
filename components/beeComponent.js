class BeeComponent {
    constructor(beeRecibido, beesContainerRecibido, callback) {

        //Aquí se va añadiendo cada bee enviado desde beesComponents. 
        this.bee = beeRecibido;

        //Div que agrupa el div de info y el div de botones de cada Bee.
        this.DivAgrupaDivsBee = document.createElement('div');
        this.DivAgrupaDivsBee.id = 'DivAgrupaDivsBee';
        this.DivAgrupaDivsBee.classList.add('DivAgrupaDivsBee');

        
        /////////////////////////////////////////////////////////////////////
        //Div que almacena sólo la info del Bee.
        var DivInfoBee = document.createElement('div');
        DivInfoBee.id = 'DivInfoBee';//beeRecibido.name;
        DivInfoBee.classList.add('DivInfoBee');
        
        this.nameH3 = document.createElement('h3');
        this.nameH3.innerHTML = beeRecibido.name;
        this.nameH3.classList.add('beeContainerH3');
        
        this.usernameP = document.createElement('p');
        this.usernameP.innerHTML = beeRecibido.username;
        this.usernameP.classList.add('beeContainerP');
        
        this.emailP = document.createElement('p');
        this.emailP.innerHTML = beeRecibido.email;
        this.emailP.classList.add('beeContainerP');
        
        this.phoneP = document.createElement('p');
        this.phoneP.innerHTML = beeRecibido.phone;
        this.phoneP.classList.add('beeContainerP');
        
        this.cityP = document.createElement('p');
        this.cityP.innerHTML = beeRecibido.city;
        this.cityP.classList.add('beeContainerP');

        DivInfoBee.appendChild(this.nameH3);
        DivInfoBee.appendChild(this.usernameP);
        DivInfoBee.appendChild(this.emailP);
        DivInfoBee.appendChild(this.phoneP);
        DivInfoBee.appendChild(this.cityP);
        /////////////////////////////////////////////////////////////////////
        
        
        /////////////////////////////////////////////////////////////////////
        //Div que almacena sólo los botones del Bee.
        var DivBotonesBee = document.createElement('div');
        DivBotonesBee.id='Botones'+beeRecibido.name ;
        DivBotonesBee.classList.add('DivBotonesBee');

        var btnPost = document.createElement('button');
        btnPost.innerHTML='Post';
        btnPost.classList.add('beeContainerButton');

        var btnAlbum = document.createElement('button');
        btnAlbum.innerHTML='Album';
        btnAlbum.classList.add('beeContainerButton');

        var btnToDo = document.createElement('button');
        btnToDo.innerHTML='ToDo';
        btnToDo.classList.add('beeContainerButton');      


        DivBotonesBee.appendChild(btnPost);
        DivBotonesBee.appendChild(btnAlbum);
        DivBotonesBee.appendChild(btnToDo);



        /////////////////////////////////////////////////////////////////////
        //Agregamos al DivAgrupaDivsBee los div anteriores (Info y Botones)
        this.DivAgrupaDivsBee.appendChild(DivInfoBee);
        this.DivAgrupaDivsBee.appendChild(DivBotonesBee);

        //El valor de beesContainerRecibido sería divBees.
        beesContainerRecibido.appendChild(this.DivAgrupaDivsBee);
        

        this.callback = callback;////callback = inicializado en app.js y trae "beeDetailComponent.showBeeDetails(bee);"
        
        
        //this.DivAgrupaDivsBee.onclick = this.showUserDetails.bind(this);     
        btnPost.onclick = this.showUserDetails.bind(this);

    }

    showUserDetails(e) {
        //ESTA ES LA QUE ÚNICA QUE ESTABA   
        console.log('clic');
        console.log(this.callback);
        this.callback(this.bee);
        
/* console.log('gggg');

        this.posts = [];
        posts.push(new Post('title','body','userId'));

        var beeDetailComponent = new PostsComponent(posts,'ss');
        //beeDetailComponent.showBeeDetails(bee); */
    }

    
    


}