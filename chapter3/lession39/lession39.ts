// interfaces
interface IPerson {
    firstName: string;
    lastName: string
}

function getFullName(person: IPerson) {
    return  `${person.firstName}  ${person.lastName} `;
}