import { Tensor } from '@sapien/types'
export abstract class Layer{

    public abstract feedForward(data:Tensor):Tensor;

}
