
function SceneManager( canvas ) {
  
  const clock = new THREE.Clock();

  const screenDimensions = {
    width: canvas.width,
    height: canvas.height
  }
  
  const scene = buildScene();
  const renderer = buildRender( screenDimensions );
  const camera = buildCamera( screenDimensions );
  const sceneSubjects = createSceneSubjects( scene );
  
  function buildScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( "#a87932" );
    
    return scene;
    
  };
  
  function buildRender( { width, height } ) {
    const renderer = new THREE.WebGLRenderer( {canvas: canvas, antialias: true, alpha: true} );
    const DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
    renderer.setPixelRatio(DPR);
    renderer.setSize( width, height );
    
    // renderer.gammaInput = true;
    // renderer.gammeOutput = true;
    
    return renderer;
  };
  
  function buildCamera( { width, height } ) {
    const fov = 75;
    const aspect = width / height;
    const near = 0.1;
    const far = 1000;
    
    const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    
    camera.position.set( 0, 0, 5 );
    
    return camera
    
  };
  
  function createSceneSubjects(scene) {
  const sceneSubjects = [
    new GeneralLights(scene),
    new SceneSubject(scene)
  ];
  
  return sceneSubjects;
  };


  this.update = function() {
    const elapsedTime = clock.getElapsedTime();

    for (subject of sceneSubjects) {
      subject.update( elapsedTime );
    }
    renderer.render( scene, camera );
  };

  this.onWindowResize = function() {
  const { width, height } = canvas;
  
  screenDimensions.width = width;
  screenDimensions.height = height;
  
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  
  renderer.setSize( width, height );
  
  };


};

// createSceneSubjects();

