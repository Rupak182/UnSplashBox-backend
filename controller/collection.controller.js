import mongoose from "mongoose";
import Collect from "../model/collect.model.js";

export const addCollection = async(req, res) => {
    try {
        const { image_id,url,name } = req.body;

        const createdCollect = new Collect({
            results: [
                {
                    image_id: image_id,
                    image_url: url
                }
            ],
            cover: url,
            name: name
        });
        console.log(createdCollect);
        await createdCollect.save();
        res.status(201).json({message:"Collection added successfully", createdCollect});
    } catch (error) {
        console.log("Error :" + error);
        res.status(500).json({message:"Internal server error"});

    }
}

export const updateCollection = async(req, res) => {
    try {
        const { id, url,image_id } = req.body;

        const collect =await Collect.findById(id);

        collect.results =[...collect.results , {
            image_id: image_id,
            image_url: url,
        }]
        await collect.save();
        res.status(200).json({message:"collection updated successfully"});

    } catch (error) {
        console.log("Error :" + error);
        res.status(500).json({message:"Internal server error"});
    }
}

export const getCollections = async(req, res) => {
    try {

        let data =await Collect.find({});
        res.status(200).json(data);

    } catch (error) {
        console.log("Error :" + error);
        res.status(500).json({message:"Internal server error"});
    }
}


// export const getCollection = async(req, res) => {
//     try {

//         const {id}= req.body;

//         let data =await Collect.findOne({id:id});

//         if(data)
//             {
//                 res.status(200).json(data);

//             }


//         else{
//             res.status(400).json(data);
//         }

//         res.status(200).json(data);

//     } catch (error) {
//         console.log("Error :" + error);
//         res.status(500).json({message:"Internal server error"});
//     }
// }


export const deleteCollection = async(req, res) => {
    try {
        console.log(req.body)
        const {id} = req.body;
        console.log("id is :",id);
        await Collect.deleteOne({_id:id});


        res.status(200).json({message:"collection deleted successfully"});

    } catch (error) {
        console.log("Error :" + error);
        res.status(500).json({message:"Internal server error"});
    }
}
