export interface IStudent {
    name: string,
    personalNumber: string,
    photourl: string,
    age?: number,
    gender: string,
    isStudent: boolean,
    cardIssueDate: Date,
    valid?: boolean
}