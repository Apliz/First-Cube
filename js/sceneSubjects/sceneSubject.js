function SceneSubject( scene ) {

  const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );
  const material = new THREE.MeshStandardMaterial( {color: 0x32a897} );

  mesh = new THREE.Mesh ( geometry, material );
  
  scene.add( mesh );

  this.update = function( time ) {
    // const scale = Math.sin( time ) + 2;
    mesh.rotation.z += 0.01;
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    // mesh.scale.set( scale, scale, scale );


  };
};

function Earth( scene ) {
  const radius = 3;
  const width = 64;
  const height = 64;
  const phiStart = 0;

  const geometry = new THREE.SphereBufferGeometry( radius, width, height);
  const earthTexture = new THREE.TextureLoader().load(
    'textures/2k_earth_daymap.jpg'
  );
  const material = new THREE.MeshStandardMaterial( {map: earthTexture, antialias: true, alpha: true}  );

  earthmesh = new THREE.Mesh( geometry, material );

  earthmesh.position.set( -3, 0, 0 ); 
  scene.add(earthmesh)

  this.update = function( time ) {
    earthmesh.rotation.y += 0.02;
  };
};