let box = document.querySelector('.box')

let newUserBtn = document.querySelector('.newUserBtn')
let openModal = document.querySelector('.openModal')
let nameInp = document.querySelector('.nameInp')
let emailInp = document.querySelector('.emailInp')
let addBtn = document.querySelector('.addBtn')
let close = document.querySelector('.close')

let editModal = document.querySelector('.editModal')
let nameEdInp = document.querySelector('.nameEdInp')
let emailInpEd = document.querySelector('.emailInpEd')
let editBtn = document.querySelector('.editBtn')

let info = document.querySelector('.info')
let iddInp = document.querySelector('.iddInp')
let nameI = document.querySelector('.nameI')
let emaiInp = document.querySelector('.emaiInp')
let exit = document.querySelector('.exit')

let data = [
  {
    id: 1,
    name: "Shavkat",
    email: "abdusattorov@gmail.com",
    complited: false,
  },
  {
    id: 2,
    name: "Umed",
    email: "Abdunazarzoda@gmail.com",
    complited: false,
  },
  {
    id: 3,
    name: "Alisher",
    email: "Murodov@gmail.com",
    complited: false,
  },
];

// delet 
function deleteUser(id) {
    data = data.filter(e => {
        return e.id != id
    })
    get()
}

// add
newUserBtn.onclick = () => {
    openModal.showModal()
}

function addUser() {
    let newUser = {
        id: new Date().getTime(),
        name: nameInp.value,
        email: emailInp.value,
        complited: false
    }
    data.push(newUser)
    get()
    nameInp.value = ''
    emailInp.value = ''
    openModal.close()
}
addBtn.onclick = addUser
close.onclick = () => {
    openModal.close()
}

// edit 
let idx = null
function editOpen(id) {
    idx = id
    editModal.showModal()
    let user = data.find(e => e.id == id)
    nameEdInp.value = user.name
    emailInpEd.value = user.email
}

editBtn.onclick = () => {
    data = data.map(e => {
        if (e.id == idx) {
            e.name = nameEdInp.value
            e.email = emailInpEd.value
        }
        return e
    })
    
    get()
    editModal.close()
}

// check 
function completedUser(id) {
    data = data.map(e => {
        if (e.id == id) {
            e.complited = !e.complited
        }
        return e
    })
    get()
}

//show
function showInfoUser(id) {
    info.showModal()
    data = data.find(e => e.id == id)
    iddInp.value = data.id
    nameI.value = data.name
    emaiInp.value = data.email
}
exit.onclick = () => {
    info.close()
}

function get() {
    box.innerHTML = ''
    data.forEach(e => {
        let bodi = document.createElement('tr')
        let idUser = document.createElement('td')
        idUser.innerHTML = e.id
        let nameUser = document.createElement('td')
        nameUser.innerHTML = e.name
        if (e.complited == true) {
            nameUser.classList.toggle('chaked')
        }
        let emailUser = document.createElement('td')
        emailUser.innerHTML = e.email
        let comp = document.createElement('td')
        let compBtn = document.createElement('button')

        if (e.complited == true) {
            compBtn.classList.toggle('compBtn')
        } else {
            compBtn.classList.toggle('compBtn1')
        }
        compBtn.innerHTML = e.complited
        let actions = document.createElement('td')
        // showInfo
        let show = document.createElement('button')
        show.classList.add('show')
        show.innerHTML = 'Show'
        show.onclick = () => {
            showInfoUser(e.id)
        }
        // edit
        let edit = document.createElement('button')
        edit.classList.add('edit')
        edit.innerHTML = 'Edit'
        edit.onclick = () => {
            editOpen(e.id)
        }
        // delete 
        let delet = document.createElement('button')
        delet.classList.add('delet')
        delet.onclick = () => {
            deleteUser(e.id)
            console.log('hi');
        }
        delet.innerHTML = 'Delete'
        // checkbox 
        let check = document.createElement('input')
        check.type = 'checkbox'
        check.checked = e.complited
        check.onclick = () => {
            completedUser(e.id)
        }

        box.appendChild(bodi)
        bodi.appendChild(idUser)
        bodi.appendChild(nameUser)
        bodi.appendChild(emailUser)
        bodi.appendChild(comp)
        comp.appendChild(compBtn)
        bodi.appendChild(actions)
        actions.appendChild(show)
        actions.appendChild(edit)
        actions.appendChild(delet)
        actions.appendChild(check)

    })
}
get()