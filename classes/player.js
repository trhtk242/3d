import {collisionY,collision, collisionXZ} from '../funcs.js'

export class Player{
    constructor(){
      this.box;
      this.outline;
      this.directions = {
        up:false,
        down:false,
        left:false,
        right:false,
        back:false,
        forward:false,
      }
      this.spirit = false;
      this.speed = 5;
      this.geometry;
      this.material;
      this.angle;
      this.width = characterSize;
      this.height = characterSize;
      this.length = characterSize;
      this.create();
    }
  
    create(){
      this. geometry = new THREE.BoxBufferGeometry( this.width, this.height, this.length);
      this. material = new THREE.MeshPhongMaterial({ color: 0x22dd88 });
      this.box = new THREE.Mesh( this.geometry, this.material );
      this.box.position.y = characterSize/2;
      
      rotationPoint.add( this.box );
      
      const outline_geo = new THREE.BoxGeometry( characterSize + outlineSize, characterSize + outlineSize, characterSize + outlineSize );
      const outline_mat = new THREE.MeshBasicMaterial({ color : 0x0000000, side: THREE.BackSide });
      this.outline = new THREE.Mesh( outline_geo, outline_mat );
      this.box.add( this.outline );
    }

    move(){
      const positionZ = this.box.position.z;
      const positionX = this.box.position.x;
      const positionY = this.box.position.y;
      if(this.directions.up){
        this.box.position.y+=this.speed;
      }
      if(this.directions.down ){
        this.box.position.y-=this.speed;
      }
      if(this.directions.right){
        this.box.position.x+=this.speed;
  
      }
      if(this.directions.left){
        this.box.position.x-=this.speed;
  
      }
      if(this.directions.forward){
        this.box.position.z+=this.speed;
  
      }
      if(this.directions.back){
        this.box.position.z-=this.speed;
      }
      if(this.spirit){
      if(this.box.position.y > characterSize/2){
        (gravity) ? this.box.position.y-=this.speed/2:this.box.position.y+=this.speed/2
      }
      cubes.forEach(cube => {
        if(collision(cube,cube.box.position,this,this.box.position)) {
          this.box.position.y = positionY;
          if(this.box.position.y<cube.box.position.y||this.box.position.y-characterSize<cube.box.position.y){
            this.box.position.z = positionZ;
            this.box.position.x = positionX;
          }
        }
      });
      }
    }
  }
  