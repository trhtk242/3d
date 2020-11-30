export function collision(obj1,obj1Box,obj2,obj2Box){
    if (obj1Box.z <=  obj2Box.z + obj2.length+1 &&
        obj1Box.z + obj1.length >= obj2Box.z+1 &&
        obj1Box.x <=  obj2Box.x + obj2.width + ((obj2.width%50)*2)+1&&
        obj1Box.x + obj1.width >= obj2Box.x+1&&
        obj1Box.y <= obj2.height + obj2Box.y +1&&
        obj1Box.y + obj1.height>= obj2Box.y +1)
        return true;
    else
        return false;  
}
export function collisionY(obj1,obj1Box,obj2,obj2Box){
    if (obj1Box.y <= obj2.height+10 + obj2Box.y &&
        obj1Box.y + obj1.height>= obj2Box.y )
        return true;
    else
        return false;  
}
export function collisionXZ(obj1,obj1Box,obj2,obj2Box){
    if (obj1Box.z <=  obj2Box.z + obj2.length &&
        obj1Box.z + obj1.length >= obj2Box.z &&
        obj1Box.x <=  obj2Box.x + obj2.width + ((obj2.width%50)*2)&&
        obj1Box.x + obj1.width >= obj2Box.x)
        return true;
    else
        return false;  
}
