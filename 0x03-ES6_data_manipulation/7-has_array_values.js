export default function hasValuesFromArray(setA, array) {
    const ray = true;
    for (const elem of array) {
      if (!setA.has(elem)) {
        return false;
      }
    }
    return ray;
}
