export default function getStudentsByLocation(arrayofobj, city, newGrades) {
    if (!Array.isArray(arrayofobj)) {
      return [];
    }
    const list = arrayofobj.filter((element) => element.location === city);
    const updated = list.map((element) => {
      const gradeS = newGrades.find((g) => g.studentId === element.id);
  
      const grade = gradeS ? gradeS.grade : 'N/A';
  
      return { ...element, grade };
    });
    return updated;
}
