const btnStart=document.querySelector('.start');
const btnReset=document.querySelector('.reset');
const btnStop=document.querySelector('.stop');

let hr=min=sec=ms=0, startTimer;

btnStart.addEventListener('click',()=>{
   startTimer=setInterval(()=>{
        ms++;
        if(ms==100){
            sec++;
            ms=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hr++;
            min=0;
        }
        updateDisplay();
   },10)
})

btnReset.addEventListener('click',()=>{
    hr=min=sec=ms=0;
    updateDisplay();
})

btnStop.addEventListener('click',()=>{
    clearInterval( startTimer);
    updateDisplay();
})

function updateDisplay(){
    phr=hr<10?'0'+hr:hr;
    pmin=min<10?'0'+min:min;
    psec=sec<10?'0'+sec:sec;
    pms=ms<10?'0'+ms:ms;
    document.querySelector('.hr').innerText=phr;
    document.querySelector('.min').innerText=pmin;
    document.querySelector('.sec').innerText=psec;
    document.querySelector('.ms').innerText=pms;
}