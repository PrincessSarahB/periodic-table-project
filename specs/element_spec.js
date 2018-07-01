var Element = require('../Models/Element.js')
var assert = require('assert')

describe('Element', function(){

  let element;

  beforeEach(function(){
    element = new Element({"name": "Gold",
      "appearance": "metallic yellow",
      "atomic_mass": 196.9665695,
      "boil": 3243,
      "category": "transition metal",
      "color": null,
      "density": 19.3,
      "discovered_by": "Middle East",
      "melt": 1337.33,
      "molar_heat": 25.418,
      "named_by": null,
      "number": 79,
      "period": 6,
      "phase": "Solid",
      "source": "https://en.wikipedia.org/wiki/Gold",
      "spectral_img": null,
      "video": "XXXXXXXXXXXXXXXXXXXXX",
      "summary": "Gold is a chemical element with symbol Au (from Latin:aurum) and atomic number 79. In its purest form, it is a bright, slightly reddish yellow, dense, soft, malleable and ductile metal. Chemically, gold is a transition metal and a group 11 element.",
      "symbol": "Au",
      "xpos": 11,
      "ypos": 6 });
  });

  it('should have a name', function(){
    assert.equal(element.name, "Gold");
  });

  it('should have an appearance', function(){
    assert.equal(element.appearance, "metallic yellow")
  });

  it('should have an atomic mass', function(){
    assert.equal(element.atomic_mass, 196.9665695)
  });

  it('should have a boil point', function(){
    assert.equal(element.boil, 3243)
  });

  it('should have a category', function(){
    assert.equal(element.category, "transition metal")
  });

  it('should have a color', function(){
    assert.equal(element.color, null)
  });

  it('should have a density', function(){
    assert.equal(element.density, 19.3)
  });
})
