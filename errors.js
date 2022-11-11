
let a =10;
let b=0; 
let result=0; 
try{
   

if (b==0)
throw new Error ("Нельзя делить на ноль");
let result = a/b;
console.log(result);
}
catch(error){
    console.log("Ваш ввод данных некорректен.Подробности:"+error.stack );
}
finally{
     console.log(result);
}
console.log('test'); 
try{
let user = undefined;
alert(`Привет, ${user.name}`);}
catch(error1)
{
    alert('Имя пользователя не заполнено');
}
try{
    let json ='[ыыы]';
    console.log(JSON.parse(json));
}
    catch(error2)
    {
        console.log('Данные некорректны');
    }