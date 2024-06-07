export default function getListStudentIds(arrayofobj) {
    if (!Array.isArray(arrayofobj)) {
      return [];
    }
    const map = arrayofobj.map((student) => student.id);
    return map;
}
