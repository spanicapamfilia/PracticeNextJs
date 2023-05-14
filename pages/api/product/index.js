import nc from "next-connect";
import ErrorHandler from "@app/src/handlers/error.handler";
import axios from "axios";
import { ProductValidator } from "@app/src/validator/product.validator";
import ProductController from "@app/src/controllers/product.controller";

/**
 * DEFAULT dari next js
 * @param req
 * @param res
 */
const handler = nc(ErrorHandler);
// function handler(req,res){
//     try{
//         console.log('req', req.method)
//         if(req.method == 'GET'){

//         }if(req.method == 'POST'){
            
//         }if(req.method == 'DELETE'){
            
//         }
//     } catch(err){

//     }
// }
// handler.get((req, res) => {
//     console.log('REQ',req)
//     res.status(200).json({ name: 'John Doe' })
// })
handler
.post(ProductValidator.create,async(req,res)=>{
    console.log('req body', req.body)
    try{
        const[err, data] = await new ProductController({
            fields:req.body?.product
        })._create()
        if(err){
            res.status(400)
            return res.json({
                error:true,
                message: err?.message
            })
        }
        return res.json({
            ...req.body
            })
        }catch(err){
        res.status(500)
        return res.json({
            error:true,
            status:500,
            message: err?.message
    
            })
        }
    })
    // .get(async (req,res)=> {
    //     try{
    //         const response = await axios
    //             .get("https://dummyjson.com/products")
    //             .then((result)=> {
    //                     return {
    //                         pagination: {
    //                             limit: result?.data?.limit ?? 10,
    //                             skip: result?.data?.skip ?? 0,
    //                             total: result?.data?.total ?? 0
    //                         },
    //                         data: result?.data?.products ?? []
    //                     }
    //             })
    //             .catch((err)=> {
    //                 return {
    //                     pagination: {
    //                         limit: 10,
    //                         skip: 0,
    //                         total: 0
    //                     },
    //                     data: []
    //                 }
    //             })
    
    //         return res.json(response)
    
    
    //     }catch(err){
    //         res.status(500)
    //         return res.json({
    //             error: true,
    //             status:500,
    //             message: err?.message
    //         })
    //     }
    // })
    .delete(async (req,res)=> {
        //logic
    })
    .put(async (req,res)=> {
        //logic
    })
    .get(async (req,res)=> {
        try{

            const [err, {
                pagination,
                query,
                data
            }
            ] = await new ProductController({req})
                    ._list();

            if(err) {
                res.status(400);
                return res.json({
                    error:true,
                    message: err?.message
                })
            }

            res.status(200)
            return res.json({
                pagination,
                query,
                data
            })
        }catch(err){
            res.status(500)
            return res.json({
                error: true,
                status:500,
                message: err?.message
            })
        }
    })
    export default handler