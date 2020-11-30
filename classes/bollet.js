import { collision } from '../funcs.js';

export class Bollet{
    constructor(posX, posZ,pozY){
      this.box;
      this.timer = 100;
      this.id = bollets.length;
      this.geometry;
      this.material;
      this.spdX = Math.cos(player.angle/180*Math.PI)*8;
      this.spdZ = Math.sin(player.angle/180*Math.PI)*8;
      this.width = 10;
      this.height= 10;
      this.length= 10;
      this.create(posX, posZ,pozY);

    }
    delete(){
      rotationPoint.remove( this.box );
      delete bollets[this.id]
    }

    create( posX, posZ,pozY ) {
      this. geometry = new THREE.BoxBufferGeometry(this.width,this.height, this.length);
      this. material = new THREE.MeshPhongMaterial({ color: 0x0000000 });
      this.box = new THREE.Mesh( this.geometry, this.material );
      this.box.position.x = posX;
      this.box.position.z= posZ;
      this.box.position.y = pozY;
      rotationPoint.add( this.box );
      
      const outline_geo = new THREE.BoxGeometry( this.width + outlineSize, this.heigh + outlineSize, this.length + outlineSize );
      const outline_mat = new THREE.MeshBasicMaterial({ color : 0x0000000, side: THREE.BackSide });
      this.outline = new THREE.Mesh( outline_geo, outline_mat );
      this.box.add( this.outline );
  
    }
    replace(posX, posZ,pozY){
      this.box.position.x = posX;
      this.box.position.z= posZ;
      this.box.position.y = pozY;
    }
    update(){
      this.box.position.x -= this.spdX;
      this.box.position.z -= this.spdZ;
      this.timer-=1;
      if(this.timer<=0){
        this.delete();
      }
      cubes.forEach(cube => {
        if(collision(cube,cube.box.position,this,this.box.position)) {
          this.delete();
          cube.delete();
        }
      });
    }
    
  }
  