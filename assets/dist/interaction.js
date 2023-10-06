// function sendData (eventData){
    // let statement = eventData
    // {
    //     "actor": {
    //         "mbox": "mailto:deb2020lancing@gmail.com",
    //         "name": "ayan",
    //         "objectType": "Agent"
    //     },
    //     "verb": {
    //         "id": "http://adlnet.gov/expapi/verbs/answered",
    //         "display": {
    //             "en-US": "answered"
    //         }
    //     },
    //     "object": {
    //         "id": "http://adlnet.gov/xapi/trialactivity",
    //         "definition": {
    //             "name": {
    //                 "en-US": "Trial Activity"
    //             },
    //             "description": {
    //                 "en-US": "Example activity description"
    //             },
    //             "type": "http://adlnet.gov/expapi/activities/cmi.interaction",
    //             "interactionType": "performance",
    //             "steps": [
    //                 {
    //                     "id": "pong",
    //                     "description": {
    //                         "en-US": "Net pong matches won"
    //                     }
    //                 },
    //                 {
    //                     "id": "dg",
    //                     "description": {
    //                         "en-US": "Strokes over par in disc golf at Liberty"
    //                     }
    //                 },
    //                 {
    //                     "id": "lunch",
    //                     "description": {
    //                         "en-US": "Lunch having been eaten"
    //                     }
    //                 }
    //             ],
    //             "correctResponsesPattern": [
    //                 "pong[.]1:[,]dg[.]:10[,]lunch[.]"
    //             ]
    //         },
    //         "objectType": "Activity"
    //     }
    // }
    // ADL.XAPIWrapper.sendStatement(statement)
// }
// function xapiCall(){
//     console.log("will get the Data -->>@@##$$%%^^&&**");
//     H5P.externalDispatcher.on('xAPI', function (event) {
//         var data = {
//             statement: event.data.statement
//         };
//         (async()=>{
//             const response = await fetch("http://localhost:5001/xapiData", {
//                 method: "POST",
//                 headers: {"Content-Type": "application/json"},
//                 body: JSON.stringify(data.statement)
//             })
//             console.log(response)
//         })()
//     });
// }

// this is for connecting html file to apiwrapper...

/* <script src="./assets/dist/cryptojs_v3.1.2.js"></script>
<script src="./assets/dist/xapiwrapper.js"></script>
<script src="./assets/dist/interaction.js"></script> */