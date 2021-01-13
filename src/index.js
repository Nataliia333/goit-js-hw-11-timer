import './styles.css';

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */

class CountdownTimer {
  constructor({ selector, targetDate}) {
    this.days = document.querySelector(`[data-value="days"]`);
    this.hours = document.querySelector(`[data-value="hours"]`);
    this.mins = document.querySelector(`[data-value="mins"]`);
    this.secs = document.querySelector(`[data-value="secs"]`);
    this.timer = document.querySelector(selector);
    this.targetDate = targetDate;
    }
    
    start() {
        this.days.textContent = 'xx';
        this.hours.textContent = 'xx';
        this.mins.textContent = 'xx';
        this.secs.textContent = 'xx';
    

        getCountdown (() => {
          const currentDate = Date.now();
          const time = this.targetDate - currentDate;

          const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
          const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
          const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
          const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
          
         this.days.textContent = `${days}`;
         this.hours.textContent = `${hours}`;
         this.mins.textContent = `${mins}`;
         this.secs.textContent = `${secs}`;
        }, 1000);
    };
   
};

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Mar 01, 2021'),
});

timer.start();
