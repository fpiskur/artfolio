export const getSkills = (comedians) => {

    let allSkills = {
        "dancing": [],
        "musical": [],
        "acting": []
    };

    // !!! BROKEN !!! (skills is now an object)
    comedians.forEach(comedian => {
        comedian.skills.forEach(skill => {
            if (skill.skillsList) {
                skill.skillsList.forEach(item => {
                    if (!allSkills[skill.category].includes(item)) {
                        allSkills[skill.category].push(item);
                    }
                });
            }
        });
    });

    return allSkills;
}

export const hasDuplicates = (oldList, newList) => {
    return (new Set(newList)).size !== newList.length || newList.some(item => oldList.indexOf(item) >= 0);
}