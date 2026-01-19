const mongoose = require ('mongoose')

const problemSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true,'Title  connot be empty']
    },
    description: {
        type: String,
        required: [true,'Description  connot be empty']
    },
    difficulty: {
        type: String,
        enum: ['esay', 'medium', 'hard'],
        required: [true,'Difficulty  connot be empty'],
        default: 'esay'
    },
    testCases: [
        {
            input: {
                type: String,
                required: true
            },
            output: {

                type: String
            }
        }
    ],
    editorial: {
        type: String
    }
    
})


const Problem = mongoose.model('Problem', problemSchema)

module.exports = Problem;







