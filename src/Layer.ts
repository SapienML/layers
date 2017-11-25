import { Tensor } from '@sapien/types';

export abstract class Layer{
    public abstract feedForward(data:Tensor):Tensor; // Do the math
    public abstract getOutputShape():Array<number>; // Return shape of current layer
    public abstract connectTo(previousLayer:Layer):boolean // Functional api to connect with another layer
}
