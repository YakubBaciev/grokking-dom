
function render(arr) {
    for (let i = 0; i < arr.length; i++){
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = arr[i];
    ul.append(li);
    document.body.append(ul)
    }
  }
  render(['html', 'css', 'js'])
//   

// }
// let arr = ['html', 'css', 'js']
// for(const item of arr){
//   const ul = document.createElement('ul')
//   const li = document.createElement('li')
//   li.textContent = item;
//   ul.append(li)
//   document.body.append(ul)
// }

