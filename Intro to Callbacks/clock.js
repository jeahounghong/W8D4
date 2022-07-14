class Clock {
    constructor() {
      this.time = new Date();
      this.hour = this.time.getHours();
      this.miniute = this.time.getMinutes();
      this.second = this.time.getSeconds();
      // 1. Create a Date object.
      // 2. Store the hours, minutes, and seconds.
      // 3. Call printTime.
      this.printTime()
      // 4. Schedule the tick at 1 second intervals.
      setInterval(this._tick.bind(this),1000);
    }
  
    printTime() {
      console.log(`${this.hour}: ${this.miniute} : ${this.second}`);
      // Format the time in HH:MM:SS
      // Use console.log to print it.
    }
  
    _tick() {

        // console.log(this.time);
        this.time.setSeconds(this.second + 1)
        this.hour = this.time.getHours();
        this.miniute = this.time.getMinutes();
        this.second = this.time.getSeconds();
        this.printTime()
      // 1. Increment the time by one second.
      // 2. Call printTime.
    }
  }
  
  const clock = new Clock();
