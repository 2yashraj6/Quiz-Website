const quizData = [
    {
        question: 'Who is the PM of INDIA',
        a:'Donald Trumph',
        b:'Bill Clinton',
        c:'Narendra Modi',
        d:'Barak Obama',
        correct: 'c'
    },
    {
        question: 'Minimum number of petals in common flower ?',
        a:'10',
        b:'17',
        c:'4',
        d:'110',
        correct: 'c'
    },
    {
        question: 'Which is the Indian Language',
        a:'C++',
        b:'Hindi',
        c:'Python',
        d:'Java',
        correct: 'b'
    },
    {
        question: 'CPU stands for ________',
        a:'Central Processing Unit',
        b:'Central Partial Unit',
        c:'Circuit Problem Unit',
        d:'Central Processing United',
        correct:'a'
    },
    {
        question: 'In Which year India got Independence ?',
        a:'1948',
        b:'2019',
        c:'2018',
        d:'1947',
        correct:'d'
    }
];

const questionE1=document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitBtn=document.getElementById("submit");
const submitBtn2=document.getElementById("submit2");
const radio1 = document.getElementById("a")
const radio2 = document.getElementById("b")
const radio3 = document.getElementById("c")
const radio4 = document.getElementById("d")
const comp = document.getElementById("complete");
let currentQuiz = 0;

function loadQuiz() {  
    const currentQuizData =quizData[currentQuiz];
    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
let b=0;
submitBtn.addEventListener("click", () => {
    const currentQuizDeta = quizData[currentQuiz];

    console.log(currentQuiz);
    let a=currentQuizDeta.correct;
    console.log(a);
        const radio = document.getElementById(a);
        if (radio.checked) {
            b++;
        }
        currentQuiz++;
        if (currentQuiz >= 5) { 
            comp.innerHTML="";
            questionE1.innerHTML = `Congratulations You've Completed !<br><br> Ur Score : ${b}/5 `;
            submitBtn.innerHTML = "Done";
            submitBtn.addEventListener("click", () => {
            window.location.reload(true)
            scrollTo(0,-550)
            })            
        }
        else{
            loadQuiz();        
        }
        radio1.checked = false;
        radio2.checked = false;
        radio3.checked = false;
        radio4.checked = false;
        // console.log(radio.checked);
        // }
    })
    submitBtn2.addEventListener("click", () => {
        scrollTo(0,550)
    })
loadQuiz();

