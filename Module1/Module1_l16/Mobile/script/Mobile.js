class Mobile{
    constructor(name) {
        this.name=name;
        this.battery = 0;
        this.message = "";
        this.recivedmessage=[];
        this.sendmessage=[];
        this.memorymessage = 0;
        this.status = false;
    }
    checkStatus() {
        return this.status;
    }
    turnOn() {
        if(this.status == true){
            console.log("you are turning on the machine!! ");
            return;
        }
        else
            return  this.status=true;
    }
    turnOff() {
        if(this.status==false){
            console.log("you are turning off the machine!! ");
            return;
        }
        else return  this.status=false;
    }
    chargeBattery() {
        this.battery+=1;
    }
    subtractBattery() {
        if(this.battery==0){
            console.log("Out of battery");
            return;
        }
        else{
            this.battery-=1;
        }
    }
    checkMemory() {
        if(this.memorymessage >=5){
            console.log("Out of memory!!"); return;
        }
        else{
            return this.memorymessage +=1
        }
    }
    writeMessage(str) {
        if(this.checkStatus()==false){
            console.log("You need turn On your phone!! ");
        }
        else {
            this.message=str;
            this.checkMemory()
            this.recivedmessage.push(str);
            this.subtractBattery();
        }
         
    }
    recivedMessage(str) {
        if(this.checkStatus()==true) {
            this.subtractBattery();
            this.sendmessage.push(str);
        }
        else return;
    }
    sendMessage(str,name) {
        if(this.checkStatus()==true) {
            this.subtractBattery();
            this.sendmessage.push(str);
            return name.recivedmessage.push(str);
        }
        else {
            console.log("You need turn On your phone!! ");
            return;
        }
    }
    showMessageRecived() {
        if(this.checkStatus() == true){
            this.subtractBatery();
            let message = "";
            for(let i of this.recivedmessage){
                message += 'Message ['+i+']';
            }
            return message;
        }
        else{
            console.log("You need turn On your phone!! ");
            return;
        }
    }
    showMessageSend() {
        if(this.checkStatus() == true){
            this.subtractBatery();
            let message = "";
            for(let i of this.recivedmessage){
                message += this.message[i];
            }
            return message;

        }
        else{
            console.log("You need turn On your phone!! ");
            return;
        }
        
    }
}
let mobile1 = new Mobile("Nokia")
let mobile2 = new Mobile("Iphone")
mobile1.turnOn();
mobile1.chargeBattery();
mobile1.chargeBattery();
mobile1.chargeBattery();
mobile1.chargeBattery();
mobile1.writeMessage("hello" +" "+ mobile2.name);
mobile1.writeMessage("hi" +" "+ mobile2.name);
mobile1.writeMessage("vip" +" "+ mobile2.name);
mobile1.sendMessage(mobile1.recivedmessage[0],mobile2)
mobile2.turnOn();
mobile2.chargeBattery();


console.log(mobile1);
console.log(mobile2);