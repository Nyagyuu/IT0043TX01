const flexContainer = document.querySelector('.flex-container');

function resetFlexbox() {
    flexContainer.style.gap = '0';
    flexContainer.style.flexDirection = 'row';
    flexContainer.style.justifyContent = 'flex-start';
    flexContainer.style.alignItems = 'stretch';
    document.getElementById('box1').style.flexGrow = '0';
    document.getElementById('box2').style.flexGrow = '0';
    document.getElementById('box3').style.flexGrow = '0';
}

function updateGap() {
    const gap = document.getElementById('gap').value;
    flexContainer.style.gap = `${gap}px`;
}

function setFlexDirection(direction) {
    flexContainer.style.flexDirection = direction;
}

function setJustifyContent(justifyContent) {
    flexContainer.style.justifyContent = justifyContent;
}

function setAlignItems(alignItems) {
    flexContainer.style.alignItems = alignItems;
}

function setFlexGrow(boxNumber, grow) {
    document.getElementById(`box${boxNumber}`).style.flexGrow = grow;
}
