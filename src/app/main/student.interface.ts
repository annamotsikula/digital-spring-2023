export interface IStudent {
    name: string,
    personalNumber: string,
    photourl: string,
    age?: number,
    gender: string,
    isStudent: boolean,
    cardIssueDate: Date,
    valid?: boolean,
    fav_courses: ICourses;
    cardColor?: string
}

export interface ICourses {
    maths: boolean,
    biology: boolean,
    geography: boolean,
    physics: boolean
}