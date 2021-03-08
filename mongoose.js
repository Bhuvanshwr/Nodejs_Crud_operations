const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/playground')
.then(()=>console.log('connected to Mongodb..'))
.catch((err)=>console.error(err.message));

const courceShema =new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date: { type : Date ,default:Date.now},
    isPublished:Boolean
})

const Course= mongoose.model('Course',courceShema); // Class 

async function createCourse() {
    

const course=new Course({                  //object 
    name: 'Babu',
    author:'Bhuvaneshwar',
    tags:['Node','Angular'],
    isPublished:true
});


const result=await course.save();
//console.log(result)

}

//createCourse();


async function getCourse() {

    const pagenumber=2;
    const pagesize=10;
    const courses= await Course.find()
    .skip((pagenumber-1)*pagesize)
    .limit(pagesize)
    .select({name:1})
  //  .count();
    console.log(courses);
    
}

getCourse();