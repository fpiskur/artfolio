export const getSkills = (comedians) => {

    let allSkills = {
        "dancing": [],
        "musical": [],
        "acting": []
    };

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