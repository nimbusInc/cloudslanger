'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const router = require('express').Router()
const {mustBeLoggedIn, forbidden} = require('./auth.filters')


    //All orders route
    router.get('/', (req, res, next) => {
        Order.findAll()
        .then(orders => res.json(orders))
        .catch(next)
    })

    //Single order route
    router.get('/:id', (req, res, next) => {
        Order.findById(req.params.id)
        .then(order => res.json(order))
        .catch(next)
    })

    //Add single order
    router.post("/", (req, res, next)=>{
      if(req.body){
        Order.create(req.body)
        .then(order=> res.status(201).json(order))
        .catch(next);
      } else{
        res.sendStatus(500);
      }
    });

    //Update single order
    router.put("/:id", (req, res, next)=>{
      Order.findOne({
        where:{
          id: req.params.id
        }
      })
      .then(function(unupdatedOrder){
        if(unupdatedOrder){
        return unupdatedOrder.update(req.body);
        }
      })
      .then(updatedOrder=> res.status(201).json(updatedOrder))
      .catch(next);
    });

    //Delete Single Order
    router.delete("/:id", (req, res)=>{
      Order.destroy({
        where:{
          id: req.params.id
        }
      })
      .then(()=>{
        res.send({
          message: "Order removed"
        });
      })
      .catch((err)=>{
        res.sendStatus(500);
      });
    });


module.exports = router
