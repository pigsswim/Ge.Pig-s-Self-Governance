
let setBtn = document.getElementById('set');
let questions;

generateStory();

function generateStory() {
        setBtn.addEventListener('click',createStory)
}
//view

function createStory() {
        let role = document.getElementById('educator-name');
        if (role.value == '') {
                console.log('n')
                return;
        }else {
                let newRole = role.value;
                let story = document.getElementById('sample-story')
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

        story.innerHTML = questions[0];
        title1.innerHTML = questions[1];
        title2.innerHTML = questions[2];
        title3.innerHTML = questions[3];
        title4.innerHTML = questions[4];
        title5.innerHTML = questions[5];
        title6.innerHTML = questions[6];
        title7.innerHTML = questions[7];
        title8.innerHTML = questions[8];
        title9.innerHTML = questions[9];
        title10.innerHTML = questions[10];
        }

}

//control
