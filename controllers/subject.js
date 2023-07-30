import subject from "../models/subject.js";
import blog from "../models/blog.js";
export const index = async (req, res) => {
    const subjects = await subject.find({}, { name: 1 }).lean();
    console.log(subjects);
    res.render('subjects/index', { subjects })
}

export const roro = async (req, res) => {
    const subjects = await subject.find({}, { name: 1 }).lean();
    console.log(subjects);
    res.render('subjects/roro', { subjects })
}

export const create = async (req, res) => {
    const blogs = await blog.find().lean();
    console.log(blogs)
    res.render('subjects/create');
}
export const store = async (req, res) => {
    const { name, tittle, body } = req.body;
    await subject.create({
        name,
        tittle,
        body
    })
    res.redirect('/subjects')
}
export const show = async (req, res) => {
    const { _id } = req.params;

    const singleSubject = await subject.findById(_id).populate('blog').lean()
    console.log(singleSubject)
    res.render('subjects/show', { subject: singleSubject })
}