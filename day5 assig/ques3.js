

async function fetchTodos(){
    const response=fetch('https://jsonplaceholder.typicode.com/todos')
    const data= await (await response).json();
    
    console.log(data);
}
fetchTodos();
