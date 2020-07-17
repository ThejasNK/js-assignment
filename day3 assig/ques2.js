let os = prompt("Enter OS name and version seperated by a space","OS 0.0.0");
os=os.split(' ');
console.log(`The OS name is ${os[0]} and version is ${os[1]}`);