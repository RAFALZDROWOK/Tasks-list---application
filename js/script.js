{
    const tasks = [];

    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };

    init();
}