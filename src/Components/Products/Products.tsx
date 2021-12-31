import { Button } from '@mui/material';
import * as React from 'react';
import { ProductsProps } from './types';

const Products: React.FC<ProductsProps> = (props:ProductsProps)  => {
    return(
        <div>
            <Button variant="contained">Hello World</Button>
            {console.log(props.Products)}
        </div>
    );
}
export default Products;