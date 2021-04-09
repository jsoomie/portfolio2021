document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World");

    document
        .querySelector("#email-submit")
        .addEventListener("click", (event) => {
            event.preventDefault();

            const name = document.querySelector("#email-name").value.trim();
            const title = `${document
                .querySelector("#email-title")
                .value.trim()} -- From ${name}`;
            const body = document.querySelector("#email-body").value.trim();

            if (name && title && body) {
                window.location.href = `mailto:jsoomie@gmail.com?subject=${title}&body=${body}`;
                window.location.reload();
            } else {
                alert("Please check all fields!");
            }
        });
});
