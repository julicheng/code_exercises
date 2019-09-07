class Cylinder {
  constructor(height, radius) {
    this.height = height;
    this.radius = radius;
  }

  calcVolumeCylinder() {
    return Math.PI * Math.pow(this.radius, 2) * this.height;
  }
}

class Cuboid {
  constructor(width, length, height) {
    this.width = width;
    this.length = length;
    this.height = height;
  }

  calcVolumeCuboid() {
    return this.width * this.length * this.height;
  }
}

class Sphere {
  constructor(radius) {
    this.radius = radius;
  }

  calcVolumeSphere() {
    return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
  }
}

// If I had more time I would add validation in the constructor which will catch the error before instantiating the object
// I would also research how to write to a file like the fizzbuzz task
