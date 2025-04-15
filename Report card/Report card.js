function generateReports(students) {
   return students.map(student => {
    const total = student.scores.reduce((sum,score) => sum + score, 0);
    const average = total / student.scores.length;
    const grade = average >= 90 ? "A" :
                  average >= 80 ? "B" :
                  average >= 70 ? "C" :
                  average >= 60 ? "D" :
                  "F"
    return {
      name: student.name,
      averge: average,
      grade: grade
    }
   })


}

const student = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] }
  ];

console.log(generateReports(student))

// Time Complexity 
// the map function iterates over an array of length n so its time complexity is O(n) where n is the the length of the array (nb of students)
// the reduce function iterates over the scores array of length m so its time complexity is O(m) where m is the length of th scores array (nb of scores)
// the reduce function is nested inside the map function so the overall time complexity id O(n*m)