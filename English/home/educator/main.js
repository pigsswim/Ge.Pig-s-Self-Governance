let set = document.getElementById('set');
set.addEventListener('click',generateStory());

//model 
localStorage.clear();

function generateStory () {
        let role = document.getElementById('name');
        let story = document.getElementById('story');
        let storyText = story.innerText;
        let newStory = storyText.replaceAll('Julie',`${role.value}`);
        let title1 = document.getElementById('title1');
        let title1Text = title1.innerText;
        let newTitle1 = title1Text.replaceAll('Julie',`${role.value}`);
        title1.innerText = newTitle1;
        story.innerHTML = newStory;
}
        
//view


//control
