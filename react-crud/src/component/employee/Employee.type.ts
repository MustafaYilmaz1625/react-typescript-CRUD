export interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export const dummyEploeeList: IEmployee[] = [
    {
        id: new Date().toJSON().toString(),
        firstName: 'John',
        lastName: 'Johnnn',
        email: "john@gmail.com",
    }
]

// export enum PageEnum {
//   list,
//   add,
//   edit,
// }