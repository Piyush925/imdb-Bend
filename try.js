var queue = require('bull');
var redis = require('redis');
var client = redis.createClient();
client.on('connect', function() {
    console.log('connected');
})

//Initailize Queue
var trialQueue = new queue('trialQueue','redis://127.0.0.1:6379');


//Producer
trialQueue.add({
    word : "Hello",
    value : 10
})
trialQueue.on('waiting',job=>{
    console.log(`job is ${job}`)
})

//Consume
trialQueue.process(async (job,done)=>{
    let result= await add(job.data.value,10)
    console.log(result)
    done(null,result)
})


trialQueue.on('completed',(job,result)=>{
    console.log(`data is ${job.data.word} World with result ${result}`)
})

trialQueue.on('failed',job=>{
    console.log(`Failed job id is ${job.id}`)
})


const add = (a,b) => {
    return a+b;
}

