import {Floor} from './classes/floor.js'
import {Cube} from './classes/cube.js'
import {Player} from './classes/player.js'


class Wall{
  constructor(x,y,z,width,height,length){
    this.x = x;
    this.y = y;
    this.z = z;
    this.width = width;
    this.height = height;
    this.length = length;
    this.create();
  }
  create(){
    for (let i = 0; i < this.height; i++) {
      for(let j = 0; j < this.width; j++){
        for(let k = 0; k < this.length; k++){
          cubes.push(new Cube(characterSize*j+this.x,characterSize*i+characterSize/2+this.y,characterSize*k+this.z))
        }
      }
    }
  }
}


init();
animation(); 

function render() {
  renderer.render( scene, camera );
  
  if ( camera.position.y < 10 ) {
    camera.position.y = 10;
  }
}
function animation() {
  requestAnimationFrame(animation);
  camera.updateProjectionMatrix();
  player.move();
  bollets.forEach(bollet => {
    bollet.update();
  });
  cubes.forEach(cube => {
    cube.update();
  });
  render();
}



function init() {
  container = document.createElement( 'div' );
  document.body.appendChild( container );
  
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xccddff );
  scene.fog = new THREE.Fog( 0xccddff, 500, 2000 );
  
  let ambient = new THREE.AmbientLight( 0xffffff );
  scene.add( ambient );
  
  let hemisphereLight = new THREE.HemisphereLight( 0xdddddd, 0x000000, 0.5 );
  scene.add( hemisphereLight );
  
  rotationPoint = new THREE.Object3D();
  rotationPoint.position.set( 0, 0, 0 );
  scene.add( rotationPoint );
  
  const floor = new Floor();
  player = new Player();
  player.box.position.y+=100;

  new Wall(-50*5,0,-50*5,10,1,10);
  new Wall(-50*5,50*10,-50*5,11,1,11);
  new Wall(-50*5,0,-50*5,1,10,10)
  new Wall(50*5,0,-50*5,1,10,10)
  new Wall(-50*5,0,-50*5,10,10,1)
  new Wall(-50*5,0,50*5,11,10,1)



  scene.remove( floor );

  camera = new THREE.PerspectiveCamera(
    50, 
    window.innerWidth / window.innerHeight, 
    1, 
    20000 
  );
  camera.position.z = -300;
  camera.position.y = 200;
  player.box.add( camera );
  
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  let element = renderer.domElement;
  renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild( element );
  
  controls = new THREE.OrbitControls( camera, element );
  controls.enablePan = true;
  controls.enableZoom = true; 
  controls.maxDistance = 1000;
  controls.minDistance = 60; 
  controls.target.copy( new THREE.Vector3( 0, characterSize/2, 0 ) );
  
}
