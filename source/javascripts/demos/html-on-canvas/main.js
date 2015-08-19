var canvas,
    context,
    proton,
    renderer,
    mouseObj,
    emitter;

window.onload = function() {
  var test = document.getElementById("test");
  TweenLite.from(test, 2, {left:"-100px", opacity: 0, ease: Bounce.easeOut});

  canvas = document.createElement("canvas");
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
  document.body.appendChild(canvas);

  loadImage();
  mouseObj = {
    x : canvas.width / 2,
    y : canvas.height / 2
  };
};

window.addEventListener('resize', function(e) {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;

  emitter.p.x = canvas.width / 2;
  emitter.p.y = canvas.height / 2;

  mouseObj.x = canvas.width / 2;
  mouseObj.y = canvas.height / 2;
}, true);

function loadImage() {
  var image = new Image();
  image.onload = function(e) {
    createProton(e.target);
    tick();
    canvas.addEventListener('mousedown', mouseDownHandler, false);
    canvas.addEventListener('mousemove', mouseMoveHandler, false);
  };
  image.src = '../images/particle.png';
}

function createProton(image) {
  proton = new Proton();
  emitter = new Proton.Emitter();
  emitter.rate = new Proton.Rate(new Proton.Span(35, 55), 0.1);
  emitter.addInitialize(new Proton.Mass(1));
  emitter.addInitialize(new Proton.ImageTarget(image));
  emitter.addInitialize(new Proton.Position(new Proton.PointZone(canvas.width / 2, canvas.height / 2)));
  emitter.addInitialize(new Proton.Life(1, 1.7));
  emitter.addInitialize(new Proton.V(new Proton.Span(3, 5), new Proton.Span(0, 360), 'polar'));
  emitter.addBehaviour(new Proton.Color('#ff0000', '#ffff00'));
  attractionForce = new Proton.Attraction(mouseObj, 10, 200);
  emitter.addBehaviour(attractionForce);
  emitter.addBehaviour(new Proton.Scale(Proton.getSpan(1, 1.6), Proton.getSpan(0, 0.1)));
  emitter.addBehaviour(new Proton.Alpha(1, 0.2));
  emitter.emit();
  proton.addEmitter(emitter);
  renderer = new Proton.Renderer('webgl', proton, canvas);
  renderer.blendFunc("SRC_ALPHA", "ONE");
  renderer.start();
}

function mouseDownHandler(e) {
  createMeteor();
  attractionForce.reset(mouseObj, 0, 200);
  setTimeout(function() {
    attractionForce.reset(mouseObj, 10, 200);
  }, 500);
}

function createMeteor() {
  emitter.p.x = -canvas.width/2;
  emitter.p.y = -canvas.height/2;
  mouseObj.x = 0;
  mouseObj.y = 0;
}

function tick() {
  emitter.p.x = emitter.p.x + 5;
  emitter.p.y = emitter.p.y + 5;
  mouseObj.x = mouseObj.x + 5;
  mouseObj.y = mouseObj.y + 5;
  requestAnimationFrame(tick);
  if (proton)
    proton.update();
}