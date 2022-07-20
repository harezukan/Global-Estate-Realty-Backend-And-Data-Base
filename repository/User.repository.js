
const connection=require('../datebase/connection');

const{USER_ROLE}=require('../constant')

const register=(user)=>{
    return new Promise(async(resolve,reject)=>{
           try {
           const id=await saveUser(user);
           await saveProfil(user,id);
           resolve('Profil successfully')
          }catch(error){
      reject(error);
    }
    });
}



const saveUser=(user)=>{
    const{username,email,password}=user;
    const queryUser=`INSERT INTO user (username,email,password,role)
    VALUES (?,?,?,?)`;
    return new Promise((resolve,reject)=>{
    connection.query(queryUser,[username,email,password,USER_ROLE],(err,result)=>{
        if(err) return reject(err);
        resolve(result.insertId);
    });
});
}

const saveProfil=(user,id)=>{
    const{firstName,lastName,address}=user;
    const queryUser=`INSERT INTO profile (id,firstName,lastName,address)
    VALUES (?,?,?,?)`;
    return new Promise((resolve,reject)=>{
    connection.query(queryUser,[id,firstName,lastName,address],(err,result)=>{
        if(err) return reject(err);
        resolve(result);
    });
});
}

const login=(user)=>{
    return new Promise((resolve,reject)=>{
        const{email,password}=user;
        const queryUser=`SELECT user.username,user.id,user.email,user.role,
        profile.firstName,profile.lastName,profile.address FROM user,profile
         where email=? and password=? and user.id=profile.id`;
        connection.query(queryUser,[email,password],(err,result)=>{
            if(err) return reject(err);
            resolve(result[0]||null);
        });
    });
}

const getUsersAdminPanel=()=>{
    return new Promise((resolve,reject)=>{
        const queryUser=`SELECT user.username,user.id,user.email,user.role,
        profile.firstName,profile.lastName,profile.address FROM user,profile
         where user.id=profile.id`;
        connection.query(queryUser,(err,result)=>{
            if(err) return reject(err);
            resolve(result);
        });
    });
}

const userProfilePage=(id)=>{
    return new Promise((resolve,reject)=>{
        const query=`SELECT user.username,user.id,user.email,user.role,
        profile.firstName,profile.lastName,profile.address FROM user,profile
         where user.id=profile.id and user.id=?`;
        connection.query(query,[id],(err,result)=>{
            if(err) return reject(err);
            resolve(result[0]);
        });
    });
}

const updateUserProfile=(user)=>{
    return new Promise(async(resolve,reject)=>{
        try {
        await updateUser(user);
        await updateProfile(user);
        resolve('Profil successfully change')
       }catch(error){
   reject(error);
 }
 });
}

const updateUser=(user)=>{
    const{id,email}=user;
    const queryUser=`UPDATE USER SET email=? where id=?`;
    return new Promise((resolve,reject)=>{
    connection.query(queryUser,[email,id],(err,result)=>{
        if(err) return reject(err);
        resolve(result);
    });
});
}

const updateProfile=(user)=>{
    const{id,firstName,lastName,address}=user;
    const query=`UPDATE PROFILE SET firstName=?,lastName=?,address=? where id=?`;
    return new Promise((resolve,reject)=>{
    connection.query(query,[firstName,lastName,address,id],(err,result)=>{
        if(err) return reject(err);
        resolve(result);
    });
});
}



module.exports={
    register,
    login,
    getUsersAdminPanel,
    userProfilePage,
    updateUserProfile
}