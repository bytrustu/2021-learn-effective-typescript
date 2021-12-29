interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function nomalize(v: Vector3D) {
  return {
    x: v.x / 2,
    y: v.y / 2,
    z: v.z / 2,
  };
}

console.log(nomalize({
  x: 3,
  y: 4,
  z: 5,
}));

