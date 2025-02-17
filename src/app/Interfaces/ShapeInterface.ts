import { Circle } from 'lucide-react';
export interface KonvaNewShapeInterface {
    type: string,
    id: string,
    x: number, 
    y: number,
    width: number,
    height: number,
    radius?: number,
    numPoints?: number,  
    innerRadius?: number,  
    outerRadius?: number,
    fill: string,
    stroke?: string,
    stokeSize?: number,
    isGradient: boolean,
    fillLinearGradientColorStops: [number, string, number, string],
    fillLinearGradientStartPoint: { x: number, y: number },
    fillLinearGradientEndPoint: { x: number, y: number },
    data?: string,
}

export interface ShapeTypesInterface {
    rectangle: KonvaNewShapeInterface,
    circle: KonvaNewShapeInterface,           
    stamp: KonvaNewShapeInterface,
    rightArrow: KonvaNewShapeInterface
}

export type ShapeTypes = keyof ShapeTypesInterface;