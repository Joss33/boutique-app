
type Color = number;

export interface Product{
  id: string | number;
  name: string,
  image: string,
  price: string | number,
  link: string,
  colors: Color[]
}