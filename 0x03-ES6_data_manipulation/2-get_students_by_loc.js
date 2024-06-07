export default function getStudentsByLocation(arrayofobj, city) {
    if (!Array.isArray(arrayofobj)) {
      return 0;
    }
    const map = arrayofobj.filter((student) => student.location === city);
    return map;
}
