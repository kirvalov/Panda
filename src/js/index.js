(function () {
    const radioTabs = document.querySelectorAll('[name="tab-group-1"]');
    const insideContentBlock = document.getElementById('inside_content');
    const outsideContentBlock = document.getElementById('outside_content');

    [...radioTabs].forEach(element => {
        element.addEventListener('change', tabListener);
    });

    function tabListener(event) {
        switch (event.target.value) {
            case 'in_russia':
                insideContentBlock.classList.remove('hidden');
                outsideContentBlock.classList.add('hidden');
                break;
            case 'outside_russia':
                insideContentBlock.classList.add('hidden');
                outsideContentBlock.classList.remove('hidden');
                break;
        }
    }
})();