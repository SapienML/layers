import { Layer } from './Layer';
import { Tensor } from '@sapien/types';

export class Dense extends Layer{
   public feedForward(d:Tensor):Tensor{
       var x = new Tensor()
       return x; 
   }
   public getOutputShape():Array<number>{
       return [0]; // Dummy implementation
   }
   public connectTo(previousLayer:Layer):boolean{
       return true; // Dummy implementation
   }
}
