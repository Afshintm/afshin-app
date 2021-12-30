import { Button } from '@mui/material';
import * as React from 'react';
import productList from '../ProductList'
function Products() {
    return(
        <div>
            <Button variant="contained">Hello World</Button>
            {console.log(productList)}
        </div>
    );
}
export default Products;