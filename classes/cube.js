import {collision} from '../funcs.js'

export class Cube{
    constructor(x,y,z){
      this.box;
      this.width = characterSize;
      this.height = characterSize;
      this.length = characterSize;
      this.id = cubes.length;
      this.speed = 5;
      this.create(x,y,z);
    }
    delete(){
      rotationPoint.remove( this.box );
      delete cubes[this.id]
    }
  
    create(x,y=characterSize/2,z){
      this. geometry = new THREE.BoxBufferGeometry( this.width, this.height, this.length);
      this. material = new THREE.MeshPhongMaterial({ color: 'orange' });
      this.box = new THREE.Mesh( this.geometry, this.material );
      this.box.position.y = y;
      this.box.position.x = x;
      this.box.position.z =z;
      rotationPoint.add( this.box );
      
      const outline_geo = new THREE.BoxGeometry( characterSize + outlineSize, characterSize + outlineSize, characterSize + outlineSize );
      const outline_mat = new THREE.MeshBasicMaterial({ color : 0x0000000, side: THREE.BackSide });
      this.outline = new THREE.Mesh( outline_geo, outline_mat );
      this.box.add( this.outline );
    }
    update(){
      const positionZ = this.box.position.z;
      const positionX = this.box.position.x;
      const positionY = this.box.position.y;
        if(!gravity){
            this.box.position.y+=this.speed/4;
        }
        cubes.forEach(cube => {
          if(collision(cube,cube.box.position,this,this.box.position)) {
            this.box.position.y = positionY;
            if(player.box.position.y<cube.box.position.y||player.box.position.y-characterSize<cube.box.position.y){
              this.box.position.z = positionZ;
              this.box.position.x = positionX;
            }
          }
        });
      }
    
  }
  