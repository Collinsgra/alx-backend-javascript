export default function getStudentIdsSum(arrayOfObj) {
    const initialValue = 0;
  
    if (!Array.isArray(arrayOfObj)) {
      return initialValue;
    }
  
    const sum = arrayOfObj.reduce((accumulator, student) => accumulator + student.id, initialValue);
  
    return sum;
}
