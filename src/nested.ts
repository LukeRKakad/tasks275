import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    let ret: Question[] = questions.filter(
        (quest: Question): boolean => quest.published,
    );
    return ret;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    let ret: Question[] = questions.filter(
        (quest: Question): boolean =>
            !(
                quest.options.length === 0 &&
                quest.body === "" &&
                quest.expected === ""
            ),
    );
    return ret;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    let ret: Question = {
        id: 0,
        expected: "",
        name: "",
        body: "yeeper",
        options: [],
        type: "multiple_choice_question",
        points: 0,
        published: false,
    };
    questions.map((quest: Question): void => {
        if (quest.id === id) {
            ret = quest;
        }
    });
    if (ret.body === "yeeper") {
        return null;
    }
    return ret;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    let ret: Question[] = questions.filter(
        (quest: Question): boolean => quest.id !== id,
    );
    return ret;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    let ret: string[] = questions.map((quest: Question): string => quest.name);
    return ret;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    let sum: number = 0;
    questions.map((quest: Question): number => (sum += quest.points));
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    let sum: number = 0;
    questions.map((quest: Question): void => {
        if (quest.published) {
            sum += quest.points;
        }
    });
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    let ret: string = "id,name,options,points,published\n";
    questions.map((quest: Question): void => {
        ret +=
            quest.id.toString() +
            "," +
            quest.name +
            "," +
            quest.options.length.toString() +
            "," +
            quest.points.toString() +
            "," +
            quest.published +
            "\n";
    });
    return ret.trim();
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    let temp: Answer = {
        questionId: 0,
        text: "",
        submitted: false,
        correct: false,
    };
    let ret: Answer[] = questions.map(
        (quest: Question): Answer =>
            (temp = {
                questionId: quest.id,
                text: "",
                submitted: false,
                correct: false,
            }),
    );
    if (temp.correct === questions[1].published) {
        temp.correct = false;
    }
    return ret;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    let temp: Question = {
        id: 0,
        expected: "",
        name: "",
        body: "yeeper",
        options: [],
        type: "multiple_choice_question",
        points: 0,
        published: false,
    };
    let ret: Question[] = questions.map(
        (quest: Question): Question =>
            (temp = {
                id: quest.id,
                published: true,
                options: quest.options,
                name: quest.name,
                type: quest.type,
                body: quest.body,
                expected: quest.expected,
                points: quest.points,
            }),
    );
    if (temp === questions[1]) {
        temp = questions[1];
    }
    return ret;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        return true;
    }
    let type1: string = questions[0].type;
    let ret: Question[] = questions.filter(
        (quest: Question): boolean => quest.type === type1,
    );
    return ret.length === questions.length;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    let ret: Question[] = questions.map((quest: Question): Question => quest);
    ret.push(makeBlankQuestion(id, name, type));
    return ret;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    let ret: Question[] = questions.map((quest: Question): Question => {
        if (quest.id === targetId) {
            let temp: Question = {
                name: newName,
                id: targetId,
                body: quest.body,
                published: quest.published,
                type: quest.type,
                options: quest.options,
                points: quest.points,
                expected: quest.expected,
            };
            return temp;
        }
        return quest;
    });
    return ret;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType,
): Question[] {
    let ret: Question[] = questions.map((quest: Question): Question => {
        if (quest.id === targetId) {
            let temp: Question = {
                name: quest.name,
                id: targetId,
                body: quest.body,
                published: quest.published,
                type: newQuestionType,
                options: quest.options,
                points: quest.points,
                expected: quest.expected,
            };
            if (temp.type === "short_answer_question") {
                temp.options = [];
            }
            return temp;
        }
        return quest;
    });
    return ret;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    let ret: Question[] = questions.map((quest: Question): Question => {
        if (quest.id === targetId) {
            let temp: Question = {
                name: quest.name,
                id: targetId,
                body: quest.body,
                published: quest.published,
                type: quest.type,
                options: [...quest.options],
                points: quest.points,
                expected: quest.expected,
            };
            if (targetOptionIndex === -1) {
                temp.options.push(newOption);
            } else {
                temp.options[targetOptionIndex] = newOption;
            }
            return temp;
        }
        return quest;
    });
    return ret;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number,
): Question[] {
    let dupe: Question = makeBlankQuestion(0, "bald", "short_answer_question");
    let ind: number = 0;
    let count: number = 0;
    let ret: Question[] = questions.map((quest: Question): Question => {
        if (quest.id === targetId) {
            let temp: Question = {
                name: quest.name,
                id: targetId,
                body: quest.body,
                published: quest.published,
                type: quest.type,
                options: quest.options,
                points: quest.points,
                expected: quest.expected,
            };
            dupe = duplicateQuestion(newId, temp);
            ind = count;
            return temp;
        }
        count++;
        return quest;
    });
    if (dupe.name !== "bald") {
        ret.splice(ind + 1, 0, dupe);
    }
    return ret;
}
