import { Tensor } from '@sapien/core.types'
export abstract class Layer{

    public abstract feedForward(data:Tensor):Tensor;

}