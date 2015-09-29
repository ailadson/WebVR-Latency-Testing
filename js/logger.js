function Logger(name, controls){
  this.name = name;
  this.log = [];
  this.controls = controls;
}

Logger.prototype.update = function(){
  if(this.active){
    this.log.push({
      z: this.controls.alpha,
      x: this.controls.beta,
      y: this.controls.gamma
    });
  }
};

Logger.prototype.activate = function(name){
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
