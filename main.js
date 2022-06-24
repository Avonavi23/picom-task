const serviceButtons = document.querySelectorAll('.service-btn');
const choiceOfService = document.querySelectorAll('.choice-of-service');



serviceButtons.forEach((serviceButton, _index, items) => {
    serviceButton.addEventListener('click', () => {
        items.forEach((item) => {
            const isActive = item.classList.value.includes('active-btn');
            if (isActive) {
                item.classList.remove('active-btn');
            }
        });

        serviceButton.classList.add('active-btn');

        const contentId = serviceButton.attributes['data-content'].value;
        choiceOfService.forEach((item) => {
            item.style.display = 'none';

            if (item.attributes['data-content'].value === contentId) {
                item.style.display = 'flex';
            }
        })
    });
});

