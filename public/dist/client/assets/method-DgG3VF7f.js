import { G as GLTFLoader } from "./GLTFLoader-Cz-BgZPl.js";
import { D as DRACOLoader, R as RGBELoader } from "./RGBELoader-CIgDGgVP.js";
import { W as WebGLRenderer, S as Scene, P as PerspectiveCamera, A as AmbientLight, a as PointLight, b as PMREMGenerator, E as EquirectangularReflectionMapping, C as Color, c as PlaneGeometry, M as MeshPhongMaterial, d as Mesh } from "./index-BxY6cs4J.js";
const createRenderer = () => {
  var renderer = new WebGLRenderer({
    canvas: document.getElementById("bottleModel2"),
    antialias: true,
    alpha: true
  });
  const windowWidth = document.getElementById("modelPlace").clientWidth;
  const windowHeigth = document.getElementById("modelPlace").clientHeight;
  renderer.shadowMap.enabled = true;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(windowWidth, windowHeigth);
  return renderer;
};
const createScene = () => {
  var scene = new Scene();
  return scene;
};
const createCamera = () => {
  const camera = new PerspectiveCamera(3.6, document.getElementById("modelPlace").clientWidth / document.getElementById("modelPlace").clientHeight, 20, 4e3);
  camera.position.z = 190;
  camera.position.x = 0;
  camera.position.y = 50;
  return camera;
};
const createLight = (scene) => {
  const ambientlight = new AmbientLight(16777215, 0.8);
  const pointlight = new PointLight(16777215, 1, 100);
  pointlight.position.set(0, 0, 10);
  const pointlightBack = new PointLight(16777215, 1, 100);
  pointlightBack.position.set(2, 1, -10);
  scene.add(pointlight, ambientlight, pointlightBack);
};
const createModel = (model, scene, path, setLoading, renderer) => {
  setLoading(true);
  let loadingEnvornment = true;
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
  let loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);
  new PMREMGenerator(renderer);
  new RGBELoader().setPath("https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/").load("dancing_hall_4k.hdr", function(texture) {
    texture.mapping = EquirectangularReflectionMapping;
    scene.environment = texture;
    loadingEnvornment = false;
  });
  loader.load(path, function(gltf) {
    model.current = gltf.scene;
    model.current.position.y = -2.2;
    model.current.position.x = 0;
    const baseMesh = model.current.children.find((item) => item.name === "base");
    baseMesh.material.color = new Color("#0289a3");
    if (!loadingEnvornment) {
      scene.add(model.current);
      setLoading(false);
    }
  }, void 0, function(error) {
    console.error(error);
  });
};
const createFloor = (scene) => {
  const floorGeometry = new PlaneGeometry(5e3, 5e3, 1, 1);
  const floorMaterial = new MeshPhongMaterial({
    color: 16382715,
    shininess: 0
  });
  const floor = new Mesh(floorGeometry, floorMaterial);
  floor.rotation.x = -0.5 * Math.PI;
  floor.receiveShadow = true;
  floor.position.y = -1;
  scene.add(floor);
};
const applyTextureToModel = (parent, type, mtl) => {
  parent.traverse((o) => {
    if (o.isMesh) {
      if (o.name.includes(type)) {
        o.material = mtl;
        o.nameID = type;
      }
    }
  });
};
const animate = (callback) => {
  function loop(time) {
    callback(time);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
};
const onWindowResize = (camera, renderer) => {
  const windowWidth = document.getElementById("modelPlace").clientWidth;
  const windowHeigth = document.getElementById("modelPlace").clientHeight;
  renderer.setSize(windowWidth, windowHeigth);
  return renderer;
};
export {
  animate,
  applyTextureToModel,
  createCamera,
  createFloor,
  createLight,
  createModel,
  createRenderer,
  createScene,
  onWindowResize
};
