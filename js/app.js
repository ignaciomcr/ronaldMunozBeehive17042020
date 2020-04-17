"use strict"
window.addEventListener('load', init, false);

function init() {
	this.bees = [];
	this.posts = [];
	this.albums = [];
	this.todos = [];

	
	var url = 'https://beehive-270a2.firebaseio.com/data/users.json';
	//var url = 'https://beehive-270a2.firebaseio.com/data/posts.json';
	//var url = 'https://beehive-270a2.firebaseio.com/data/albums.json';
	//var url = 'https://beehive-270a2.firebaseio.com/data/todos.json';

	var request = new XMLHttpRequest();
	request.open('GET', url);
	request.send();
	request.onreadystatechange = processRequest;

	 function processRequest(e) {
		var request = e.target;

		if (request.readyState === 4) {
			switch (request.status) {
				case 200:
					console.log('OK');
					processResponse(request.responseText);
					break;
				case 404:
					console.log('Error');
					break;
			}
		}
	}
	
	//-------------------------------------------BEES -------------------------------------
	function processResponse(text){

		var data = JSON.parse(text);
		console.log(data);

		
		for (var key in data) {
			if (data.hasOwnProperty(key)) {
				//decía post
				var bee = data[key];
				bees.push(new Bee(bee.id,bee.name, bee.username, bee.email, bee.phone ,bee.address.city));
			}
		}

		//console.log('En app.js es donde se envía el callback = obj BeeDetailComponent con sus funciones');
		
		//------------------------------------------Este parámetro lleva BeeDetailComponent que a su vez
		//------------------------------------------llama a la función showBeeDetails propia de BeeDetail...
		var beesComponent = new BeesComponent(bees, showBeeDetails);
		
		//////var beeDetailComponent = new BeeDetailComponent(onBack);
		var beeDetailComponent = new Prueba(onBack);
		
	

		//Esta función tiene validez en el evento onClick del botón Post.
		function showBeeDetails(bee) {
			//---------------------Esta línea oculta todo el esquema.
			//beesComponent.hide();
			
			beeDetailComponent.showBeeDetailsPOST(bee);
		}

		function onBack() {
			
			beesComponent.show();
			
			
			beeDetailComponent.hide();
		}

		
	} 
	 

	//-------------------------------------------POSTS -------------------------------------
	/* function processResponse(text){

		var data = JSON.parse(text);
		console.log(data);

		

		for (var key in data) {
			if (data.hasOwnProperty(key)) {
				var post = data[key];
				//if (post.userId === 10){
					posts.push(new Post(post.title,post.body, post.userId));
				//}
				
			}
		}

		//console.log('En app.js es donde se envía el callback = obj BeeDetailComponent con sus funciones');
		var postsComponent = new PostsComponent(posts, showBeeDetails);
	    var beeDetailComponent = new BeeDetailComponent(onBack);
	

		//UIMANAGER
		function showBeeDetails(post) {
			//---------------------Esta línea oculta todo el esquema.
			//beesComponent.hide();
			beeDetailComponent.showBeeDetails(post);
		}

		function onBack() {
			beesComponent.show();
			beeDetailComponent.hide();
		}

		
	} */



    //-------------------------------------------ALBUM -------------------------------------
	/* function processResponse(text){

		var data = JSON.parse(text);
		console.log(data);

		

		for (var key in data) {
			if (data.hasOwnProperty(key)) {
				var album = data[key];
				//if (post.userId === 10){
					albums.push(new Album(album.id,album.title,album.userId));
				//}
				
			}
		}

		//console.log('En app.js es donde se envía el callback = obj BeeDetailComponent con sus funciones');
		var albumesComponent = new AlbumesComponent(albums, showBeeDetails);
	    var beeDetailComponent = new BeeDetailComponent(onBack);
	

		//UIMANAGER
		function showBeeDetails(album) {
			//---------------------Esta línea oculta todo el esquema.
			//beesComponent.hide();
			beeDetailComponent.showBeeDetails(album);
		}

		function onBack() {
			beesComponent.show();
			beeDetailComponent.hide();
		}

		
	} */


	//-------------------------------------------TODO -------------------------------------
	 /* function processResponse(text){

		var data = JSON.parse(text);
		console.log(data);

		

		for (var key in data) {
			if (data.hasOwnProperty(key)) {
				var todo = data[key];
				//if (post.userId === 10){
					todos.push(new Todo(todo.id,todo.completed,todo.title,todo.userId));
				//}
				
			}
		}

		//console.log('En app.js es donde se envía el callback = obj BeeDetailComponent con sus funciones');
		var todosComponent = new TodosComponent(todos, showBeeDetails);
	    var beeDetailComponent = new BeeDetailComponent(onBack);
	

		//UIMANAGER
		function showBeeDetails(todo) {
			//---------------------Esta línea oculta todo el esquema.
			//beesComponent.hide();
			beeDetailComponent.showBeeDetails(todo);
		}

		function onBack() {
			beesComponent.show();
			beeDetailComponent.hide();
		}

		
	} 
 */	



}