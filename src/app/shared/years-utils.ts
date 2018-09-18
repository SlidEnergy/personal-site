export function getWorkExperienceYears() {
    let ageDifMs = Date.now() - new Date(2009, 11, 30).getTime();
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export function getEducationYears() {
    return 7;
}

export function getOldYears() {
    let ageDifMs = Date.now() - new Date(1987, 6, 30).getTime();
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
