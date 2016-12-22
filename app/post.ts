
export interface Post{
    userId: number;
    id?: number; //qustion mark means that the property is optional in a post request
    title: string;
    body: string;
}