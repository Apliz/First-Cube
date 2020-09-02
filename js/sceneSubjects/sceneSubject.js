function SceneSubject( scene ) {

  const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );
  const material = new THREE.MeshStandardMaterial( {color: 0x800080} );

  mesh = new THREE.Mesh ( geometry, material );
  
  scene.add( mesh );

  this.update = function( time ) {
    const scale = Math.sin( time ) + 2;
    
    mesh.scale.set( scale, scale, scale );
  };
};