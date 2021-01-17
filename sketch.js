let spelunk = [];
let minR=40, maxR=600, N=48 ;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 255, 255);
	for (let n=0; n<N; n++) { 
		let R = map(n, 0, N, minR, maxR);
		spelunk[n] = new Dot(R,n);
	}
}

function draw() {
  background(10); 
  translate(width>>1, height>>1);  
  for (let i=0; i<spelunk.length; i++) {
    let D = spelunk[i];
    D.show();
    D.R += 0.6;
    if (D.R >maxR) {
      D.R =minR;
    }
  }
}

class Dot {
	constructor(R, N){
		this.R = float(R);
		this.N = int(N);
	}

	show() { 
		noStroke();
		for (let i=0; i<360; i+=8) {
			let x = float(this.R*sin(radians(i+this.N*5)));
			let y = float(this.R*cos(radians(i+this.N*5)));
			let t = float(map(this.R, minR, maxR, -180, 180));
			let r = 6*sin(radians(t));
			fill(dist(x, 0, y, 0)/3%255, 200, 255); 
			rect(x, y, 2*r, 2*r);
			rect(x/2, y/2, 0.9*r, 0.9*r);
			rect(x/4, y/4, 0.3*r, 0.3*r);
		}
	}
}

// function mousePressed(){
//   save('pix.jpg');
// }