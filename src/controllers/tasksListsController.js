import { Tasks } from '../models'
import { dataSave } from './baseController'

export const get = async (req,res,next) => {
    let data = await Tasks.find()
    return res.json({status:true, data})
}

export const create = async (req,res,next) => {
    const data = await dataSave(req.body, Tasks)
    return res.json({status:true, data})
}

export const getOne = async (req,res,next) => {
    let data = await Tasks.findById(req.params.id)
    return res.json({status:true, data})
}

export const find = async (req,res,next) => {
    let data = await Tasks.find(req.body)
    return res.json({status:true, data})
}

export const list = async (req,res,next) => {
    const { perPage = 10, page = 1, q=null } = req.body
    let query = {}
    if(q){
        query.title =  { "$regex": q, "$options": "i" }
    }
    const data = await Tasks.find(query).limit(perPage).skip((page-1)*perPage)
    const total = await Tasks.countDocuments(query)
    return res.json({status:true, data, total:total})
}

export const update = async (req,res,next) => {
    let data = await Tasks.findByIdAndUpdate(req.params.id, req.body, {new: true})
    return res.json({status:true, data})
}

export const del = async (req,res,next) => {
    let data = await Tasks.deleteOne({_id:req.params.id})
    return res.json({status:true, data})
}