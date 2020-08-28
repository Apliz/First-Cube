let container;
let camera;
let renderer;
let scene;
let mesh;

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

function init() {

  // document.body.querySelector( body );

  scene = new THREE.Scene();

  scene.background = new THREE.Color( 0x8fbcd );

  const fov = 75;
  const aspect = windowWidth / windowHeight;
  const near = 0.1;
  const far = 1000;

  camera = new THREE.PerspectiveCamera( fov, aspect, near, far );

  camera.position.set( 0, 0, 3 );
  
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
  
  renderer.setSize( windowWidth, windowHeight );
  renderer.setPixelRatio( window.devicePixelRatio );

  
  document.body.appendChild( renderer.domElement );



};



// light.position.set( -5, 0, 0 );
// light.target.position.set( -5, 0, 0 );

// scene.add(light);
// scene.add(light.target);





function animate() {
  requestAnimationFrame( animate );
  mesh.rotation.x += 0.02;
  mesh.rotation.y += 0.02;
  mesh.rotation.z += 0.02;
  renderer.render( scene, camera );
};

init();
animate();