const BaseQuestion_API_URL = 'https://webdev-summerfull-2018.herokuapp.com/api/base';
const BaseQuestion_API_FIND = 'https://webdev-summerfull-2018.herokuapp.com/api/exam/examID/base';
const BaseQuestion_API_ID = 'https://webdev-summerfull-2018.herokuapp.com/api/base/baseId';


// const BaseQuestion_API_URL = 'http://localhost:8080/api/base';
// const BaseQuestion_API_FIND = 'http://localhost:8080/api/exam/examID/base';
// const BaseQuestion_API_ID = 'http://localhost:8080/api/base/baseId';




let _singleton = Symbol();

export default class BaseQuestionSerivceClientt {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new BaseQuestionSerivceClientt(_singleton);
        return this[_singleton]
    }

    findAllBaseQuestion() {

        return fetch(BaseQuestion_API_URL)
            .then(function (response) {
                return response.json();
            });

    }

    findAllBaseQuestionsForExam(ExamID) {
        return fetch(
            BaseQuestion_API_FIND
                .replace('examID', ExamID))
            .then(function (response) {
                return response.json();
            })
    }

    CreateBaseQuestion(examId, baseQuestion) {
        console.log("yescreateExan");
        return fetch(BaseQuestion_API_FIND.replace('examID', examId),
            {
                body: JSON.stringify(baseQuestion),
                headers: {'Content-Type': 'application/json'},
                method: 'POST'
            }).then(function (response) {
            return response.json();
        });


    }

    deleteBaseQuestion(baseQuestionId) {
        return fetch(BaseQuestion_API_ID.replace
        ('baseId', baseQuestionId), {
            method: 'delete'
        })
    }


    findBaseQuestionById(baseQuestionId) {
        return fetch(BaseQuestion_API_ID.replace
        ('baseId', baseQuestionId))
            .then(function (response) {
                return response.json()

            })
    }

    updateBaseQuestion(baseQuestionId, baseQuestion) {
        return fetch(BaseQuestion_API_ID.replace('baseId', baseQuestionId),
            {
                body: JSON.stringify(baseQuestion),
                headers: {'Content-Type': 'application/json'},
                method: 'PUT'
            }).then(function (response) {
            return response.json();
        });
    }


}