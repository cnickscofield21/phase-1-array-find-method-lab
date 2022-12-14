function superbowlWin(record) {
    const results = record.find(element => element.result === "W");

    return !!results ? results.year : undefined;
}