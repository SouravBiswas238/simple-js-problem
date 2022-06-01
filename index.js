// problem - 1 Ana to vori
function anaToVori(ana) {
    if (ana < 0) {
        return ('please enter a valid number!');
    }
    return ana / 16;
}
// console.log(anaToVori(-32));
// Problem-2 PandaCost
function pandaCost(singara, somucha, jilabi) {
    let totalCost = 0;
    singaraCost = 7 * singara;
    somuchaCost = 10 * somucha;
    jilabiCost = 15 * jilabi;
    totalCost = singaraCost + somuchaCost + jilabiCost;
    return totalCost;
}
// console.log(pandaCost(1, 2, 3));
// problem-3 PicninBudget
function picnicBudget(people) {
    // above 200
    if (people > 200) {
        totalBudget100 = 100 * 5000;
        totalBudget200 = 100 * 4000;
        totalBudget300 = (people - 200) * 3000;
        newBudget = totalBudget100 + totalBudget200 + totalBudget300;
        return newBudget;
    }
    else if (people > 100 && people < 200) {
        totalBudget100 = 100 * 5000;
        totalBudget200 = (people - 100) * 4000;
        newBudget = totalBudget100 + totalBudget200;
        return newBudget;
    }
    else if (people > 0 && people < 100) {
        totalBudget100 = people * 5000;
        return totalBudget100;
    }
    else {
        return ("Please ! enter a valid input.")
    }
}
// console.log(picnicBudget(201));
// problem-2 oddFriend
function oddFriend(friends) {
    for (const friend of friends) {
        if (friend.length % 2 != 0) {
            return friend;
            break;
        }
    }
}
    // const friends = ['sourav', 'sumon', 'siyam', 'bipule', 'mehedi'];
    // console.log(oddFriend(friends));