let container;
let camera;
let renderer;
let scene;
let mesh;

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

function init() {
  container = document.querySelector( '#scene-container' );

  // document.body.querySelector( body );
  scene = new THREE.Scene();

  scene.background = new THREE.Color( 0x8fbcd );

  const fov = 75;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 1000;

  camera = new THREE.PerspectiveCamera( fov, aspect, near, far );

  camera.position.set( 0, 0, 5 );
  
  const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );
  const material = new THREE.MeshStandardMaterial( {color: 0x800080} );
  mesh = new THREE.Mesh ( geometry, material );
  
  scene.add( mesh );

  const color = 0xffffff;
  const intensity = 4;
  const light = new THREE.DirectionalLight( color, intensity );
  light.position.set( 10, 10, 10 );
  
  scene.add( light );
  
  renderer = new THREE.WebGLRenderer();
  
  renderer.setSize( container.clientWidth, container.clientHeight );
  renderer.setPixelRatio( window.devicePixelRatio );

  
  document.body.appendChild( renderer.domElement );



};

function update() {

  mesh.rotation.x += 0.02;
  mesh.rotation.y += 0.02;
  mesh.rotation.z += 0.02;

};

function render() {
  renderer.render( scene, camera );
};

window.addEventListener( 'resize', onWindowResize );
function onWindowResize() {

  camera.aspect = container.clientWidth / container.clientHeight;

  camera.updateProjectionMatrix();

  renderer.setSize( container.clientWidth, container.clientHeight );

};


init();

renderer.setAnimationLoop( () => {
  update();
  render();
} );