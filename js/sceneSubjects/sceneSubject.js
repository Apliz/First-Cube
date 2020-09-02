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