export class Tree{
    constructor(posX, posZ){
        this.id = trees.length;
        this.trunk;
        this.treeTop;
        this.geometry;
        this.material;
        this.geometryTop;
        this.materialTop;
        this.width = characterSize/3.5;
        this.height = characterSize/2.5;
        this.length = characterSize * 1.3;
        this.radiusTreeTop = characterSize;
        this.create(posX, posZ);
    }
    delete(){
        rotationPoint.remove( this.box );
        delete trees[this.id]
    }
  
    create( posX, posZ ) {
      const randomScale = ( Math.random() * 3 ) + 0.8;
      const randomRotateY = Math.PI/( Math.floor(( Math.random() * 32) + 1 ));
      
      this.geometry = new THREE.CylinderGeometry( this.width , this.height, this.length, 8 );
      this.material = new THREE.MeshToonMaterial( {color: 0x664422} );
      this.trunk = new THREE.Mesh( this.geometry, this.material );
      this.trunk.position.set(posX, ((characterSize * 1.3 * randomScale)/2), posZ);
      this.trunk.scale.x = this.trunk.scale.y = this.trunk.scale.z = randomScale;
      scene.add( this.trunk );
    
      let outline_geo = new THREE.CylinderGeometry( characterSize/3.5 + outlineSize, characterSize/2.5 + outlineSize, characterSize * 1.3 + outlineSize, 8 );
      let outline_mat = new THREE.MeshBasicMaterial({
        color : 0x0000000,
        side: THREE.BackSide
      });
      let outlineTrunk = new THREE.Mesh( outline_geo, outline_mat );
      this.trunk.add( outlineTrunk );
      
      this.geometryTop = new THREE.DodecahedronGeometry( this.radiusTreeTop );
      this.materialTop = new THREE.MeshToonMaterial({ color: 0x44aa44 });
      this.treeTop = new THREE.Mesh( this.geometryTop, this.materialTop );
      this.treeTop.position.set( posX, ((characterSize * 1.3 * randomScale)/2) + characterSize * randomScale, posZ );
      this.treeTop.scale.x = this.treeTop.scale.y = this.treeTop.scale.z = randomScale;
      this.treeTop.rotation.y = randomRotateY;
      scene.add( this.treeTop );
      
      outline_geo = new THREE.DodecahedronGeometry(characterSize + outlineSize);
      outline_mat = new THREE.MeshBasicMaterial({
        color : 0x0000000, 
        side: THREE.BackSide
      });
      let outlineTreeTop = new THREE.Mesh(outline_geo, outline_mat);
      this.treeTop.add( outlineTreeTop );
    }
  }
  