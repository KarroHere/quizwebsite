


document.addEventListener('DOMContentLoaded', function() {
    const userForm = document.querySelector('.userinfo form');
    const quizSection = document.querySelector('.quiz');
    const successMessage = document.getElementById('success');
    const submitButton = document.querySelector('.quiz input[type="submit"]');
    const userInfoSection = document.querySelector('.userinfo'); 
    const infoFillInMessage = document.getElementById('infofillin'); 
    const qerrorMessage = document.getElementById('qerror'); 

    successMessage.style.display = 'none';
    totalscore.style.display = 'none';
    infoFillInMessage.style.display = 'none';

    userForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        let isValid = true;

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();

        document.getElementById('invalidfname').style.display = 'none';
        document.getElementById('invalidlname').style.display = 'none';
        document.getElementById('invalidmail').style.display = 'none';

        if (!/^[A-Za-z]+$/.test(firstName)) {
            isValid = false;
            document.getElementById('invalidfname').style.display = 'block';
        }

        if (!/^[A-Za-z]+$/.test(lastName)) {
            isValid = false;
            document.getElementById('invalidlname').style.display = 'block';
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            isValid = false;
            document.getElementById('invalidmail').style.display = 'block';
        }

        if (isValid) {
            infoFillInMessage.style.display = 'none';
            quizSection.scrollIntoView({ behavior: 'smooth' });
        } 
    });

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); 

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();

        if (!firstName || !lastName || !email 
            || !/^[A-Za-z]+$/.test(firstName) || !/^[A-Za-z]+$/.test(lastName) 
            || !/\S+@\S+\.\S+/.test(email)) {
            userInfoSection.scrollIntoView({ behavior: 'smooth' });
            infoFillInMessage.style.display = 'block';
            return;
        }

        const correctAnswers = {
            q1: 'vodka',
            q3: '3a',
            q4: '4c',
            q6: 'Pineapple',
            q7: 'margarita'
        };

        let isQuizValid = true;
        let score = 0;

        // Q1 
        const q1Answer = document.querySelector('input[name="q1"]').value.trim();
        if (q1Answer) {
            errorq1.style.display = 'none';
        }
        else{
            isQuizValid = false;
            errorq1.style.display = 'block';
        }
        if (q1Answer.toLowerCase() === correctAnswers.q1.toLowerCase()) {
            score++;
        }

        // Q2  
        const q2Answers1 = document.querySelector('input[name="q2[]"][value="French 75"]');
        const q2Answers2 = document.querySelector('input[name="q2[]"][value="Gimlet"]');
        const q2Answers3 = document.querySelector('input[name="q2[]"][value="Espresso Martini"]');
        const q2Answers4 = document.querySelector('input[name="q2[]"][value="Mojito"]');
        if (q2Answers1.checked && q2Answers2.checked && !q2Answers3.checked && !q2Answers4.checked) {
                score++;
        }

        // Q3 
        const q3Answer = document.querySelector('input[name="q3"]:checked')?.value;
        if (q3Answer === correctAnswers.q3) {
            score++;
        } 

        // Q4 
        const q4Answer = document.querySelector('input[name="q4"]:checked')?.value;
        if (q4Answer) {
            errorq4.style.display = 'none';
        }
        else{
            isQuizValid = false;
            errorq4.style.display = 'block';
        }
        if (q4Answer === correctAnswers.q4) {
            score++;
        }

        // Q5 
        const q5Answers1 = document.querySelector('input[name="q5[]"][value="Vodka"]');
        const q5Answers2 = document.querySelector('input[name="q5[]"][value="Soda Water"]');
        const q5Answers3 = document.querySelector('input[name="q5[]"][value="Tomato Juice"]');
        const q5Answers4 = document.querySelector('input[name="q5[]"][value="Worcestershire Sauce"]');
        if (q5Answers1.checked && !q5Answers2.checked && q5Answers3.checked && q5Answers4.checked) {
                score++;
        }
        
        // Q6
        const q6Answer = document.querySelector('select[name="q6"]').value;
        if (q6Answer === correctAnswers.q6) {
            score++;
        }

        // Q7 
        const q7Answer = document.querySelector('input[name="q7"]').value.trim().toLowerCase();
        if (q7Answer === correctAnswers.q7.toLowerCase()) {
            score++;
        }

        if (isQuizValid) {
            successMessage.style.display = 'block';
            totalscore.style.display = 'block';
            document.getElementById('totalscore').textContent = `Your score: ${score} / 7`;
            submitButton.disabled = true;
            qerrorMessage.style.display = 'none';
        }
        else{
            qerrorMessage.style.display = 'block';
        }

    });
});

