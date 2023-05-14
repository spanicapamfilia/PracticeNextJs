import Controller from "./controller";

class ProductController 
    extends Controller{
    
    constructor(props){
        super(props);
        this.tableName ='product'
    }

    async getImageProduct(){
        let id=1;

        this.tableName ='product_image';
        this.key ='productId'
        this.value = id
        return await this._detail();
    }
}

export default ProductController;