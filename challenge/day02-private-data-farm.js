export function transformData(data){
    return data.map(({ name: {first, last}, dob: {date:birthday} }) => {
        return {
            fullName: `${first} ${last}`,
            birthday: new Date(birthday).toDateString()
        }});
}
