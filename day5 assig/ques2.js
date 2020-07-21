class User {
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.coins=0;
        this.courses=[];
    }
    login(){
        console.log(`${this.name} has logged in`);
    }
    logout(){
        console.log(`${this.name} has logged out`);
    }
}

class Moderator extends User{
    addCoins(user,numOfCoins){
        user.coins+=numOfCoins;
        console.log(`Added ${numOfCoins} to ${user}: Total coins is ${user.coins}`);
    }
    removeCoins(user,numOfCoins){
        user.coins-=numOfCoins;
        console.log(`Removed ${numOfCoins} from ${user} : Coins remaining is ${user.coins}`);
    }
}

class Admin extends Moderator{
    addCourse(user,courseName){
        user.courses.push(courseName);
    }
    delCourse(user,courseName){
        user.courses=user.courses.filter(course=>course!=courseName);
    }
}
let user1=new User('UserOne',12,'user1@gmail.com');
console.log(user1);
let mod1=new Moderator('Mod1',24,'m@gmail.com');
console.log(mod1);
mod1.addCoins(user1,10);
mod1.removeCoins(user1,5);
let admin=new Admin('admin1',30,'a@gmail.com');
console.log(admin);
admin.addCourse(user1,'JS-ES');
console.log(user1);
admin.addCourse(user1,'Py-ES');
console.log(user1);
admin.delCourse(user1,'JS ES');
console.log(user1);