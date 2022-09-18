const grades = []

const addGrade = () => {
    const grade = document.getElementById('grade')
    const values = document.getElementById('values')
    const gradeValue = Number(grade.value)

    grades.push(gradeValue)
    values.innerHTML += ` ${grade.value}`
    grade.value = ''
}

const getAverage = () => {
    const res = document.getElementById('res')
    const length = grades.length

    const sun = grades.reduce((a,b) => a + b)

    const average = sun / length

    res.innerHTML = average.toFixed(2)

    return average
}