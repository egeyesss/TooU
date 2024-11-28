function goToText(text) {
    const wrappers = [
        "solarsystem-wrapper",
        "dinosaurs-wrapper",
        "dinosaursgone-wrapper",
        "homosapiens-wrapper",
        "citystates-wrapper"
    ];

    const buttons = ["1", "2", "3", "4", "5"];

    // Hide all wrappers
    wrappers.forEach(wrapper => {
        document.getElementById(wrapper).style.display = 'none';
    });

    // Reset all button background colors
    buttons.forEach(button => {
        document.getElementById(button).style.backgroundColor = "#6a6b6a";
    });

    // Show the selected wrapper
    document.getElementById(wrappers[text - 1]).style.display = 'block';

    // Highlight the selected button
    document.getElementById(buttons[text - 1]).style.backgroundColor = "#8dc697";
}
