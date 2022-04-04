function getAdmins(map){
    let admins = []

    for([key,value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Rafael', 'Admin');
usuarios.set('Ghessica', 'Admin');
usuarios.set('Maria', 'Admin');
usuarios.set('Matheus', 'Usuario');

console.log(getAdmins(usuarios));