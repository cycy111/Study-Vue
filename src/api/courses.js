export  function getCourses(){
    return new Promise(
        resolve => {
            setTimeout(() => {
                resolve([{name:'web全栈',price:2},{name:'web高级',price:3}]);
            }, 2000);
        }
    )
}