import { Layer } from './Layer';
import { Tensor } from '@sapien/core.types';

export class Dense extends Layer{
   public feedForward(d:Tensor):Tensor{
       var x = new Tensor()
       return x;
   }
}