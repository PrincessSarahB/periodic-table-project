var Element = function(details){
  this.name = details.name;
  this.appearance = details.appearance;
  this.atomic_mass = details.atomic_mass;
  this.boil = details.boil;
  this.category =  details.category;
  this.color =  details.color;
  this.density = details.density;
  this.discovered_by = details.discovered_by;
  this.melt = details.melt;
  this.molar_heat = details.molar_heat;
  this.named_by = details.named_by;
  this.number = details.number;
  this.period = details.period;
  this.phase = details.phase;
  this.source = details.source;
  this.spectral_img = details.spectral_img;
  this.video = details.video;
  this.summary = details.summary;
  this.symbol = details.symbol;
  this.xpos = details.xpos;
  this.ypos = details.ypos;
}

module.exports = Element;
