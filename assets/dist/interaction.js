function sendData (){
    let statement = {
        "actor": {
            "mbox": "mailto:deb2020lancing@gmail.com",
            "name": "ayan",
            "objectType": "Agent"
        },
        "verb": {
            "id": "http://adlnet.gov/expapi/verbs/answered",
            "display": {
                "en-US": "answered"
            }
        },
        "object": {
            "id": "http://adlnet.gov/xapi/trialactivity",
            "definition": {
                "name": {
                    "en-US": "Trial Activity"
                },
                "description": {
                    "en-US": "Example activity description"
                },
                "type": "http://adlnet.gov/expapi/activities/cmi.interaction",
                "interactionType": "performance",
                "steps": [
                    {
                        "id": "pong",
                        "description": {
                            "en-US": "Net pong matches won"
                        }
                    },
                    {
                        "id": "dg",
                        "description": {
                            "en-US": "Strokes over par in disc golf at Liberty"
                        }
                    },
                    {
                        "id": "lunch",
                        "description": {
                            "en-US": "Lunch having been eaten"
                        }
                    }
                ],
                "correctResponsesPattern": [
                    "pong[.]1:[,]dg[.]:10[,]lunch[.]"
                ]
            },
            "objectType": "Activity"
        }
    }
    ADL.XAPIWrapper.sendStatement(statement)
}