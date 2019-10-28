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
    if (!newList) return (new Set(oldList)).size !== oldList.length;
    return (new Set(newList)).size !== newList.length || newList.some(item => oldList.indexOf(item) >= 0);
}

export const getUrlParams = (search = '') => {
    const hashes = search.slice(search.indexOf('?') + 1).split('&');
    return hashes.reduce((acc, hash) => {
        const [key, val] = hash.split('=');
        return {
            ...acc,
            [key]: decodeURIComponent(val)
        };
    }, {});
};