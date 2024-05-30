
export interface ProductType{
    id:number;
    title:string;
    description:string;
    images:string[];
    category:string;
    brand:string;
    price: number; 
    stock:number;
    discountPercentage:number;
    favoris?:boolean;
}