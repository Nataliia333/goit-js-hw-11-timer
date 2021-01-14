import './styles.css';

// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */

const refs = {
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]'),
};
  
  class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.intervalId = null;
      this.timerView = document.querySelector(selector);
      this.targetDate = targetDate.getTime();
  
      this.start();
    }
  
    render() {
      const currentDate = Date.now();
      const time = this.targetDate - currentDate;
  
      this.getCountdown(time);
    }
  
    start() {
      this.render();
  
      this.intervalId = setInterval(() => {
        this.render();
      }, 1000);
    }
     
    getCountdown(time) {
      const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),);
      const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  
      const newTime = { days, hours, mins, secs };
      updateTimerView(newTime);
    }
  
    pad(value) {
      return String(value).padStart(2, '0');
    }
  };
  
  const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Mar 01, 2021'),
  });
  
  function updateTimerView({ days, hours, mins, secs }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
  }
  
  