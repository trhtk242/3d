export class Floor{
    constructor(){
      this.create();
    }
  
    create(){
      const geometry = new THREE.PlaneBufferGeometry( 100000, 100000 );
      const material = new THREE.MeshToonMaterial( {color: 0x336633} );
      const plane = new THREE.Mesh( geometry, material );
      plane.rotation.x = -1 * Math.PI/2;
      plane.position.y = 0;
      scene.add( plane );
      objects.push( plane );
    }
  }
  