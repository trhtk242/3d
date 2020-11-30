import {Bollet} from './classes/bollet.js'

let lastPos = {
  x : innerHeight/2,
  y : innerWidth/2
};

window.onresize = function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
};
  
  document.onkeydown = e => {
    switch(e.keyCode){
      case 85:
        player.directions.up = true;
        break;
      case 74:
        player.directions.down = true;
        break;
      case 68:
        player.directions.left = true;
        break;
      case 65:
        player.directions.right = true;
        break;
      case 87:
        player.directions.forward = true;
        break;
      case 83:
        player.directions.back = true;
        break;
    case 72:
        bollets.push(new Bollet(player.box.position.x,player.box.position.z,player.box.position.y))
        break;
  
    }
  }
  document.onkeyup = e => {
    switch(e.keyCode){
      case 85:
        player.directions.up = false;
        break;
      case 74:
        player.directions.down = false;
        break;
      case 68:
        player.directions.left = false;
        break;
      case 65:
        player.directions.right = false;
        break;
        case 87:
          player.directions.forward = false;
          break;
        case 83:
          player.directions.back = false;
          break;
        case 81:
          gravity = !gravity;
          break;
    }
  }
  
document.onmousemove	 = (event) => {
    const delta = {};
    const mouse = {
        x : event.clientX,
        y : event.clientY
    };

    /*(mouse.x-innerWidth/2) - 0//player.box.position.x+player.width/2
    (mouse.y-innerHeight/2) - 0//player.box.position.z+player.length/2*/
    
    player.angle = (Math.atan2((mouse.y-innerHeight/2), (mouse.x-innerWidth/2))/ Math.PI * 180);
    
    /*if(mouse.x > lastPos.x){
      player.box.rotation.y +=.02;
    }else if(mouse.x < lastPos.x){
      player.box.rotation.y -=.02;
    }

    player.box.rotation.y %= 3-(0.2**-14);

    lastPos = {
      x : event.clientX,
      y : event.clientY
  };*/

}