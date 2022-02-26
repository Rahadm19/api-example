const userfriend = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then (res => res.json())
    .then (data => displayFriend(data))
}
// userfriend();

const displayFriend = friend =>{
    const buddies = friend.results;
    const friendField = document.getElementById('friends-field')
    for(const buddy of buddies){
        // console.log(buddy.name)
        const p = document.createElement('p');
        p.innerText = buddy.email;
        friendField.appendChild(p) ;
        const panother = document.createElement('p');
        panother.innerText = buddy.name.title;
        friendField.appendChild(panother);
    }
    
   
}