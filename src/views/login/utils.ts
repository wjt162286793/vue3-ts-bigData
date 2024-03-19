export class Point{
    x:number
    y:number
    vx:number
    vy:number
    constructor(x:number,y:number,vx:number,vy:number){
        this.x=x;
        this.y=y;
        this.vx=vx;
        this.vy=vy;
    }
    update(width:number,height:number){
        if(this.x<=0||this.x>=width){
            this.vx=-this.vx;
        }
        if(this.y<=0||this.y>=height){
            this.vy=-this.vy;
        }
        this.x+=this.vx;
        this.y+=this.vy;
    }
    draw(canvasContext:CanvasRenderingContext2D){
        canvasContext.beginPath();
        canvasContext.arc(this.x,this.y,1,0,Math.PI*2,false);
        canvasContext.fill();
    }
}

export interface pointType{
  x:number
  y:number
  vx:number
  vy:number
  update:()=>void
  draw:()=>void
}