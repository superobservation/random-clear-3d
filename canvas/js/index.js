
    // Not using the default Scene, so that we can
    // bind our Scene to our custom canvas
    var scene = new XEO.Scene({
        canvas: "myCanvas",
        webgl2 : true, //patiently waiting for webgl2
        transparent: true
    });


    // Torus entity
        new XEO.Model(scene, {
        // Source glTF file
        src: "canvas/models/gltf/vitamin-1/mind.gltf",

          material: new XEO.PhongMaterial(scene, {
            ambient: [0.8, 0.9, 0.4],
            shininess: 15,
        }),

    });
            // Modelling transformation hierarchy
    // Set initial camera position
    scene.camera.view.eye = [0, 0, -3.5];

    // Orbit the camera
    scene.on("tick",
            function () {

                var view = scene.camera.view;
            });

    // Allow user interaction
    new XEO.CameraControl(scene);
