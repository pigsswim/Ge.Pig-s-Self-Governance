
let set = document.getElementById('set');
set.addEventListener('click',generateStory())

function generateStory() {
        let role = document.getElementById('name');
        let newRole = role.value;
        let text = document.getElementsByTagName('main')
        let moduleWrapper = document.createElement('div')
        moduleWrapper.setAttribute('class', 'module-wrapper')
        let unitWrapper = document.createElement('div')
        unitWrapper.setAttribute('class','unit-wrapper')
        let unit1 = document.createElement('div')
        unit1.setAttribute('class','unit')
        unit1.setAttribute('id','title')
        let p1 = document.createElement('p')
        p1.innerText = `How many hours does ${newRole} poop? `;
        let unit2 = document.createElement('div')
        unit2.setAttribute('class','unit')
        unit2.setAttribute('id','content')
        let p2 = document.createElement('p')
        unit1.appendChild(p1)
        unit2.appendChild(p2)
        unitWrapper.appendChild(unit1)
        unitWrapper.appendChild(unit2)
        moduleWrapper.appendChild(unitWrapper)
        text.innerHTML = moduleWrapper;
}
//view


//control
