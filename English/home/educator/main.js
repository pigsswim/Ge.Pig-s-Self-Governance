
let setBtn = document.getElementById('set');
let questions;

generateStory();

function generateStory() {
        setBtn.addEventListener('click',createStory)
}
//view

function createStory() {
        let role = document.getElementById('name');
        if (role.value == '') {
                console.log('n')
                return;
        }else {
                let newRole = role.value;
                let story = document.getElementById('story')
                let title1 = document.getElementById('title1')
                let title2 = document.getElementById('title2')
                let title3 = document.getElementById('title3')
                let title4 = document.getElementById('title4')
                let title5 = document.getElementById('title5')
                let title6 = document.getElementById('title6')
                let title7 = document.getElementById('title7')
                let title8 = document.getElementById('title8')
                let title9 = document.getElementById('title9')
                let title10 = document.getElementById('title10')
                let p0 = document.createElement('h2');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let p5 = document.createElement('p');
                let p6 = document.createElement('p');
                let p7 = document.createElement('p');
                let p8 = document.createElement('p');
                let p9 = document.createElement('p');
                let p10 = document.createElement('p');
                let sample = `Julie gets up at 6 am on a school day. 
                By 7 am, Julie would always be in school classroom. 
                The first class starts at 8 am. 
                From Monday through Friday, Julie studies with a total of 82 classmates.
                In the morning, there are usually four different sessions, each lasts 45 minutes. 
                The longgest break is 20 minutes between the third and the fourth course.  
                The short break is always 10 minutes.
                At 12:00 noon, school morning session ends. 
                Students should arrive classroom for the afternoon session before 2 pm, 
                where the afternoon courses begin.
                The afternoon lasts until 5 pm.`;
                let t1 = 'Question 1: How many hours does Julie spend in school on a school day?';
                let t2 = 'Question 2: How many hours in total Julie gets to rest in school on a school day?';
                let t3 = 'Question 3: How much time does Julie spend on communting to school on a daily basis?';
                let t4 = 'Question 4: How many more classmates does Julie have compared with yours?';
                let t5 = 'Question 5: How many hours in total does Julie stay in school for a week?';
                let t6 = 'Question 6: Between Julie and a kid in another country, who spends more time in school in a week?';
                let t7 = 'Question 7: How  much time does Julie have to have lunch?';
                let t8 = 'Question 8: If you could choose, would you prefer to have 82 classmates? Why?';
                let t9 = 'Question 9: Do you think Julie spends too much time in school? Why? Please use numbers to support your opinion.';
                let t10 = `Question 10: Suppose you have spotted other issues that need to be changed during Julie's school day, Please raise the issues and provide your solution.`;
                let questions = [];
                questions.push(sample);
                questions.push(t1);
                questions.push(t2);
                questions.push(t3);
                questions.push(t4);
                questions.push(t5);
                questions.push(t6);
                questions.push(t7);
                questions.push(t8);
                questions.push(t9);
                questions.push(t10);
                questions = questions.map((elem) => {
                        return (elem.replaceAll('Julie', newRole)) ;     
        })

        console.log(questions)
        story.innerHTML = '';
        title1.innerHTML = '';
        title2.innerHTML = '';
        title3.innerHTML = '';
        title4.innerHTML = '';
        title5.innerHTML = '';
        title6.innerHTML = '';
        title7.innerHTML = '';
        title8.innerHTML = '';
        title9.innerHTML = '';
        title10.innerHTML = '';
        p0.innerText = questions[0];
        p1.innerText = questions[1];
        p2.innerText = questions[2];
        p3.innerText = questions[3];
        p4.innerText = questions[4];
        p5.innerText = questions[5];
        p6.innerText = questions[6];
        p7.innerText = questions[7];
        p8.innerText = questions[8];
        p9.innerText = questions[9];
        p10.innerText = questions[10];
        story.appendChild(p0);
        title1.appendChild(p1);
        title2.appendChild(p2);
        title3.appendChild(p3);
        title4.appendChild(p4);
        title5.appendChild(p5);
        title6.appendChild(p6);
        title8.appendChild(p8);
        title9.appendChild(p9);
        title10.appendChild(p10);
        }

}

//control
