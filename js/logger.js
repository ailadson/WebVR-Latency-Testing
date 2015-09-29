function Logger(name, controls){
  this.name = name;
  this.log = [];
  this.controls = controls;
}

Logger.prototype.update = function(){
  if(this.active){
    var currentTime = Date.now();

    this.log.push({
      z: this.controls.alpha,
      x: this.controls.beta,
      y: this.controls.gamma,
      time: currentTime,
      mark : this.mark
    });

    this.mark = false;
    if(currentTime - this.startTime >= this.time ){ this.finish(); }
  }
};

Logger.prototype.mark = function(mark){
  this.mark = mark || true;
};

Logger.prototype.activate = function(time, name){
  this.startTime = Date.now();
  this.time = time;
  this.name = name || this.name;
  this.log = [];
  this.active = true;
};

Logger.prototype.finish = function(){
  this.active = false;
  this.printLog();
};

Logger.prototype.printLog = function(){
  console.log(JSON.stringify({ name: this.name, log: this.log}));
};
