'use strict'

const db = require('app/db')
const Product = db.model('products')
const router = require('express').Router()
const {mustBeLoggedIn, forbidden} = require('./auth.filters')

// OB/SJB: inconsistent style

    //All products route
    router.get('/', (req, res, next) => {
        Product.findAll()
        .then(products => res.json(products))
        .catch(next)
    })

    //Single Product Route
    router.get('/:id', (req, res, next) => {
        Product.findById(req.params.id)
        .then(product=>res.json(product))
        .catch(next)
    })

    //Add Prouduct Route
     router.post('/', (req, res, next) => {
        if(req.body){ // OB/SJB: this is always true, always an empty object
          Product.findById(req.params.id) // OB/SJB: this does not create product, unfinished code not in master
          .then(product=>res.json(product))
          .catch(next)
        }
        else {
            res.sendStatus(500)
        }
    })

    //Update Product Route
    router.put('/:id', (req, res, next)=>{
     Product.findOne({
       where:{
         id: req.params.id
       }
     })
     .then(function(unupdatedProduct){
       if(unupdatedProduct){
       return unupdatedProduct.update(req.body);
       }
       // OB/SJB: if unupdatedProduct is falsy, it should throw an error
     })
     .then(updatedProduct=> res.status(201).json(updatedProduct)) // OB/SJB: 201 means "created"
     .catch(next);
   });

    //Delete product route
    router.delete('/:id', (req, res)=>{
     Product.destroy({
       where:{
         id: req.params.id
       }
     })
     .then(()=>{
       res.send({
         message: 'Product removed' // OB/SJB: perfect place for a 204 status ("empty content")
       });
     })
     .catch((err)=>{
       res.sendStatus(500); // OB/SJB: could just be next
     });
   });
module.exports = router
